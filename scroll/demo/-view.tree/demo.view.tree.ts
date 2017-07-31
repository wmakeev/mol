namespace $ { export class $mol_scroll_demo extends $mol_scroll {

	/// title @ \Simple scroll pane
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// One $mol_filler
	@ $mol_mem()
	One() {
		return (( obj )=>{
			return obj
		})( new $mol_filler )
	}

	/// Two $mol_filler
	@ $mol_mem()
	Two() {
		return (( obj )=>{
			return obj
		})( new $mol_filler )
	}

	/// Tree $mol_filler
	@ $mol_mem()
	Tree() {
		return (( obj )=>{
			return obj
		})( new $mol_filler )
	}

	/// Row $mol_row sub / 
	/// 	<= One 
	/// 	<= Two 
	/// 	<= Tree
	@ $mol_mem()
	Row() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.One() , this.Two() , this.Tree() )
			return obj
		})( new $mol_row )
	}

	/// sub / <= Row
	sub() {
		return [].concat( this.Row() )
	}

} }

