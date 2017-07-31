namespace $ { export class $mol_book_demo extends $mol_book {

	/// title @ \Adaprive layout for various sizes of screen
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// Placeholder $mol_book_placeholder 
	/// 	minimal_width 200 
	/// 	sub / \ Placeholder
	@ $mol_mem()
	Placeholder() {
		return (( obj )=>{
			obj.minimal_width = () => 200
			obj.sub = () => [].concat( " Placeholder" )
			return obj
		})( new $mol_book_placeholder )
	}

	/// Addon $mol_view 
	/// 	minimal_width 250 
	/// 	sub / \ Addon
	@ $mol_mem()
	Addon() {
		return (( obj )=>{
			obj.minimal_width = () => 250
			obj.sub = () => [].concat( " Addon" )
			return obj
		})( new $mol_view )
	}

	/// Main $mol_view 
	/// 	minimal_width 400 
	/// 	sub / \ Main
	@ $mol_mem()
	Main() {
		return (( obj )=>{
			obj.minimal_width = () => 400
			obj.sub = () => [].concat( " Main" )
			return obj
		})( new $mol_view )
	}

	/// pages / 
	/// 	<= Placeholder 
	/// 	<= Addon 
	/// 	<= Main
	pages() {
		return [].concat( this.Placeholder() , this.Addon() , this.Main() )
	}

} }

