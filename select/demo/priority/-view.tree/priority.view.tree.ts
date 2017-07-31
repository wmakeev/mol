namespace $ { export class $mol_select_demo_priority extends $mol_row {

	/// title @ \Priority picker
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// priority?val \Lowest
	@ $mol_mem()
	priority( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : "Lowest"
	}

	/// Labeler $mol_labeler 
	/// 	title \Priority
	/// 	Content $mol_select 
	/// 		value?val <=> priority?val 
	/// 		options / 
	/// 			\Highest 
	/// 			\High
	/// 			\Medium
	/// 			\Low
	/// 			\Lowest
	/// 		clearable false
	@ $mol_mem()
	Labeler() {
		return (( obj )=>{
			obj.title = () => "Priority"
			obj.Content = () => (( obj )=>{
			obj.value = ( val? : any ) => this.priority( val )
			obj.options = () => [].concat( "Highest " , "High" , "Medium" , "Low" , "Lowest" )
			obj.clearable = () => false
			return obj
		})( new $mol_select )
			return obj
		})( new $mol_labeler )
	}

	/// sub / <= Labeler
	sub() {
		return [].concat( this.Labeler() )
	}

} }

