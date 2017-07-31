namespace $ { export class $mol_card_demo extends $mol_row {

	/// title @ \Cards with optional status
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// Simple $mol_card Content $mol_row sub / \Hello world!
	@ $mol_mem()
	Simple() {
		return (( obj )=>{
			obj.Content = () => (( obj )=>{
			obj.sub = () => [].concat( "Hello world!" )
			return obj
		})( new $mol_row )
			return obj
		})( new $mol_card )
	}

	/// Pending $mol_card 
	/// 	Content $mol_row sub / \Hello pending!
	/// 	status \pending
	@ $mol_mem()
	Pending() {
		return (( obj )=>{
			obj.Content = () => (( obj )=>{
			obj.sub = () => [].concat( "Hello pending!" )
			return obj
		})( new $mol_row )
			obj.status = () => "pending"
			return obj
		})( new $mol_card )
	}

	/// sub / 
	/// 	<= Simple 
	/// 	<= Pending
	sub() {
		return [].concat( this.Simple() , this.Pending() )
	}

} }

