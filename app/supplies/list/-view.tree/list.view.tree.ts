namespace $ { export class $mol_app_supplies_list extends $mol_page {

	/// supplies /
	supplies() {
		return [] as any[]
	}

	/// title @ \Supplies
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// search_hint @ \Search supply by bar code
	search_hint() {
		return $mol_locale.text( this.locale_contexts() , "search_hint" )
	}

	/// search_query?val \
	@ $mol_mem()
	search_query( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Search $mol_code 
	/// 	hint <= search_hint 
	/// 	value?val <=> search_query?val
	@ $mol_mem()
	Search() {
		return (( obj )=>{
			obj.hint = () => this.search_hint()
			obj.value = ( val? : any ) => this.search_query( val )
			return obj
		})( new $mol_code )
	}

	/// head / <= Search
	head() {
		return [].concat( this.Search() )
	}

	/// supply_rows /
	supply_rows() {
		return [] as any[]
	}

	/// Supply_rows $mol_list rows <= supply_rows
	@ $mol_mem()
	Supply_rows() {
		return (( obj )=>{
			obj.rows = () => this.supply_rows()
			return obj
		})( new $mol_list )
	}

	/// body / <= Supply_rows
	body() {
		return [].concat( this.Supply_rows() )
	}

	/// supply!index null
	supply( index : any ) {
		return <any> null
	}

	/// event_navigate?val null
	@ $mol_mem()
	event_navigate( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// supply_id!index \
	supply_id( index : any ) {
		return ""
	}

	/// supply_arg!index * supply <= supply_id!index
	supply_arg( index : any ) {
		return ({
			"supply" :  this.supply_id(index) ,
		})
	}

	/// Supply_row!index $mol_app_supplies_card 
	/// 	supply <= supply!index 
	/// 	event_click?val <=> event_navigate?val 
	/// 	arg <= supply_arg!index
	@ $mol_mem_key()
	Supply_row( index : any ) {
		return (( obj )=>{
			obj.supply = () => this.supply(index)
			obj.event_click = ( val? : any ) => this.event_navigate( val )
			obj.arg = () => this.supply_arg(index)
			return obj
		})( new $mol_app_supplies_card )
	}

} }

