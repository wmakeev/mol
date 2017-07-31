namespace $ { export class $mol_page extends $mol_view {

	/// focus_trigger null
	focus_trigger() {
		return <any> null
	}

	/// event_top?val null
	@ $mol_mem()
	event_top( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Title $mol_button 
	/// 	sub / <= title 
	/// 	event_click?val <=> event_top?val
	@ $mol_mem()
	Title() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.title() )
			obj.event_click = ( val? : any ) => this.event_top( val )
			return obj
		})( new $mol_button )
	}

	/// tools /
	tools() {
		return [] as any[]
	}

	/// Tools $mol_view sub <= tools
	@ $mol_mem()
	Tools() {
		return (( obj )=>{
			obj.sub = () => this.tools()
			return obj
		})( new $mol_view )
	}

	/// head / 
	/// 	<= Title 
	/// 	<= Tools
	head() {
		return [].concat( this.Title() , this.Tools() )
	}

	/// Head $mol_view sub <= head
	@ $mol_mem()
	Head() {
		return (( obj )=>{
			obj.sub = () => this.head()
			return obj
		})( new $mol_view )
	}

	/// body_scroll_top?val 0
	@ $mol_mem()
	body_scroll_top( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 0
	}

	/// body /
	body() {
		return [] as any[]
	}

	/// Body $mol_scroll 
	/// 	scroll_top?val <=> body_scroll_top?val 
	/// 	sub <= body
	@ $mol_mem()
	Body() {
		return (( obj )=>{
			obj.scroll_top = ( val? : any ) => this.body_scroll_top( val )
			obj.sub = () => this.body()
			return obj
		})( new $mol_scroll )
	}

	/// foot /
	foot() {
		return [] as any[]
	}

	/// Foot $mol_view sub <= foot
	@ $mol_mem()
	Foot() {
		return (( obj )=>{
			obj.sub = () => this.foot()
			return obj
		})( new $mol_view )
	}

	/// sub / 
	/// 	<= Head 
	/// 	<= Body 
	/// 	<= Foot
	sub() {
		return [].concat( this.Head() , this.Body() , this.Foot() )
	}

} }

