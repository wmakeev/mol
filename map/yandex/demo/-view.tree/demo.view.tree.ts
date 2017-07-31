namespace $ { export class $mol_map_yandex_demo extends $mol_map_yandex {

	/// title @ \Simple Yandex Maps wrapper
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// center?val / 
	/// 	60 
	/// 	30
	@ $mol_mem()
	center( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [].concat( 60 , 30 )
	}

	/// zoom?val 10
	@ $mol_mem()
	zoom( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 10
	}

} }

