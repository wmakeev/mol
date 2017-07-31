namespace $ { export class $mol_labeler extends $mol_view {

	/// dom_name \label
	dom_name() {
		return "label"
	}

	/// label / <= title
	label() {
		return [].concat( this.title() )
	}

	/// Title $mol_view sub <= label
	@ $mol_mem()
	Title() {
		return (( obj )=>{
			obj.sub = () => this.label()
			return obj
		})( new $mol_view )
	}

	/// content null
	content() {
		return <any> null
	}

	/// Content $mol_view sub / <= content
	@ $mol_mem()
	Content() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.content() )
			return obj
		})( new $mol_view )
	}

	/// sub / 
	/// 	<= Title 
	/// 	<= Content
	sub() {
		return [].concat( this.Title() , this.Content() )
	}

} }

