namespace $ { export class $mol_expander extends $mol_list {

	/// expanded?val false
	@ $mol_mem()
	expanded( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : false
	}

	/// Label $mol_check_expand 
	/// 	minimal_height 40 
	/// 	checked?val <=> expanded?val 
	/// 	title <= title
	@ $mol_mem()
	Label() {
		return (( obj )=>{
			obj.minimal_height = () => 40
			obj.checked = ( val? : any ) => this.expanded( val )
			obj.title = () => this.title()
			return obj
		})( new $mol_check_expand )
	}

	/// content /
	content() {
		return [] as any[]
	}

	/// Content $mol_view sub <= content
	@ $mol_mem()
	Content() {
		return (( obj )=>{
			obj.sub = () => this.content()
			return obj
		})( new $mol_view )
	}

	/// rows / 
	/// 	<= Label 
	/// 	<= Content
	rows() {
		return [].concat( this.Label() , this.Content() )
	}

} }

