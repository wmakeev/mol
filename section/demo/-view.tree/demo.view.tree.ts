namespace $ { export class $mol_section_demo extends $mol_scroll {

	/// title @ \Section with header
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// Section $mol_section 
	/// 	head \Section header
	/// 	Content $mol_filler
	@ $mol_mem()
	Section() {
		return (( obj )=>{
			obj.head = () => "Section header"
			obj.Content = () => (( obj )=>{
			return obj
		})( new $mol_filler )
			return obj
		})( new $mol_section )
	}

	/// Article $mol_row sub / <= Section
	@ $mol_mem()
	Article() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Section() )
			return obj
		})( new $mol_row )
	}

	/// sub / <= Article
	sub() {
		return [].concat( this.Article() )
	}

} }

