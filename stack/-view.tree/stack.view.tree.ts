namespace $ { export class $mol_stack extends $mol_book {

	/// main /
	main() {
		return [] as any[]
	}

	/// Main $mol_view sub <= main
	@ $mol_mem()
	Main() {
		return (( obj )=>{
			obj.sub = () => this.main()
			return obj
		})( new $mol_view )
	}

	/// addon /
	addon() {
		return [] as any[]
	}

	/// Addon $mol_view sub <= addon
	@ $mol_mem()
	Addon() {
		return (( obj )=>{
			obj.sub = () => this.addon()
			return obj
		})( new $mol_view )
	}

	/// pages / 
	/// 	<= Main 
	/// 	<= Addon
	pages() {
		return [].concat( this.Main() , this.Addon() )
	}

} }

