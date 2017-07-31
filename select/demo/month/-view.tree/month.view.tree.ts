namespace $ { export class $mol_select_demo_month extends $mol_row {

	/// title @ \Month picker with filter
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// month?val \
	@ $mol_mem()
	month( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// months * 
	/// 	jan \January
	/// 	feb \February
	/// 	mar \March
	/// 	apr \April
	/// 	may \May
	/// 	jun \June
	/// 	jul \July
	/// 	aug \August
	/// 	sep \September
	/// 	oct \October
	/// 	nov \November
	/// 	dec \December
	months() {
		return ({
			"jan" :  "January" ,
			"feb" :  "February" ,
			"mar" :  "March" ,
			"apr" :  "April" ,
			"may" :  "May" ,
			"jun" :  "June" ,
			"jul" :  "July" ,
			"aug" :  "August" ,
			"sep" :  "September" ,
			"oct" :  "October" ,
			"nov" :  "November" ,
			"dec" :  "December" ,
		})
	}

	/// Month_select $mol_select 
	/// 	no_options_message \Not found
	/// 	value?val <=> month?val 
	/// 	dictionary <= months
	@ $mol_mem()
	Month_select() {
		return (( obj )=>{
			obj.no_options_message = () => "Not found"
			obj.value = ( val? : any ) => this.month( val )
			obj.dictionary = () => this.months()
			return obj
		})( new $mol_select )
	}

	/// Month $mol_labeler 
	/// 	title \Month
	/// 	Content <= Month_select
	@ $mol_mem()
	Month() {
		return (( obj )=>{
			obj.title = () => "Month"
			obj.Content = () => this.Month_select()
			return obj
		})( new $mol_labeler )
	}

	/// sub / <= Month
	sub() {
		return [].concat( this.Month() )
	}

} }

