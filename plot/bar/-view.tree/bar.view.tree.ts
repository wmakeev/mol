namespace $ { export class $mol_plot_bar extends $mol_plot_graph {

	/// stroke_width \1rem
	stroke_width() {
		return "1rem"
	}

	/// style * 
	/// 	^ 
	/// 	stroke-width <= stroke_width
	style() {
		return ({
			...super.style() ,
			"stroke-width" :  this.stroke_width() ,
		})
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

	/// Sample $mol_plot_graph_sample color <= color
	@ $mol_mem()
	Sample() {
		return (( obj )=>{
			obj.color = () => this.color()
			return obj
		})( new $mol_plot_graph_sample )
	}

} }

