namespace $ { export class $mol_search_demo extends $mol_row {

	/// title @ \Simple search field with suggest
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	query(){
		return this.Search().query()
	}

	/// suggests /
	suggests() {
		return [] as any[]
	}

	/// Search $mol_search 
	/// 	query => query 
	/// 	suggests <= suggests
	@ $mol_mem()
	Search() {
		return (( obj )=>{
			obj.suggests = () => this.suggests()
			return obj
		})( new $mol_search )
	}

	/// sub / <= Search
	sub() {
		return [].concat( this.Search() )
	}

} }

