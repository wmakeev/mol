namespace $ { export class $mol_button_demo extends $mol_row {

	/// title @ \All types of buttons in every states
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// major_label @ \Click me!
	major_label() {
		return $mol_locale.text( this.locale_contexts() , "major_label" )
	}

	/// Major_enabled $mol_button_major sub / <= major_label
	@ $mol_mem()
	Major_enabled() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.major_label() )
			return obj
		})( new $mol_button_major )
	}

	/// Major_disabled $mol_button_major 
	/// 	sub / <= major_label 
	/// 	enabled false
	@ $mol_mem()
	Major_disabled() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.major_label() )
			obj.enabled = () => false
			return obj
		})( new $mol_button_major )
	}

	/// minor_label @ \Or click me..
	minor_label() {
		return $mol_locale.text( this.locale_contexts() , "minor_label" )
	}

	/// Minor_enabled $mol_button_minor sub / <= minor_label
	@ $mol_mem()
	Minor_enabled() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.minor_label() )
			return obj
		})( new $mol_button_minor )
	}

	/// Minor_disabled $mol_button_minor 
	/// 	sub / <= minor_label 
	/// 	enabled false
	@ $mol_mem()
	Minor_disabled() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.minor_label() )
			obj.enabled = () => false
			return obj
		})( new $mol_button_minor )
	}

	/// danger_label @ \Be attentive!
	danger_label() {
		return $mol_locale.text( this.locale_contexts() , "danger_label" )
	}

	/// Danger_enabled $mol_button_danger sub / <= danger_label
	@ $mol_mem()
	Danger_enabled() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.danger_label() )
			return obj
		})( new $mol_button_danger )
	}

	/// Danger_disabled $mol_button_danger 
	/// 	sub / <= danger_label 
	/// 	enabled false
	@ $mol_mem()
	Danger_disabled() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.danger_label() )
			obj.enabled = () => false
			return obj
		})( new $mol_button_danger )
	}

	/// sub / 
	/// 	<= Major_enabled 
	/// 	- 
	/// 	<= Major_disabled 
	/// 	- 
	/// 	<= Minor_enabled 
	/// 	- 
	/// 	<= Minor_disabled 
	/// 	- 
	/// 	<= Danger_enabled 
	/// 	- 
	/// 	<= Danger_disabled
	sub() {
		return [].concat( this.Major_enabled() , this.Major_disabled() , this.Minor_enabled() , this.Minor_disabled() , this.Danger_enabled() , this.Danger_disabled() )
	}

} }

