namespace $ { export class $mol_embed_native extends $mol_view {

	/// dom_name \object
	dom_name() {
		return "object"
	}

	/// uri \
	uri() {
		return ""
	}

	/// mime \
	mime() {
		return ""
	}

	/// attr * 
	/// 	^ 
	/// 	data <= uri 
	/// 	type <= mime
	attr() {
		return ({
			...super.attr() ,
			"data" :  this.uri() ,
			"type" :  this.mime() ,
		})
	}

	/// open_label @ \Open
	open_label() {
		return $mol_locale.text( this.locale_contexts() , "open_label" )
	}

	/// Open_button $mol_button_major title <= open_label
	@ $mol_mem()
	Open_button() {
		return (( obj )=>{
			obj.title = () => this.open_label()
			return obj
		})( new $mol_button_major )
	}

	/// Open $mol_link 
	/// 	uri <= uri 
	/// 	sub / <= Open_button
	@ $mol_mem()
	Open() {
		return (( obj )=>{
			obj.uri = () => this.uri()
			obj.sub = () => [].concat( this.Open_button() )
			return obj
		})( new $mol_link )
	}

	/// sub / <= Open
	sub() {
		return [].concat( this.Open() )
	}

} }

