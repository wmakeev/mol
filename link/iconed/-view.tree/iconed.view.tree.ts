namespace $ { export class $mol_link_iconed extends $mol_link {

	/// icon \
	icon() {
		return ""
	}

	/// Icon $mol_image uri <= icon
	@ $mol_mem()
	Icon() {
		return (( obj )=>{
			obj.uri = () => this.icon()
			return obj
		})( new $mol_image )
	}

	/// title <= uri
	title() {
		return this.uri()
	}

	/// content / <= title
	content() {
		return [].concat( this.title() )
	}

	/// sub / 
	/// 	<= Icon 
	/// 	<= content
	sub() {
		return [].concat( this.Icon() , this.content() )
	}

	/// host \
	host() {
		return ""
	}

} }

