namespace $ { export class $mol_expander_demo extends $mol_scroll {

	/// title @ \Simple spoiler
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// Expander $mol_expander 
	/// 	title \Lorem Ipsum
	/// 	Content $mol_filler
	@ $mol_mem()
	Expander() {
		return (( obj )=>{
			obj.title = () => "Lorem Ipsum"
			obj.Content = () => (( obj )=>{
			return obj
		})( new $mol_filler )
			return obj
		})( new $mol_expander )
	}

	/// sub / <= Expander
	sub() {
		return [].concat( this.Expander() )
	}

} }

