namespace $ { export class $mol_dimmer extends $mol_view {

	/// haystack \
	haystack() {
		return ""
	}

	/// needle \
	needle() {
		return ""
	}

	/// parts /
	parts() {
		return [] as any[]
	}

	/// sub <= parts
	sub() {
		return this.parts()
	}

	/// string!id \
	string( id : any ) {
		return ""
	}

	/// Low!id $mol_view sub / <= string!id
	@ $mol_mem_key()
	Low( id : any ) {
		return (( obj )=>{
			obj.sub = () => [].concat( this.string(id) )
			return obj
		})( new $mol_view )
	}

} }

