namespace $ { export class $mol_switch extends $mol_view {

	/// minimal_height 44
	minimal_height() {
		return 44
	}

	/// option_checked!id?val false
	@ $mol_mem_key()
	option_checked( id : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// option_title!id \
	option_title( id : any ) {
		return ""
	}

	/// enabled true
	enabled() {
		return true
	}

	/// option_enabled!id <= enabled
	option_enabled( id : any ) {
		return this.enabled()
	}

	/// Option!id $mol_check 
	/// 	checked?val <=> option_checked!id?val 
	/// 	title <= option_title!id 
	/// 	enabled <= option_enabled!id
	@ $mol_mem_key()
	Option( id : any ) {
		return (( obj )=>{
			obj.checked = ( val? : any ) => this.option_checked(id , val )
			obj.title = () => this.option_title(id)
			obj.enabled = () => this.option_enabled(id)
			return obj
		})( new $mol_check )
	}

	/// value?val null
	@ $mol_mem()
	value( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// options *
	options() {
		return ({
		})
	}

	/// items /
	items() {
		return [] as any[]
	}

	/// sub <= items
	sub() {
		return this.items()
	}

} }

