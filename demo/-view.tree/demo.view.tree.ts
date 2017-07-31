namespace $ { export class $mol_demo extends $mol_view {

	/// name \$mol_view
	name() {
		return "$mol_view"
	}

	/// title <= name
	title() {
		return this.name()
	}

	/// Title $mol_link 
	/// 	arg * demo <= name 
	/// 	sub / <= title
	@ $mol_mem()
	Title() {
		return (( obj )=>{
			obj.arg = () => ({
			"demo" :  this.name() ,
		})
			obj.sub = () => [].concat( this.title() )
			return obj
		})( new $mol_link )
	}

	/// Head $mol_view sub / <= Title
	@ $mol_mem()
	Head() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Title() )
			return obj
		})( new $mol_view )
	}

	/// widget null
	widget() {
		return <any> null
	}

	/// Screen $mol_view sub / <= widget
	@ $mol_mem()
	Screen() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.widget() )
			return obj
		})( new $mol_view )
	}

	/// sub / 
	/// 	<= Head 
	/// 	<= Screen
	sub() {
		return [].concat( this.Head() , this.Screen() )
	}

} }

