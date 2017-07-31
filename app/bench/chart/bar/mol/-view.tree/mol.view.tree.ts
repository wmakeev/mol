namespace $ { export class $mol_app_bench_chart_bar_mol extends $mol_view {

	/// Vert $mol_plot_ruler_vert title \Val
	@ $mol_mem()
	Vert() {
		return (( obj )=>{
			obj.title = () => "Val"
			return obj
		})( new $mol_plot_ruler_vert )
	}

	/// hor_series /
	hor_series() {
		return [] as any[]
	}

	/// Hor $mol_plot_ruler_hor 
	/// 	title \Iter
	/// 	series <= hor_series
	@ $mol_mem()
	Hor() {
		return (( obj )=>{
			obj.title = () => "Iter"
			obj.series = () => this.hor_series()
			return obj
		})( new $mol_plot_ruler_hor )
	}

	/// graphs /
	graphs() {
		return [] as any[]
	}

	/// Chart $mol_chart graphs / 
	/// 	<= Vert 
	/// 	<= Hor 
	/// 	<= graphs
	@ $mol_mem()
	Chart() {
		return (( obj )=>{
			obj.graphs = () => [].concat( this.Vert() , this.Hor() , this.graphs() )
			return obj
		})( new $mol_chart )
	}

	/// sub / <= Chart
	sub() {
		return [].concat( this.Chart() )
	}

	/// graph_title!id \
	graph_title( id : any ) {
		return ""
	}

	/// series!id /
	series( id : any ) {
		return [] as any[]
	}

	/// Graph!id $mol_plot_bar 
	/// 	title <= graph_title!id 
	/// 	series <= series!id
	@ $mol_mem_key()
	Graph( id : any ) {
		return (( obj )=>{
			obj.title = () => this.graph_title(id)
			obj.series = () => this.series(id)
			return obj
		})( new $mol_plot_bar )
	}

} }

