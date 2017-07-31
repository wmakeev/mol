namespace $ { export class $mol_date_demo_moment extends $mol_row {

	/// date_label \Date
	date_label() {
		return "Date"
	}

	/// date?val $mol_time_moment
	@ $mol_mem()
	date( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : (( obj )=>{
			return obj
		})( new $mol_time_moment )
	}

	/// Date $mol_date value_moment?val <=> date?val
	@ $mol_mem()
	Date() {
		return (( obj )=>{
			obj.value_moment = ( val? : any ) => this.date( val )
			return obj
		})( new $mol_date )
	}

	/// Date_label $mol_labeler 
	/// 	title <= date_label 
	/// 	content <= Date
	@ $mol_mem()
	Date_label() {
		return (( obj )=>{
			obj.title = () => this.date_label()
			obj.content = () => this.Date()
			return obj
		})( new $mol_labeler )
	}

	/// formatted_label \Time Moment
	formatted_label() {
		return "Time Moment"
	}

	/// formatted \
	formatted() {
		return ""
	}

	/// Formatted $mol_view sub / <= formatted
	@ $mol_mem()
	Formatted() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.formatted() )
			return obj
		})( new $mol_view )
	}

	/// Formatted_label $mol_labeler 
	/// 	title <= formatted_label 
	/// 	content <= Formatted
	@ $mol_mem()
	Formatted_label() {
		return (( obj )=>{
			obj.title = () => this.formatted_label()
			obj.content = () => this.Formatted()
			return obj
		})( new $mol_labeler )
	}

	/// sub / 
	/// 	<= Date_label 
	/// 	<= Formatted_label
	sub() {
		return [].concat( this.Date_label() , this.Formatted_label() )
	}

} }

