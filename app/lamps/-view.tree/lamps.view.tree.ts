namespace $ { export class $mol_app_lamps extends $mol_book {

	/// lamp_current_id?val \
	@ $mol_mem()
	lamp_current_id( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// filter_hint @ \Filter...
	filter_hint() {
		return $mol_locale.text( this.locale_contexts() , "filter_hint" )
	}

	/// filter?val \
	@ $mol_mem()
	filter( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Filter $mol_code 
	/// 	hint <= filter_hint 
	/// 	value?val <=> filter?val
	@ $mol_mem()
	Filter() {
		return (( obj )=>{
			obj.hint = () => this.filter_hint()
			obj.value = ( val? : any ) => this.filter( val )
			return obj
		})( new $mol_code )
	}

	/// menu_scroll_top?val 0
	@ $mol_mem()
	menu_scroll_top( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 0
	}

	/// lamp_rows /
	lamp_rows() {
		return [] as any[]
	}

	/// Menu $mol_list rows <= lamp_rows
	@ $mol_mem()
	Menu() {
		return (( obj )=>{
			obj.rows = () => this.lamp_rows()
			return obj
		})( new $mol_list )
	}

	/// Addon_page $mol_page 
	/// 	minimal_width 400 
	/// 	title \LampTest.ru
	/// 	head / <= Filter 
	/// 	body_scroll_top?val <=> menu_scroll_top?val 
	/// 	body / <= Menu
	@ $mol_mem()
	Addon_page() {
		return (( obj )=>{
			obj.minimal_width = () => 400
			obj.title = () => "LampTest.ru"
			obj.head = () => [].concat( this.Filter() )
			obj.body_scroll_top = ( val? : any ) => this.menu_scroll_top( val )
			obj.body = () => [].concat( this.Menu() )
			return obj
		})( new $mol_page )
	}

	/// title \
	title() {
		return ""
	}

	/// Close_icon $mol_icon_cross
	@ $mol_mem()
	Close_icon() {
		return (( obj )=>{
			return obj
		})( new $mol_icon_cross )
	}

	/// Close $mol_link 
	/// 	sub / <= Close_icon 
	/// 	arg * lamp null
	@ $mol_mem()
	Close() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Close_icon() )
			obj.arg = () => ({
			"lamp" :  <any> null ,
		})
			return obj
		})( new $mol_link )
	}

	/// rating_title @ \Rating
	rating_title() {
		return $mol_locale.text( this.locale_contexts() , "rating_title" )
	}

	/// rating 0
	rating() {
		return 0
	}

	/// Rating $mol_labeler 
	/// 	title <= rating_title 
	/// 	content / <= rating
	@ $mol_mem()
	Rating() {
		return (( obj )=>{
			obj.title = () => this.rating_title()
			obj.content = () => [].concat( this.rating() )
			return obj
		})( new $mol_labeler )
	}

	/// Stat $mol_row sub / <= Rating
	@ $mol_mem()
	Stat() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Rating() )
			return obj
		})( new $mol_row )
	}

	/// type_title @ \Type
	type_title() {
		return $mol_locale.text( this.locale_contexts() , "type_title" )
	}

	/// type \
	type() {
		return ""
	}

	/// Type $mol_labeler 
	/// 	title <= type_title 
	/// 	content / <= type
	@ $mol_mem()
	Type() {
		return (( obj )=>{
			obj.title = () => this.type_title()
			obj.content = () => [].concat( this.type() )
			return obj
		})( new $mol_labeler )
	}

	/// shape_title @ \Shape
	shape_title() {
		return $mol_locale.text( this.locale_contexts() , "shape_title" )
	}

	/// shape \
	shape() {
		return ""
	}

	/// Shape $mol_labeler 
	/// 	title <= shape_title 
	/// 	content / <= shape
	@ $mol_mem()
	Shape() {
		return (( obj )=>{
			obj.title = () => this.shape_title()
			obj.content = () => [].concat( this.shape() )
			return obj
		})( new $mol_labeler )
	}

	/// base_title @ \Base
	base_title() {
		return $mol_locale.text( this.locale_contexts() , "base_title" )
	}

	/// base \
	base() {
		return ""
	}

	/// Base $mol_labeler 
	/// 	title <= base_title 
	/// 	content / <= base
	@ $mol_mem()
	Base() {
		return (( obj )=>{
			obj.title = () => this.base_title()
			obj.content = () => [].concat( this.base() )
			return obj
		})( new $mol_labeler )
	}

	/// Body $mol_row sub / 
	/// 	<= Type 
	/// 	<= Shape 
	/// 	<= Base
	@ $mol_mem()
	Body() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Type() , this.Shape() , this.Base() )
			return obj
		})( new $mol_row )
	}

	/// Temp_title @ \Temperature
	Temp_title() {
		return $mol_locale.text( this.locale_contexts() , "Temp_title" )
	}

	/// temp \
	temp() {
		return ""
	}

	/// Temp $mol_labeler 
	/// 	title <= Temp_title 
	/// 	content / <= temp
	@ $mol_mem()
	Temp() {
		return (( obj )=>{
			obj.title = () => this.Temp_title()
			obj.content = () => [].concat( this.temp() )
			return obj
		})( new $mol_labeler )
	}

	/// cri_title @ \CRI
	cri_title() {
		return $mol_locale.text( this.locale_contexts() , "cri_title" )
	}

	/// cri \
	cri() {
		return ""
	}

	/// Cri $mol_labeler 
	/// 	title <= cri_title 
	/// 	content / <= cri
	@ $mol_mem()
	Cri() {
		return (( obj )=>{
			obj.title = () => this.cri_title()
			obj.content = () => [].concat( this.cri() )
			return obj
		})( new $mol_labeler )
	}

	/// ripple_title @ \Ripple
	ripple_title() {
		return $mol_locale.text( this.locale_contexts() , "ripple_title" )
	}

	/// ripple \
	ripple() {
		return ""
	}

	/// Ripple $mol_labeler 
	/// 	title <= ripple_title 
	/// 	content / <= ripple
	@ $mol_mem()
	Ripple() {
		return (( obj )=>{
			obj.title = () => this.ripple_title()
			obj.content = () => [].concat( this.ripple() )
			return obj
		})( new $mol_labeler )
	}

	/// angle_title @ \Angle
	angle_title() {
		return $mol_locale.text( this.locale_contexts() , "angle_title" )
	}

	/// angle \
	angle() {
		return ""
	}

	/// Angle $mol_labeler 
	/// 	title <= angle_title 
	/// 	content / <= angle
	@ $mol_mem()
	Angle() {
		return (( obj )=>{
			obj.title = () => this.angle_title()
			obj.content = () => [].concat( this.angle() )
			return obj
		})( new $mol_labeler )
	}

	/// Light $mol_row sub / 
	/// 	<= Temp 
	/// 	<= Cri 
	/// 	<= Ripple 
	/// 	<= Angle
	@ $mol_mem()
	Light() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Temp() , this.Cri() , this.Ripple() , this.Angle() )
			return obj
		})( new $mol_row )
	}

	/// Info $mol_row sub / 
	/// 	<= Stat 
	/// 	<= Body 
	/// 	<= Light
	@ $mol_mem()
	Info() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Stat() , this.Body() , this.Light() )
			return obj
		})( new $mol_row )
	}

	/// photo \
	photo() {
		return ""
	}

	/// Photo $mol_image 
	/// 	uri <= photo 
	/// 	title <= title
	@ $mol_mem()
	Photo() {
		return (( obj )=>{
			obj.uri = () => this.photo()
			obj.title = () => this.title()
			return obj
		})( new $mol_image )
	}

	/// Gallery $mol_row sub / <= Photo
	@ $mol_mem()
	Gallery() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Photo() )
			return obj
		})( new $mol_row )
	}

	/// Main_page $mol_page 
	/// 	minimal_width 400 
	/// 	title <= title 
	/// 	event_top?val <=> event_front_up?val 
	/// 	tools / <= Close 
	/// 	body / 
	/// 		<= Info 
	/// 		<= Gallery
	@ $mol_mem()
	Main_page() {
		return (( obj )=>{
			obj.minimal_width = () => 400
			obj.title = () => this.title()
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			obj.tools = () => [].concat( this.Close() )
			obj.body = () => [].concat( this.Info() , this.Gallery() )
			return obj
		})( new $mol_page )
	}

	/// pages / 
	/// 	<= Addon_page 
	/// 	<= Main_page
	pages() {
		return [].concat( this.Addon_page() , this.Main_page() )
	}

	/// lamp_title!id \
	lamp_title( id : any ) {
		return ""
	}

	/// lamp_arg!id *
	lamp_arg( id : any ) {
		return ({
		})
	}

	/// Lamp_row!id $mol_lamps_lamp_row 
	/// 	title <= lamp_title!id 
	/// 	arg <= lamp_arg!id 
	/// 	event_click?val <=> event_front_down?val
	@ $mol_mem_key()
	Lamp_row( id : any ) {
		return (( obj )=>{
			obj.title = () => this.lamp_title(id)
			obj.arg = () => this.lamp_arg(id)
			obj.event_click = ( val? : any ) => this.event_front_down( val )
			return obj
		})( new $mol_lamps_lamp_row )
	}

} }

namespace $ { export class $mol_lamps_lamp_row extends $mol_link {

	/// minimal_height 33
	minimal_height() {
		return 33
	}

	/// sub / <= title
	sub() {
		return [].concat( this.title() )
	}

} }

