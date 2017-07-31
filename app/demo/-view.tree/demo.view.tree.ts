namespace $ { export class $mol_app_demo extends $mol_book {

	/// title \$mol
	title() {
		return "$mol"
	}

	/// source_prefix \https://github.com/eigenmethod/mol/tree/master/
	source_prefix() {
		return "https://github.com/eigenmethod/mol/tree/master/"
	}

	/// Placeholder $mol_app_demo_placeholder title <= title
	@ $mol_mem()
	Placeholder() {
		return (( obj )=>{
			obj.title = () => this.title()
			return obj
		})( new $mol_app_demo_placeholder )
	}

	/// nav_hierarchy null
	nav_hierarchy() {
		return <any> null
	}

	/// nav_option!id null
	nav_option( id : any ) {
		return <any> null
	}

	/// filter_string?val \
	@ $mol_mem()
	filter_string( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Menu $mol_app_demo_menu 
	/// 	hierarchy <= nav_hierarchy 
	/// 	option!id <= nav_option!id 
	/// 	filter?val <=> filter_string?val 
	/// 	event_navigate?val <=> event_front_down?val
	@ $mol_mem()
	Menu() {
		return (( obj )=>{
			obj.hierarchy = () => this.nav_hierarchy()
			obj.option = ( id : any ) => this.nav_option(id)
			obj.filter = ( val? : any ) => this.filter_string( val )
			obj.event_navigate = ( val? : any ) => this.event_front_down( val )
			return obj
		})( new $mol_app_demo_menu )
	}

	/// source_link \
	source_link() {
		return ""
	}

	/// main_content /
	main_content() {
		return [] as any[]
	}

	/// Detail $mol_app_demo_detail 
	/// 	minimal_width 600 
	/// 	title <= title 
	/// 	source_link <= source_link 
	/// 	body <= main_content 
	/// 	event_top?val <=> event_front_up?val
	@ $mol_mem()
	Detail() {
		return (( obj )=>{
			obj.minimal_width = () => 600
			obj.title = () => this.title()
			obj.source_link = () => this.source_link()
			obj.body = () => this.main_content()
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			return obj
		})( new $mol_app_demo_detail )
	}

	/// blocks / 
	/// 	<= Menu 
	/// 	<= Detail
	blocks() {
		return [].concat( this.Menu() , this.Detail() )
	}

	/// pages <= blocks
	pages() {
		return this.blocks()
	}

	/// welcome_text \
	welcome_text() {
		return ""
	}

	/// Welcome_text $mol_text text <= welcome_text
	@ $mol_mem()
	Welcome_text() {
		return (( obj )=>{
			obj.text = () => this.welcome_text()
			return obj
		})( new $mol_text )
	}

	/// Welcome $mol_scroll sub / <= Welcome_text
	@ $mol_mem()
	Welcome() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Welcome_text() )
			return obj
		})( new $mol_scroll )
	}

	/// Samples /
	Samples() {
		return [] as any[]
	}

	/// Detail_row $mol_row sub / <= Samples
	@ $mol_mem()
	Detail_row() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Samples() )
			return obj
		})( new $mol_row )
	}

	/// detail_empty_prefix @ \No one demo with prefix "
	detail_empty_prefix() {
		return $mol_locale.text( this.locale_contexts() , "detail_empty_prefix" )
	}

	/// selected \
	selected() {
		return ""
	}

	/// detail_empty_postfix @ \"
	detail_empty_postfix() {
		return $mol_locale.text( this.locale_contexts() , "detail_empty_postfix" )
	}

	/// Detail_empty_message $mol_status sub / 
	/// 	<= detail_empty_prefix 
	/// 	<= selected 
	/// 	<= detail_empty_postfix
	@ $mol_mem()
	Detail_empty_message() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.detail_empty_prefix() , this.selected() , this.detail_empty_postfix() )
			return obj
		})( new $mol_status )
	}

} }

namespace $ { export class $mol_app_demo_menu extends $mol_page {

	/// minimal_width 240
	minimal_width() {
		return 240
	}

