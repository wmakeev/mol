namespace $ { export class $mol_demo_all extends $mol_view {

	/// name \$mol_view
	name() {
		return "$mol_view"
	}

	/// mediumLabel \Fit to content
	mediumLabel() {
		return "Fit to content"
	}

	/// medium $mol_demo_medium 
	/// 	name <= name 
	/// 	title <= mediumLabel
	@ $mol_mem()
	medium() {
		return (( obj )=>{
			obj.name = () => this.name()
			obj.title = () => this.mediumLabel()
			return obj
		})( new $mol_demo_medium )
	}

	/// smallLabel @ \Minimum screen
	smallLabel() {
		return $mol_locale.text( this.locale_contexts() , "smallLabel" )
	}

	/// small $mol_demo_small 
	/// 	name <= name 
	/// 	title <= smallLabel
	@ $mol_mem()
	small() {
		return (( obj )=>{
			obj.name = () => this.name()
			obj.title = () => this.smallLabel()
			return obj
		})( new $mol_demo_small )
	}

	/// largeLabel @ \Maximize to screen
	largeLabel() {
		return $mol_locale.text( this.locale_contexts() , "largeLabel" )
	}

	/// large $mol_demo_large 
	/// 	name <= name 
	/// 	title <= largeLabel
	@ $mol_mem()
	large() {
		return (( obj )=>{
			obj.name = () => this.name()
			obj.title = () => this.largeLabel()
			return obj
		})( new $mol_demo_large )
	}

	/// sub / 
	/// 	<= medium 
	/// 	<= small 
	/// 	<= large
	sub() {
		return [].concat( this.medium() , this.small() , this.large() )
	}

} }

