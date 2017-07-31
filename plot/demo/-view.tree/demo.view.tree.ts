namespace $ { export class $mol_plot_demo extends $mol_plot_pane {

	/// title @ \Dynamic lightweight graphs
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// count?val 20
	@ $mol_mem()
	count( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 20
	}

	/// gap 48
	gap() {
		return 48
	}

	/// saturation_series /
	saturation_series() {
		return [] as any[]
	}

	/// Saturation_fill $mol_plot_fill
	@ $mol_mem()
	Saturation_fill() {
		return (( obj )=>{
			return obj
		})( new $mol_plot_fill )
	}

	/// Saturation_line $mol_plot_line type \dashed
	@ $mol_mem()
	Saturation_line() {
		return (( obj )=>{
			obj.type = () => "dashed"
			return obj
		})( new $mol_plot_line )
	}

	/// Saturation $mol_plot_group 
	/// 	series <= saturation_series 
	/// 	graphs / 
	/// 		<= Saturation_fill 
	/// 		<= Saturation_line
	@ $mol_mem()
	Saturation() {
		return (( obj )=>{
			obj.series = () => this.saturation_series()
			obj.graphs = () => [].concat( this.Saturation_fill() , this.Saturation_line() )
			return obj
		})( new $mol_plot_group )
	}

	/// input_series /
	input_series() {
		return [] as any[]
	}

	/// Input_line $mol_plot_line
	@ $mol_mem()
	Input_line() {
		return (( obj )=>{
			return obj
		})( new $mol_plot_line )
	}

	/// Input_dots $mol_plot_dot
	@ $mol_mem()
	Input_dots() {
		return (( obj )=>{
			return obj
		})( new $mol_plot_dot )
	}

	/// Input $mol_plot_group 
	/// 	series <= input_series 
	/// 	graphs / 
	/// 		<= Input_line 
	/// 		<= Input_dots
	@ $mol_mem()
	Input() {
		return (( obj )=>{
			obj.series = () => this.input_series()
			obj.graphs = () => [].concat( this.Input_line() , this.Input_dots() )
			return obj
		})( new $mol_plot_group )
	}

	/// output_series /
	output_series() {
		return [] as any[]
	}

	/// Output $mol_plot_bar series <= output_series
	@ $mol_mem()
	Output() {
		return (( obj )=>{
			obj.series = () => this.output_series()
			return obj
		})( new $mol_plot_bar )
	}

	/// Voltage_title @ \V
	Voltage_title() {
		return $mol_locale.text( this.locale_contexts() , "Voltage_title" )
	}

	/// Voltage $mol_plot_ruler_vert title <= Voltage_title
	@ $mol_mem()
	Voltage() {
		return (( obj )=>{
			obj.title = () => this.Voltage_title()
			return obj
		})( new $mol_plot_ruler_vert )
	}

	/// Time_title @ \ms
	Time_title() {
		return $mol_locale.text( this.locale_contexts() , "Time_title" )
	}

	/// Time $mol_plot_ruler_hor 
	/// 	title <= Time_title 
	/// 	series <= output_series
	@ $mol_mem()
	Time() {
		return (( obj )=>{
			obj.title = () => this.Time_title()
			obj.series = () => this.output_series()
			return obj
		})( new $mol_plot_ruler_hor )
	}

	/// graphs / 
	/// 	<= Saturation 
	/// 	<= Input 
	/// 	<= Output 
	/// 	<= Voltage 
	/// 	<= Time
	graphs() {
		return [].concat( this.Saturation() , this.Input() , this.Output() , this.Voltage() , this.Time() )
	}

} }

