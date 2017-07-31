namespace $ { export class $mol_speech_demo extends $mol_view {

	/// Toggle_icon $mol_icon_microphone
	@ $mol_mem()
	Toggle_icon() {
		return (( obj )=>{
			return obj
		})( new $mol_icon_microphone )
	}

	/// listening?val false
	@ $mol_mem()
	listening( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// Toggle $mol_check_icon 
	/// 	Icon <= Toggle_icon 
	/// 	checked?val <=> listening?val
	@ $mol_mem()
	Toggle() {
		return (( obj )=>{
			obj.Icon = () => this.Toggle_icon()
			obj.checked = ( val? : any ) => this.listening( val )
			return obj
		})( new $mol_check_icon )
	}

	/// message \
	message() {
		return ""
	}

	/// Message $mol_view sub / <= message
	@ $mol_mem()
	Message() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.message() )
			return obj
		})( new $mol_view )
	}

	/// sub / 
	/// 	<= Toggle 
	/// 	<= Message
	sub() {
		return [].concat( this.Toggle() , this.Message() )
	}

} }