	/// title @ \$mol demonstrations
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// filter?val \
	@ $mol_mem()
	filter( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Filter $mol_search query?val <=> filter?val
	@ $mol_mem()
	Filter() {
		return (( obj )=>{
			obj.query = ( val? : any ) => this.filter( val )
			return obj
		})( new $mol_search )
	}

	/// tools / <= Filter
	tools() {
		return [].concat( this.Filter() )
	}

	/// hierarchy null
	hierarchy() {
		return <any> null
	}

	/// option!id null
	option( id : any ) {
		return <any> null
	}

	/// event_navigate?val null
	@ $mol_mem()
	event_navigate( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Nav $mol_app_demo_nav 
	/// 	hierarchy <= hierarchy 
	/// 	record!id <= option!id 
	/// 	needle <= filter?val 
	/// 	event_navigate?val <=> event_navigate?val
	@ $mol_mem()
	Nav() {
		return (( obj )=>{
			obj.hierarchy = () => this.hierarchy()
			obj.record = ( id : any ) => this.option(id)
			obj.needle = () => this.filter()
			obj.event_navigate = ( val? : any ) => this.event_navigate( val )
			return obj
		})( new $mol_app_demo_nav )
	}

	/// Body <= Nav
	Body() {
		return this.Nav()
	}

} }

namespace $ { export class $mol_app_demo_detail extends $mol_page {

	/// Source_icon $mol_icon_source
	@ $mol_mem()
	Source_icon() {
		return (( obj )=>{
			return obj
		})( new $mol_icon_source )
	}

	/// source_link \
	source_link() {
		return ""
	}

	/// Source_link $mol_link 
	/// 	sub / <= Source_icon 
	/// 	uri <= source_link
	@ $mol_mem()
	Source_link() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Source_icon() )
			obj.uri = () => this.source_link()
			return obj
		})( new $mol_link )
	}

	/// Close_icon $mol_icon_cross
	@ $mol_mem()
	Close_icon() {
		return (( obj )=>{
			return obj
		})( new $mol_icon_cross )
	}

	/// close_arg * demo null
	close_arg() {
		return ({
			"demo" :  <any> null ,
		})
	}

	/// Close $mol_link 
	/// 	sub / <= Close_icon 
	/// 	arg <= close_arg
	@ $mol_mem()
	Close() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Close_icon() )
			obj.arg = () => this.close_arg()
			return obj
		})( new $mol_link )
	}

	/// tools / 
	/// 	<= Source_link 
	/// 	<= Close
	tools() {
		return [].concat( this.Source_link() , this.Close() )
	}

} }

namespace $ { export class $mol_app_demo_nav extends $mol_grid {

	/// row_height 40
	row_height() {
		return 40
	}

	/// hierarchy_col \title
	hierarchy_col() {
		return "title"
	}

	/// Head null
	Head() {
		return <any> null
	}

	/// arg!id *
	arg( id : any ) {
		return ({
		})
	}

	/// event_navigate?val null
	@ $mol_mem()
	event_navigate( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Expand!id $mol_check_expand 
	/// 	expanded?val <=> cell_expanded!id?val 
	/// 	level <= cell_level!id
	@ $mol_mem_key()
	Expand( id : any ) {
		return (( obj )=>{
			obj.expanded = ( val? : any ) => this.cell_expanded(id , val )
			obj.level = () => this.cell_level(id)
			return obj
		})( new $mol_check_expand )
	}

	/// Content!id $mol_view sub / <= cell_content!id
	@ $mol_mem_key()
	Content( id : any ) {
		return (( obj )=>{
			obj.sub = () => [].concat( this.cell_content(id) )
			return obj
		})( new $mol_view )
	}

	/// Chevron!id $mol_icon_chevron
	@ $mol_mem_key()
	Chevron( id : any ) {
		return (( obj )=>{
			return obj
		})( new $mol_icon_chevron )
	}

	/// Option!id $mol_link 
	/// 	arg <= arg!id 
	/// 	event_click?val <=> event_navigate?val 
	/// 	sub / 
	/// 		<= Expand!id 
	/// 		<= Content!id 
	/// 		<= Chevron!id
	@ $mol_mem_key()
	Option( id : any ) {
		return (( obj )=>{
			obj.arg = () => this.arg(id)
			obj.event_click = ( val? : any ) => this.event_navigate( val )
			obj.sub = () => [].concat( this.Expand(id) , this.Content(id) , this.Chevron(id) )
			return obj
		})( new $mol_link )
	}

} }

