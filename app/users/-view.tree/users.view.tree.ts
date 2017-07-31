namespace $ { export class $mol_app_users extends $mol_page {

	/// filter_hint @ \Search users on GitHub
	filter_hint() {
		return $mol_locale.text( this.locale_contexts() , "filter_hint" )
	}

	/// query?val \
	@ $mol_mem()
	query( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Filter $mol_string 
	/// 	hint <= filter_hint 
	/// 	value?val <=> query?val
	@ $mol_mem()
	Filter() {
		return (( obj )=>{
			obj.hint = () => this.filter_hint()
			obj.value = ( val? : any ) => this.query( val )
			return obj
		})( new $mol_string )
	}

	/// Head_row $mol_row sub / <= Filter
	@ $mol_mem()
	Head_row() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Filter() )
			return obj
		})( new $mol_row )
	}

	/// head / <= Head_row
	head() {
		return [].concat( this.Head_row() )
	}

	/// user_rows /
	user_rows() {
		return [] as any[]
	}

	/// empty_message @ \Users not found
	empty_message() {
		return $mol_locale.text( this.locale_contexts() , "empty_message" )
	}

	/// Empty $mol_view sub / <= empty_message
	@ $mol_mem()
	Empty() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.empty_message() )
			return obj
		})( new $mol_view )
	}

	/// List $mol_list 
	/// 	rows <= user_rows 
	/// 	Empty <= Empty
	@ $mol_mem()
	List() {
		return (( obj )=>{
			obj.rows = () => this.user_rows()
			obj.Empty = () => this.Empty()
			return obj
		})( new $mol_list )
	}

	/// body / <= List
	body() {
		return [].concat( this.List() )
	}

	/// reload_label @ \Reload
	reload_label() {
		return $mol_locale.text( this.locale_contexts() , "reload_label" )
	}

	/// event_reload?val null
	@ $mol_mem()
	event_reload( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Reload $mol_button_minor 
	/// 	sub / <= reload_label 
	/// 	event_click?val <=> event_reload?val
	@ $mol_mem()
	Reload() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.reload_label() )
			obj.event_click = ( val? : any ) => this.event_reload( val )
			return obj
		})( new $mol_button_minor )
	}

	/// loaded false
	loaded() {
		return false
	}

	/// add_label @ \Add
	add_label() {
		return $mol_locale.text( this.locale_contexts() , "add_label" )
	}

	/// event_add?val null
	@ $mol_mem()
	event_add( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Add $mol_button_minor 
	/// 	enabled <= loaded 
	/// 	sub / <= add_label 
	/// 	event_click?val <=> event_add?val
	@ $mol_mem()
	Add() {
		return (( obj )=>{
			obj.enabled = () => this.loaded()
			obj.sub = () => [].concat( this.add_label() )
			obj.event_click = ( val? : any ) => this.event_add( val )
			return obj
		})( new $mol_button_minor )
	}

	/// changed false
	changed() {
		return false
	}

	/// save_label @ \Save
	save_label() {
		return $mol_locale.text( this.locale_contexts() , "save_label" )
	}

	/// event_save?val null
	@ $mol_mem()
	event_save( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Save $mol_button_major 
	/// 	enabled <= changed 
	/// 	sub / <= save_label 
	/// 	event_click?val <=> event_save?val
	@ $mol_mem()
	Save() {
		return (( obj )=>{
			obj.enabled = () => this.changed()
			obj.sub = () => [].concat( this.save_label() )
			obj.event_click = ( val? : any ) => this.event_save( val )
			return obj
		})( new $mol_button_major )
	}

	/// users_master null
	users_master() {
		return <any> null
	}

	/// Message $mol_status status <= users_master
	@ $mol_mem()
	Message() {
		return (( obj )=>{
			obj.status = () => this.users_master()
			return obj
		})( new $mol_status )
	}

	/// Foot $mol_row sub / 
	/// 	<= Reload 
	/// 	<= Add 
	/// 	<= Save 
	/// 	<= Message
	@ $mol_mem()
	Foot() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Reload() , this.Add() , this.Save() , this.Message() )
			return obj
		})( new $mol_row )
	}

	/// Touch $mol_touch swipe_bottom?val <=> event_reload?val
	@ $mol_mem()
	Touch() {
		return (( obj )=>{
			obj.swipe_bottom = ( val? : any ) => this.event_reload( val )
			return obj
		})( new $mol_touch )
	}

	/// plugins / <= Touch
	plugins() {
		return [].concat( this.Touch() )
	}

	/// user_name!id?val \
	@ $mol_mem_key()
	user_name( id : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// event_user_drop!id?val null
	@ $mol_mem_key()
	event_user_drop( id : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// User_row!id $mol_app_users_row 
	/// 	title?val <=> user_name!id?val 
	/// 	event_drop?val <=> event_user_drop!id?val
	@ $mol_mem_key()
	User_row( id : any ) {
		return (( obj )=>{
			obj.title = ( val? : any ) => this.user_name(id , val )
			obj.event_drop = ( val? : any ) => this.event_user_drop(id , val )
			return obj
		})( new $mol_app_users_row )
	}

} }

namespace $ { export class $mol_app_users_row extends $mol_row {

	/// minimal_height 68
	minimal_height() {
		return 68
	}

	/// title?val \
	@ $mol_mem()
	title( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Title $mol_string value?val <=> title?val
	@ $mol_mem()
	Title() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.title( val )
			return obj
		})( new $mol_string )
	}

	/// drop_label \Drop
	drop_label() {
		return "Drop"
	}

	/// event_drop?val null
	@ $mol_mem()
	event_drop( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Drop $mol_button_minor 
	/// 	sub / <= drop_label 
	/// 	event_click?val <=> event_drop?val
	@ $mol_mem()
	Drop() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.drop_label() )
			obj.event_click = ( val? : any ) => this.event_drop( val )
			return obj
		})( new $mol_button_minor )
	}

	/// sub / 
	/// 	<= Title 
	/// 	<= Drop
	sub() {
		return [].concat( this.Title() , this.Drop() )
	}

} }

