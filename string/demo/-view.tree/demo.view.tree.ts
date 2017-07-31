namespace $ { export class $mol_string_demo extends $mol_row {

	/// title @ \String input field in various states
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// name?val \
	@ $mol_mem()
	name( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// Simple $mol_string value?val <=> name?val
	@ $mol_mem()
	Simple() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.name( val )
			return obj
		})( new $mol_string )
	}

	/// Hint $mol_string 
	/// 	hint @ \Batman
	/// 	value?val <=> name?val
	@ $mol_mem()
	Hint() {
		return (( obj )=>{
			obj.hint = () => $mol_locale.text( this.locale_contexts() , "Hint" )
			obj.value = ( val? : any ) => this.name( val )
			return obj
		})( new $mol_string )
	}

	/// name2?val \Jocker
	@ $mol_mem()
	name2( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : "Jocker"
	}

	/// Filled $mol_string value?val <=> name2?val
	@ $mol_mem()
	Filled() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.name2( val )
			return obj
		})( new $mol_string )
	}

	/// Disabled $mol_string 
	/// 	disabled true 
	/// 	value?val <=> name2?val
	@ $mol_mem()
	Disabled() {
		return (( obj )=>{
			obj.disabled = () => true
			obj.value = ( val? : any ) => this.name2( val )
			return obj
		})( new $mol_string )
	}

	/// sub / 
	/// 	<= Simple 
	/// 	<= Hint 
	/// 	<= Filled 
	/// 	<= Disabled
	sub() {
		return [].concat( this.Simple() , this.Hint() , this.Filled() , this.Disabled() )
	}

} }

