declare var Proxy : any

namespace $ {
	
	export enum $mol_atom_status {
		obsolete = 'obsolete' ,
		checking = 'checking' ,
		pulling = 'pulling' ,
		actual = 'actual' ,
	}
	
	export class $mol_atom< Value = null > extends $mol_object {
		
		masters : Set< $mol_atom<any> > | null = null
		slaves : Set< $mol_atom<any> > | null = null
		
		status = $mol_atom_status.obsolete
		autoFresh = true
		
		handler : ( next? : Value|Error , force? : $mol_atom_force )=> Value|void
		host : { [ key : string ] : any }
		field : string
		
		constructor(
			host : any ,
			handler : ( next? : Value , force? : $mol_atom_force )=> Value|void = ()=> undefined,
			field = ''
		) {
			super()
			
			this.handler = handler
			this.host = Object( host )
			this.field = field
		}
		
		destroyed( next? : boolean ) {
			if( next ) {
				this.unlink()
				
				const host = this.host
				const value = host[ this.field ]
				if( value instanceof $mol_object ) {
					if( ( value.object_owner() === host ) && ( value.object_field() === this.field ) ) {
						value.destroyed( true );
					}
				}
				
				host[ this.field ] = undefined
				host[ this.field + '@' ] = undefined
				
				this.status = $mol_atom_status.obsolete
			}
			
			return super.destroyed( next )
		}
		
		unlink() {
			this.disobey_all()
			this.check_slaves()
		}
		
		toString() {
			return `${ this.host }.${ this.field }@`
		}
		
		get( force? : $mol_atom_force ) {
			if( this.status === $mol_atom_status.pulling ) {
				throw new Error( `Cyclic atom dependency of ${ this }` )
			}
			
			this.actualize( force )
			
			const slave = $mol_atom.stack[0]
			if( slave ) {
				this.lead( slave )
				slave.obey( this )
			}
			
			const value : Value = this.host[ this.field ]
			
			if( typeof Proxy !== 'function' && value instanceof Error ) {
				throw value
			}
			
			return value
		}
		
		actualize( force? : $mol_atom_force ) {
			
			//this.log([ 'actualize' ])
			
			if( !force && this.status === $mol_atom_status.actual ) return
			
			const slave = $mol_atom.stack[0]
			$mol_atom.stack[0] = this
			
			if( !force && this.status === $mol_atom_status.checking ) {
				
				this.masters!.forEach(
					master => {
						if( this.status !== $mol_atom_status.checking ) return
						master.actualize()
					}
				)
				
				if( this.status === $mol_atom_status.checking ) {
					this.status = $mol_atom_status.actual
				}
			}
			
			if( force || this.status !== $mol_atom_status.actual ) {
				
				const oldMasters = this.masters
				this.masters = null
				
				if( oldMasters ) oldMasters.forEach(
					master => {
						master.dislead( this )
					}
				)
				
				this.status = $mol_atom_status.pulling
				const next = this.pull( force )
				
				this.push( next )
				
			}
			
			$mol_atom.stack[0] = slave
		}
		
		pull( force? : $mol_atom_force ) {
			try {
				return this.handler( this._next , force )
			} catch( error ) {
				if( error[ '$mol_atom_catched' ] ) return error
				if( error instanceof $mol_atom_wait ) return error
				
				console.error( error.stack || error )
				
				if(!( error instanceof Error )) {
					error = new Error( error.stack || error )
				}
				
				error['$mol_atom_catched'] = true
				return error
			}
		}
		
		_next? : Value|Error
		
		set( next : Value ) : Value {
			const next_normal = this.normalize( next , this._next )
			if( next_normal === this._next ) return this.get()
			if( next_normal === this.host[ this.field ] ) return this.get()
			
			this._next = next_normal
			this.obsolete()
			return this.get()
		}
		
		normalize( next : Value , prev? : Value|Error ) : Value {
			if( next === prev ) return next
			
			if( ( next instanceof Array ) && ( prev instanceof Array ) && ( next.length === prev.length ) ) {
				for( let i = 0 ; i < next.length ; ++i ) {
					if( next[ i ] !== prev[ i ] ) return next as any
				}
				return prev as any
			}
			
			return next
		}
		
		push( next_raw? : Value|Error ) {
			this._next = undefined
			
			this.status = $mol_atom_status.actual
			
			const host = this.host
			const prev = host[ this.field ]
			
			if( next_raw === undefined ) return prev
			
			let next = ( next_raw instanceof Error ) ? next_raw : this.normalize( next_raw , prev )
			
			if( next === prev ) return prev
			
			if( next instanceof $mol_object ) {
				next.object_field( this.field )
				next.object_owner( host )
			}
			
			if(( typeof Proxy === 'function' )&&( next instanceof Error )) {
				next = new Proxy( next , {
					get( target : Error ) {
						throw target.valueOf()
					} ,
					ownKeys( target : Error ) {
						throw target.valueOf()
					} ,
				} )
			}
			
			host[ this.field ] = next
			this.log( [ 'push' , next , prev ] )
			
			this.obsolete_slaves()
			
			return next as Value
		}
		
