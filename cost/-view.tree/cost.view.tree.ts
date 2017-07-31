namespace $ { export class $mol_cost extends $mol_view {

	/// value null
	value() {
		return <any> null
	}

	/// prefix \
	prefix() {
		return ""
	}

	/// Prefix $mol_view sub / <= prefix
	@ $mol_mem()
	Prefix() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.prefix() )
			return obj
		})( new $mol_view )
	}

	/// value_view \
	value_view() {
		return ""
	}

	/// Value $mol_view sub / <= value_view
	@ $mol_mem()
	Value() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.value_view() )
			return obj
		})( new $mol_view )
	}

	/// postfix \
	postfix() {
		return ""
	}

	/// Postfix $mol_view sub / <= postfix
	@ $mol_mem()
	Postfix() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.postfix() )
			return obj
		})( new $mol_view )
	}

	/// sub / 
	/// 	<= Prefix 
	/// 	<= Value 
	/// 	<= Postfix
	sub() {
		return [].concat( this.Prefix() , this.Value() , this.Postfix() )
	}

} }

