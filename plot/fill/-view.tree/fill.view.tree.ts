namespace $ { export class $mol_plot_fill extends $mol_plot_graph {

	/// front /
	front() {
		return [] as any[]
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

