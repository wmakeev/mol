namespace $ { export class $mol_page_demo extends $mol_page {

	/// title @ \Page with header, body and footer
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// Button $mol_button_minor title \Toolbar Button
	@ $mol_mem()
	Button() {
		return (( obj )=>{
			obj.title = () => "Toolbar Button"
			return obj
		})( new $mol_button_minor )
	}

	/// tools / <= Button
	tools() {
		return [].concat( this.Button() )
	}

	/// Text $mol_filler
	@ $mol_mem()
	Text() {
		return (( obj )=>{
			return obj
		})( new $mol_filler )
	}

	/// Content $mol_row sub / <= Text
	@ $mol_mem()
	Content() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Text() )
			return obj
		})( new $mol_row )
	}

	/// body / <= Content
	body() {
		return [].concat( this.Content() )
	}

	/// Foot_text $mol_view sub / \Footer
	@ $mol_mem()
	Foot_text() {
		return (( obj )=>{
			obj.sub = () => [].concat( "Footer" )
			return obj
		})( new $mol_view )
	}

	/// Foot_content $mol_row sub / <= Foot_text
	@ $mol_mem()
	Foot_content() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Foot_text() )
			return obj
		})( new $mol_row )
	}

	/// foot / <= Foot_content
	foot() {
		return [].concat( this.Foot_content() )
	}

} }

