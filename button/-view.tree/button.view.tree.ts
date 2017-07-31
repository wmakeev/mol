namespace $ { export class $mol_button extends $mol_view {

	/// enabled true
	enabled() {
		return true
	}

	/// event_click?event null
	@ $mol_mem()
	event_click( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : <any> null
	}

	/// event_activate?event <=> event_click?event
	@ $mol_mem()
	event_activate( event? : any , force? : $mol_atom_force ) {
		return this.event_click( event )
	}

	/// event_key_press?event null
	@ $mol_mem()
	event_key_press( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : <any> null
	}

	/// event * 
	/// 	^ 
	/// 	click?event <=> event_activate?event 
	/// 	keypress?event <=> event_key_press?event
	event() {
		return ({
			...super.event() ,
			"click" :  ( event? : any )=>  this.event_activate( event ) ,
			"keypress" :  ( event? : any )=>  this.event_key_press( event ) ,
		})
	}

	/// disabled false
	disabled() {
		return false
	}

	/// tab_index \0
	tab_index() {
		return "0"
	}

	/// hint \
	hint() {
		return ""
	}

	/// attr * 
	/// 	^ 
	/// 	disabled <= disabled 
	/// 	role \button
	/// 	tabindex <= tab_index 
	/// 	title <= hint
	attr() {
		return ({
			...super.attr() ,
			"disabled" :  this.disabled() ,
			"role" :  "button" ,
			"tabindex" :  this.tab_index() ,
			"title" :  this.hint() ,
		})
	}

	/// sub / <= title
	sub() {
		return [].concat( this.title() )
	}

} }

