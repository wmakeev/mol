namespace $ { export class $mol_plot_group extends $mol_plot_graph {

	/// graphs /
	graphs() {
		return [] as any[]
	}

	/// graphs_enriched <= graphs
	graphs_enriched() {
		return this.graphs()
	}

	/// sub <= graphs_enriched
	sub() {
		return this.graphs_enriched()
	}

	/// graph_samples /
	graph_samples() {
		return [] as any[]
	}

	/// Sample $mol_plot_graph_sample sub <= graph_samples
	@ $mol_mem()
	Sample() {
		return (( obj )=>{
			obj.sub = () => this.graph_samples()
			return obj
		})( new $mol_plot_graph_sample )
	}

} }

