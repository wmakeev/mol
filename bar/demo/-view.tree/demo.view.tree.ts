namespace $ { export class $mol_bar_demo extends $mol_row {

	/// title @ \Group of controls as one control
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// value?val \
	@ $mol_mem()
	value( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Two_mail $mol_string 
	/// 	hint \E-mail
	/// 	value?val <=> value?val
	@ $mol_mem()
	Two_mail() {
		return (( obj )=>{
			obj.hint = () => "E-mail"
			obj.value = ( val? : any ) => this.value( val )
			return obj
		})( new $mol_string )
	}

	/// Two_submit $mol_button_minor sub / \submit
	@ $mol_mem()
	Two_submit() {
		return (( obj )=>{
			obj.sub = () => [].concat( "submit" )
			return obj
		})( new $mol_button_minor )
	}

	/// Two $mol_bar sub / 
	/// 	<= Two_mail 
	/// 	<= Two_submit
	@ $mol_mem()
	Two() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Two_mail() , this.Two_submit() )
			return obj
		})( new $mol_bar )
	}

	/// Three_mail $mol_string 
	/// 	hint \E-mail
	/// 	value?val <=> value?val
	@ $mol_mem()
	Three_mail() {
		return (( obj )=>{
			obj.hint = () => "E-mail"
			obj.value = ( val? : any ) => this.value( val )
			return obj
		})( new $mol_string )
	}

	/// Three_confirm $mol_check_box title \Confirm
	@ $mol_mem()
	Three_confirm() {
		return (( obj )=>{
			obj.title = () => "Confirm"
			return obj
		})( new $mol_check_box )
	}

	/// Three_submit $mol_button_minor sub / \submit
	@ $mol_mem()
	Three_submit() {
		return (( obj )=>{
			obj.sub = () => [].concat( "submit" )
			return obj
		})( new $mol_button_minor )
	}

	/// Tree $mol_bar sub / 
	/// 	<= Three_mail 
	/// 	<= Three_confirm 
	/// 	<= Three_submit
	@ $mol_mem()
	Tree() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Three_mail() , this.Three_confirm() , this.Three_submit() )
			return obj
		})( new $mol_bar )
	}

	/// sub / 
	/// 	<= Two 
	/// 	<= Tree
	sub() {
		return [].concat( this.Two() , this.Tree() )
	}

} }

