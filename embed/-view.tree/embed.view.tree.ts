namespace $ { export class $mol_embed extends $mol_ghost {

	/// uri \
	uri() {
		return ""
	}

	/// Pdf $mol_embed_pdf uri <= uri
	@ $mol_mem()
	Pdf() {
		return (( obj )=>{
			obj.uri = () => this.uri()
			return obj
		})( new $mol_embed_pdf )
	}

	/// mime \
	mime() {
		return ""
	}

	/// Native $mol_embed_native 
	/// 	uri <= uri 
	/// 	mime <= mime
	@ $mol_mem()
	Native() {
		return (( obj )=>{
			obj.uri = () => this.uri()
			obj.mime = () => this.mime()
			return obj
		})( new $mol_embed_native )
	}

} }

