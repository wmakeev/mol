namespace $ { export class $mol_list_demo_large extends $mol_scroll {

	/// title @ \Large list of rows with dynamic content
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// rows /
	rows() {
		return [] as any[]
	}

	/// lister $mol_list rows <= rows
	@ $mol_mem()
	lister() {
		return (( obj )=>{
			obj.rows = () => this.rows()
			return obj
		})( new $mol_list )
	}

	/// sub / <= lister
	sub() {
		return [].concat( this.lister() )
	}

	/// row_text!id \
	row_text( id : any ) {
		return ""
	}

	/// Content!id $mol_filler
	@ $mol_mem_key()
	Content( id : any ) {
		return (( obj )=>{
			return obj
		})( new $mol_filler )
	}

	/// Row!id $mol_expander 
	/// 	title <= row_text!id 
	/// 	content / <= Content!id
	@ $mol_mem_key()
	Row( id : any ) {
		return (( obj )=>{
			obj.title = () => this.row_text(id)
			obj.content = () => [].concat( this.Content(id) )
			return obj
		})( new $mol_expander )
	}

} }

