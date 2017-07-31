namespace $ { export class $mol_app_habhub extends $mol_book {

	/// Placeholder $mol_book_placeholder 
	/// 	minimal_width 600 
	/// 	title <= title_default
	@ $mol_mem()
	Placeholder() {
		return (( obj )=>{
			obj.minimal_width = () => 600
			obj.title = () => this.title_default()
			return obj
		})( new $mol_book_placeholder )
	}

	/// title_default \HabHub
	title_default() {
		return "HabHub"
	}

	/// menu_rows /
	menu_rows() {
		return [] as any[]
	}

	/// Menu $mol_list rows <= menu_rows
	@ $mol_mem()
	Menu() {
		return (( obj )=>{
			obj.rows = () => this.menu_rows()
			return obj
		})( new $mol_list )
	}

	/// Menu_page $mol_page 
	/// 	minimal_width 400 
	/// 	title <= title_default 
	/// 	body / <= Menu
	@ $mol_mem()
	Menu_page() {
		return (( obj )=>{
			obj.minimal_width = () => 400
			obj.title = () => this.title_default()
			obj.body = () => [].concat( this.Menu() )
			return obj
		})( new $mol_page )
	}

	/// gist_current_title \
	gist_current_title() {
		return ""
	}

	/// close_arg * gist null
	close_arg() {
		return ({
			"gist" :  <any> null ,
		})
	}

	/// Close_icon $mol_icon_cross
	@ $mol_mem()
	Close_icon() {
		return (( obj )=>{
			return obj
		})( new $mol_icon_cross )
	}

	/// Close $mol_link 
	/// 	arg <= close_arg 
	/// 	sub / <= Close_icon
	@ $mol_mem()
	Close() {
		return (( obj )=>{
			obj.arg = () => this.close_arg()
			obj.sub = () => [].concat( this.Close_icon() )
			return obj
		})( new $mol_link )
	}

	/// details_scroll_top?val 0
	@ $mol_mem()
	details_scroll_top( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 0
	}

	/// gist_current_content \
	gist_current_content() {
		return ""
	}

	/// Datails_text $mol_text text <= gist_current_content
	@ $mol_mem()
	Datails_text() {
		return (( obj )=>{
			obj.text = () => this.gist_current_content()
			return obj
		})( new $mol_text )
	}

	/// Details $mol_page 
	/// 	minimal_width 600 
	/// 	title <= gist_current_title 
	/// 	event_top?val <=> event_front_up?val 
	/// 	tools / <= Close 
	/// 	body_scroll_top?val <=> details_scroll_top?val 
	/// 	body / <= Datails_text
	@ $mol_mem()
	Details() {
		return (( obj )=>{
			obj.minimal_width = () => 600
			obj.title = () => this.gist_current_title()
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			obj.tools = () => [].concat( this.Close() )
			obj.body_scroll_top = ( val? : any ) => this.details_scroll_top( val )
			obj.body = () => [].concat( this.Datails_text() )
			return obj
		})( new $mol_page )
	}

	/// pages / 
	/// 	<= Placeholder 
	/// 	<= Menu_page 
	/// 	<= Details
	pages() {
		return [].concat( this.Placeholder() , this.Menu_page() , this.Details() )
	}

	/// gist_title!id \
	gist_title( id : any ) {
		return ""
	}

	/// gist_arg!id *
	gist_arg( id : any ) {
		return ({
		})
	}

	/// Menu_row!id $mol_link 
	/// 	title <= gist_title!id 
	/// 	arg <= gist_arg!id 
	/// 	event_click?val <=> event_front_down?val
	@ $mol_mem_key()
	Menu_row( id : any ) {
		return (( obj )=>{
			obj.title = () => this.gist_title(id)
			obj.arg = () => this.gist_arg(id)
			obj.event_click = ( val? : any ) => this.event_front_down( val )
			return obj
		})( new $mol_link )
	}

} }

