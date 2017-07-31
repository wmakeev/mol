namespace $ { export class $mol_app_inventory_keeper extends $mol_page {

	/// domain $mol_app_inventory_domain
	@ $mol_mem()
	domain() {
		return (( obj )=>{
			return obj
		})( new $mol_app_inventory_domain )
	}

	/// position_rows /
	position_rows() {
		return [] as any[]
	}

	/// body <= position_rows
	body() {
		return this.position_rows()
	}

	/// position!id null
	position( id : any ) {
		return <any> null
	}

	/// Position_row!id $mol_app_inventory_position 
	/// 	Status null 
	/// 	position <= position!id
	@ $mol_mem_key()
	Position_row( id : any ) {
		return (( obj )=>{
			obj.Status = () => <any> null
			obj.position = () => this.position(id)
			return obj
		})( new $mol_app_inventory_position )
	}

	/// code_new?val \
	@ $mol_mem()
	code_new( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// code_new_hint @ \Product bar code
	code_new_hint() {
		return $mol_locale.text( this.locale_contexts() , "code_new_hint" )
	}

	/// Code $mol_code 
	/// 	value?val <=> code_new?val 
	/// 	hint <= code_new_hint
	@ $mol_mem()
	Code() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.code_new( val )
			obj.hint = () => this.code_new_hint()
			return obj
		})( new $mol_code )
	}

	/// event_submit?event null
	@ $mol_mem()
	event_submit( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : <any> null
	}

	/// submit_label @ \Write off
	submit_label() {
		return $mol_locale.text( this.locale_contexts() , "submit_label" )
	}

	/// Submit $mol_button_major 
	/// 	event_click?event <=> event_submit?event 
	/// 	sub / <= submit_label
	@ $mol_mem()
	Submit() {
		return (( obj )=>{
			obj.event_click = ( event? : any ) => this.event_submit( event )
			obj.sub = () => [].concat( this.submit_label() )
			return obj
		})( new $mol_button_major )
	}

	/// Action_row $mol_row sub / 
	/// 	<= Code 
	/// 	<= Submit
	@ $mol_mem()
	Action_row() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Code() , this.Submit() )
			return obj
		})( new $mol_row )
	}

	/// foot / <= Action_row
	foot() {
		return [].concat( this.Action_row() )
	}

} }

