namespace $ { export class $mol_plot_line extends $mol_plot_graph {

	/// color_fill \none
	color_fill() {
		return "none"
	}

	/// curve \
	curve() {
		return ""
	}

	/// Curve $mol_svg_path geometry <= curve
	@ $mol_mem()
	Curve() {
		return (( obj )=>{
			obj.geometry = () => this.curve()
			return obj
		})( new $mol_svg_path )
	}

	/// sub / <= Curve
	sub() {
		return [].concat( this.Curve() )
	}

	/// Sample $mol_plot_graph_sample 
	/// 	color <= color 
	/// 	type <= type
	@ $mol_mem()
	Sample() {
		return (( obj )=>{
			obj.color = () => this.color()
			obj.type = () => this.type()
			return obj
		})( new $mol_plot_graph_sample )
	}

} }

