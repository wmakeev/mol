namespace $ { export class $mol_form_demo extends $mol_form {

	/// title @ \Simple sign in form
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// loginLabel @ \Login
	loginLabel() {
		return $mol_locale.text( this.locale_contexts() , "loginLabel" )
	}

	/// loginErrors /
	loginErrors() {
		return [] as any[]
	}

	/// login?val \
	@ $mol_mem()
	login( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// loginControl $mol_string value?val <=> login?val
	@ $mol_mem()
	loginControl() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.login( val )
			return obj
		})( new $mol_string )
	}

	/// loginField $mol_form_field 
	/// 	name <= loginLabel 
	/// 	errors <= loginErrors 
	/// 	control <= loginControl
	@ $mol_mem()
	loginField() {
		return (( obj )=>{
			obj.name = () => this.loginLabel()
			obj.errors = () => this.loginErrors()
			obj.control = () => this.loginControl()
			return obj
		})( new $mol_form_field )
	}

	/// passwordLabel @ \Password
	passwordLabel() {
		return $mol_locale.text( this.locale_contexts() , "passwordLabel" )
	}

	/// passwordErrors /
	passwordErrors() {
		return [] as any[]
	}

	/// password?val \
	@ $mol_mem()
	password( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// passControl $mol_string 
	/// 	value?val <=> password?val 
	/// 	type \password
	@ $mol_mem()
	passControl() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.password( val )
			obj.type = () => "password"
			return obj
		})( new $mol_string )
	}

	/// passwordField $mol_form_field 
	/// 	name <= passwordLabel 
	/// 	errors <= passwordErrors 
	/// 	control <= passControl
	@ $mol_mem()
	passwordField() {
		return (( obj )=>{
			obj.name = () => this.passwordLabel()
			obj.errors = () => this.passwordErrors()
			obj.control = () => this.passControl()
			return obj
		})( new $mol_form_field )
	}

	/// form_fields / 
	/// 	<= loginField 
	/// 	<= passwordField
	form_fields() {
		return [].concat( this.loginField() , this.passwordField() )
	}

	/// submit_text @ \Sign In
	submit_text() {
		return $mol_locale.text( this.locale_contexts() , "submit_text" )
	}

	/// event_submit?val null
	@ $mol_mem()
	event_submit( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// submit $mol_button_major 
	/// 	sub / <= submit_text 
	/// 	event_click?val <=> event_submit?val 
	/// 	disabled <= submit_blocked
	@ $mol_mem()
	submit() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.submit_text() )
			obj.event_click = ( val? : any ) => this.event_submit( val )
			obj.disabled = () => this.submit_blocked()
			return obj
		})( new $mol_button_major )
	}

	/// buttons / <= submit
	buttons() {
		return [].concat( this.submit() )
	}

} }

