namespace $ { export class $mol_app_supplies_root extends $mol_book {

	/// entered?val false
	@ $mol_mem()
	entered( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// enter $mol_app_supplies_enter entered?val <=> entered?val
	@ $mol_mem()
	enter() {
		return (( obj )=>{
			obj.entered = ( val? : any ) => this.entered( val )
			return obj
		})( new $mol_app_supplies_enter )
	}

	/// supplies /
	supplies() {
		return [] as any[]
	}

	/// supply_id?val \
	@ $mol_mem()
	supply_id( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// lister $mol_app_supplies_list 
	/// 	minimal_width 400 
	/// 	supplies <= supplies 
	/// 	search_query?val <=> supply_id?val 
	/// 	event_navigate?val <=> event_front_down?val
	@ $mol_mem()
	lister() {
		return (( obj )=>{
			obj.minimal_width = () => 400
			obj.supplies = () => this.supplies()
			obj.search_query = ( val? : any ) => this.supply_id( val )
			obj.event_navigate = ( val? : any ) => this.event_front_down( val )
			return obj
		})( new $mol_app_supplies_list )
	}

	/// supply null
	supply() {
		return <any> null
	}

	/// detailer $mol_app_supplies_detail 
	/// 	minimal_width 400 
	/// 	supply <= supply 
	/// 	event_top?val <=> event_front_up?val
	@ $mol_mem()
	detailer() {
		return (( obj )=>{
			obj.minimal_width = () => 400
			obj.supply = () => this.supply()
			obj.event_top = ( val? : any ) => this.event_front_up( val )
			return obj
		})( new $mol_app_supplies_detail )
	}

	/// placeholder $mol_book_placeholder title <= title
	@ $mol_mem()
	placeholder() {
		return (( obj )=>{
			obj.title = () => this.title()
			return obj
		})( new $mol_book_placeholder )
	}

} }