		obsolete_slaves() {
			if( !this.slaves ) return
			
			this.slaves.forEach( slave => slave.obsolete() )
		}
		
		check_slaves() {
			if( this.slaves ) {
				this.slaves.forEach( slave => slave.check() )
			} else {
				if( this.autoFresh ) $mol_atom.actualize( this )
			}
		}
		
		check() {
			//if( this.status === $mol_atom_status.pulling ) {
			//	throw new Error( `May be obsolated while pulling ${ this }` )
			//}
			
			if( this.status === $mol_atom_status.actual ) {
				//this.log([ 'checking' ])
				this.status = $mol_atom_status.checking
				
				this.check_slaves()
			}
		}
		
		obsolete() {
			if( this.status === $mol_atom_status.obsolete ) return
			
			//if( this.status === $mol_atom_status.pulling ) {
			//	throw new Error( `Obsolated while pulling ${ this }` )
			//} 
			
			// this.log( [ 'obsolete' ] )
			
			this.status = $mol_atom_status.obsolete
			
			this.check_slaves()
			
			return
		}
		
		lead( slave : $mol_atom<any> ) {
			if( !this.slaves ) {
				this.slaves = new Set<$mol_atom<any>>()
				$mol_atom.unreap( this )
			}
			this.slaves.add( slave )
		}
		
		dislead( slave : $mol_atom<any> ) {
			if( !this.slaves ) return
			
			if( this.slaves.size === 1 ) {
				this.slaves = null
				$mol_atom.reap( this )
			} else {
				this.slaves.delete( slave )
			}
		}
		
		obey( master : $mol_atom<any> ) {
			if( !this.masters ) this.masters = new Set< $mol_atom<any> >()
			this.masters.add( master )
		}
		
		disobey( master : $mol_atom<any> ) {
			if( !this.masters ) return
			this.masters.delete( master )
		}
		
		disobey_all() {
			if( !this.masters ) return
			
			this.masters.forEach( master => master.dislead( this ) )
			
			this.masters = null
		}
		
		value( next? : Value , force? : $mol_atom_force ) {
			if( next === undefined ) {
				return this.get( force )
			} else {
				if( force ) {
					return this.push( next )
				} else {
					return this.set( next )
				}
			}
		}
		
		static stack = [] as $mol_atom<any>[]
		static updating : $mol_atom<any>[] = []
		static reaping = new Set< $mol_atom<any> >()
		static scheduled = false
		
		static actualize( atom : $mol_atom<any> ) {
			$mol_atom.updating.push( atom )
			$mol_atom.schedule()
		}
		
		static reap( atom : $mol_atom<any> ) {
			$mol_atom.reaping.add( atom )
			$mol_atom.schedule()
		}
		
		static unreap( atom : $mol_atom<any> ) {
			$mol_atom.reaping.delete( atom )
		}
		
		static schedule() {
			if( this.scheduled ) return
			
			new $mol_defer(
				() => {
					if( !this.scheduled ) return
					this.scheduled = false
					this.sync()
				}
			)
			
			this.scheduled = true
		}
		
		static sync() {
			$mol_log( '$mol_atom.sync' , [] )
			this.schedule()
			
			while( true ) {
				const atom = this.updating.shift()
				if( !atom ) break
				if( this.reaping.has( atom ) ) continue
				if( !atom.destroyed() ) atom.get()
			}
			
			while( this.reaping.size ) {
				this.reaping.forEach(
					atom => {
						this.reaping.delete( atom )
						if( !atom.slaves ) atom.destroyed( true )
					}
				)
			}
			
			this.scheduled = false
		}
		
		then< Next >( done : ( prev? : Value )=> Next , fail? : ( error : Error )=> Next ) {
			
			let prev : Value
			let next : Next
			
			const atom = new $mol_atom<any>(
				this ,
				() => {
					try {
						
						if( prev == undefined ) {
							const val = this.get()
							if( val instanceof $mol_atom_wait ) return val
							if( val ) val.valueOf()
							prev = val
						}
						
						if( next == undefined ) {
							const val = done( prev )
							if( val instanceof $mol_atom_wait ) return val
							if( val ) val.valueOf()
							next = val
						}
						
						return next

					} catch( error ) {
						
						if( error instanceof $mol_atom_wait ) return error
						
						if( fail ) return fail( error )
						
						return error
					}

				} ,
			)
			
			$mol_atom.actualize( atom )
			
			return atom
		}
		
		catch( fail : ( error : Error )=> Value ) {
			return this.then( next => next , fail )
		}
		
	}
	
	$mol_state_stack.set( '$mol_atom.stack' , $mol_atom.stack )
	
	export class $mol_atom_wait extends Error {
		name = '$mol_atom_wait'
		
		constructor( message = 'Wait...' ) {
			super( message )
			this['__proto__'] = new.target.prototype
		}
	}
	
	export class $mol_atom_force extends Object {
		$mol_atom_force : boolean
		static $mol_atom_force : boolean
	}
	
}
