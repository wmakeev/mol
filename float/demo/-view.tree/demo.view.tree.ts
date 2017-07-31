namespace $ { export class $mol_float_demo extends $mol_scroll {

	/// title @ \Floating header example
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// Head_content $mol_view sub / \Float header
	@ $mol_mem()
	Head_content() {
		return (( obj )=>{
			obj.sub = () => [].concat( "Float header" )
			return obj
		})( new $mol_view )
	}

	/// Head_row $mol_row sub / <= Head_content
	@ $mol_mem()
	Head_row() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Head_content() )
			return obj
		})( new $mol_row )
	}

	/// Head_card $mol_card sub / <= Head_row
	@ $mol_mem()
	Head_card() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Head_row() )
			return obj
		})( new $mol_card )
	}

	/// Head $mol_float sub / <= Head_card
	@ $mol_mem()
	Head() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Head_card() )
			return obj
		})( new $mol_float )
	}

	/// Filler1 $mol_filler
	@ $mol_mem()
	Filler1() {
		return (( obj )=>{
			return obj
		})( new $mol_filler )
	}

	/// Filler2 $mol_filler
	@ $mol_mem()
	Filler2() {
		return (( obj )=>{
			return obj
		})( new $mol_filler )
	}

	/// Content $mol_row sub / 
	/// 	<= Filler1 
	/// 	<= Filler2
	@ $mol_mem()
	Content() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Filler1() , this.Filler2() )
			return obj
		})( new $mol_row )
	}

	/// content / <= Content
	content() {
		return [].concat( this.Content() )
	}

	/// sub / 
	/// 	<= Head 
	/// 	<= content
	sub() {
		return [].concat( this.Head() , this.content() )
	}

} }

