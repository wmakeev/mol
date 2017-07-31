namespace $ { export class $mol_row_demo extends $mol_row {

	/// title @ \Some controls in one row with equal paddings and wrapping support
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// minimal_height 68
	minimal_height() {
		return 68
	}

	/// name_hint @ \Jack Sparrow
	name_hint() {
		return $mol_locale.text( this.locale_contexts() , "name_hint" )
	}

	/// name?val \
	@ $mol_mem()
	name( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// suggest1 @ \Jack Sparrow
	suggest1() {
		return $mol_locale.text( this.locale_contexts() , "suggest1" )
	}

	/// suggest2 @ \Bruce Wayne
	suggest2() {
		return $mol_locale.text( this.locale_contexts() , "suggest2" )
	}

	/// Name $mol_search 
	/// 	hint <= name_hint 
	/// 	query?val <=> name?val 
	/// 	suggests / 
	/// 		<= suggest1 
	/// 		<= suggest2
	@ $mol_mem()
	Name() {
		return (( obj )=>{
			obj.hint = () => this.name_hint()
			obj.query = ( val? : any ) => this.name( val )
			obj.suggests = () => [].concat( this.suggest1() , this.suggest2() )
			return obj
		})( new $mol_search )
	}

	/// count_hint @ \Count
	count_hint() {
		return $mol_locale.text( this.locale_contexts() , "count_hint" )
	}

	/// count?val null
	@ $mol_mem()
	count( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Count $mol_number 
	/// 	hint <= count_hint 
	/// 	value?val <=> count?val
	@ $mol_mem()
	Count() {
		return (( obj )=>{
			obj.hint = () => this.count_hint()
			obj.value = ( val? : any ) => this.count( val )
			return obj
		})( new $mol_number )
	}

	/// progress 0.33
	progress() {
		return 0.33
	}

	/// Progress $mol_portion portion <= progress
	@ $mol_mem()
	Progress() {
		return (( obj )=>{
			obj.portion = () => this.progress()
			return obj
		})( new $mol_portion )
	}

	/// publish_label @ \Shared
	publish_label() {
		return $mol_locale.text( this.locale_contexts() , "publish_label" )
	}

	/// publish?val false
	@ $mol_mem()
	publish( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// Publish $mol_check_box 
	/// 	title <= publish_label 
	/// 	checked?val <=> publish?val
	@ $mol_mem()
	Publish() {
		return (( obj )=>{
			obj.title = () => this.publish_label()
			obj.checked = ( val? : any ) => this.publish( val )
			return obj
		})( new $mol_check_box )
	}

	/// drop_title @ \Drop
	drop_title() {
		return $mol_locale.text( this.locale_contexts() , "drop_title" )
	}

	/// Drop $mol_button_minor title <= drop_title
	@ $mol_mem()
	Drop() {
		return (( obj )=>{
			obj.title = () => this.drop_title()
			return obj
		})( new $mol_button_minor )
	}

	/// sub / 
	/// 	<= Name 
	/// 	<= Count 
	/// 	<= Progress 
	/// 	<= Publish 
	/// 	<= Drop
	sub() {
		return [].concat( this.Name() , this.Count() , this.Progress() , this.Publish() , this.Drop() )
	}

} }

