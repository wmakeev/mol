namespace $ { export class $mol_section extends $mol_list {

	/// head null
	head() {
		return <any> null
	}

	/// Head $mol_view sub / <= head
	@ $mol_mem()
	Head() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.head() )
			return obj
		})( new $mol_view )
	}

	/// Content null
	Content() {
		return <any> null
	}

	/// rows / 
	/// 	<= Head 
	/// 	<= Content
	rows() {
		return [].concat( this.Head() , this.Content() )
	}

} }

