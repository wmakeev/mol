namespace $ { export class $mol_portion_indicator extends $mol_view {

	/// width_style \0
	width_style() {
		return "0"
	}

	/// style * 
	/// 	^ 
	/// 	width <= width_style
	style() {
		return ({
			...super.style() ,
			"width" :  this.width_style() ,
		})
	}

} }

namespace $ { export class $mol_portion extends $mol_view {

	/// portion 0
	portion() {
		return 0
	}

	/// indicator_width_style \0
	indicator_width_style() {
		return "0"
	}

	/// indicator $mol_portion_indicator width_style <= indicator_width_style
	@ $mol_mem()
	indicator() {
		return (( obj )=>{
			obj.width_style = () => this.indicator_width_style()
			return obj
		})( new $mol_portion_indicator )
	}

	/// sub / <= indicator
	sub() {
		return [].concat( this.indicator() )
	}

} }

