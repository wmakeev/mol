namespace $ { export class $mol_list_demo_empty extends $mol_list {

	/// title @ \Empty list with placeholder
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// rows /
	rows() {
		return [] as any[]
	}

	/// empty_message @ \Empty list
	empty_message() {
		return $mol_locale.text( this.locale_contexts() , "empty_message" )
	}

	/// Empty $mol_view sub / <= empty_message
	@ $mol_mem()
	Empty() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.empty_message() )
			return obj
		})( new $mol_view )
	}

} }

