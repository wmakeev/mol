namespace $ { export class $mol_app_bench extends $mol_view {

	/// addon_title @ \Samples
	addon_title() {
		return $mol_locale.text( this.locale_contexts() , "addon_title" )
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

	/// menu_options /
	menu_options() {
		return [] as any[]
	}

	/// Menu $mol_list rows <= menu_options
	@ $mol_mem()
	Menu() {
		return (( obj )=>{
			obj.rows = () => this.menu_options()
			return obj
		})( new $mol_list )
	}

	/// Addon_page $mol_page 
	/// 	title <= addon_title 
	/// 	body / 
	/// 		<= Filter 
	/// 		<= Menu
	@ $mol_mem()
	Addon_page() {
		return (( obj )=>{
			obj.title = () => this.addon_title()
			obj.body = () => [].concat( this.Filter() , this.Menu() )
			return obj
		})( new $mol_page )
	}

	/// description \
	description() {
		return ""
	}

	/// Descr $mol_text text <= description
	@ $mol_mem()
	Descr() {
		return (( obj )=>{
			obj.text = () => this.description()
			return obj
		})( new $mol_text )
	}

	/// result null
	result() {
		return <any> null
	}

	/// result_col_title!id /
	result_col_title( id : any ) {
		return [] as any[]
	}

	/// result_col_sort?val \
	@ $mol_mem()
	result_col_sort( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Result $mol_bench 
	/// 	result <= result 
	/// 	col_head_label!id / <= result_col_title!id 
	/// 	col_sort?val <=> result_col_sort?val
	@ $mol_mem()
	Result() {
		return (( obj )=>{
			obj.result = () => this.result()
			obj.col_head_label = ( id : any ) => [].concat( this.result_col_title(id) )
			obj.col_sort = ( val? : any ) => this.result_col_sort( val )
			return obj
		})( new $mol_bench )
	}

	/// Inform $mol_view sub / 
	/// 	<= Descr 
	/// 	<= Result
	@ $mol_mem()
	Inform() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Descr() , this.Result() )
			return obj
		})( new $mol_view )
	}

	/// Sandbox $mol_view dom_name \iframe
	@ $mol_mem()
	Sandbox() {
		return (( obj )=>{
			obj.dom_name = () => "iframe"
			return obj
		})( new $mol_view )
	}

	/// Main_page $mol_page 
	/// 	title <= title 
	/// 	body / 
	/// 		<= Inform 
	/// 		<= Sandbox
	@ $mol_mem()
	Main_page() {
		return (( obj )=>{
			obj.title = () => this.title()
			obj.body = () => [].concat( this.Inform() , this.Sandbox() )
			return obj
		})( new $mol_page )
	}

	/// sub / 
	/// 	<= Addon_page 
	/// 	<= Main_page
	sub() {
		return [].concat( this.Addon_page() , this.Main_page() )
	}

	/// menu_option_checked!id?val false
	@ $mol_mem_key()
	menu_option_checked( id : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// menu_option_title!id \
	menu_option_title( id : any ) {
		return ""
	}

	/// Menu_option!id $mol_check_box 
	/// 	minimal_height 36 
	/// 	checked?val <=> menu_option_checked!id?val 
	/// 	title <= menu_option_title!id
	@ $mol_mem_key()
	Menu_option( id : any ) {
		return (( obj )=>{
			obj.minimal_height = () => 36
			obj.checked = ( val? : any ) => this.menu_option_checked(id , val )
			obj.title = () => this.menu_option_title(id)
			return obj
		})( new $mol_check_box )
	}

	/// result_col_title_sample @ \Sample
	result_col_title_sample() {
		return $mol_locale.text( this.locale_contexts() , "result_col_title_sample" )
	}

} }

