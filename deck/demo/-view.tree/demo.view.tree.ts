namespace $ { export class $mol_deck_demo extends $mol_row {

	/// title @ \Simple deck with tabbar
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// greeterLabel @ \Greeting
	greeterLabel() {
		return $mol_locale.text( this.locale_contexts() , "greeterLabel" )
	}

	/// greeterMessage @ \Hello, world!
	greeterMessage() {
		return $mol_locale.text( this.locale_contexts() , "greeterMessage" )
	}

	/// greeterMessager $mol_view sub / <= greeterMessage
	@ $mol_mem()
	greeterMessager() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.greeterMessage() )
			return obj
		})( new $mol_view )
	}

	/// greeterContent $mol_row sub / <= greeterMessager
	@ $mol_mem()
	greeterContent() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.greeterMessager() )
			return obj
		})( new $mol_row )
	}

	/// greeterItem * 
	/// 	title <= greeterLabel 
	/// 	Content <= greeterContent
	greeterItem() {
		return ({
			"title" :  this.greeterLabel() ,
			"Content" :  this.greeterContent() ,
		})
	}

	/// questerLabel @ \Question
	questerLabel() {
		return $mol_locale.text( this.locale_contexts() , "questerLabel" )
	}

	/// questerMessage @ \How are you?
	questerMessage() {
		return $mol_locale.text( this.locale_contexts() , "questerMessage" )
	}

	/// questerMessager $mol_view sub / <= questerMessage
	@ $mol_mem()
	questerMessager() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.questerMessage() )
			return obj
		})( new $mol_view )
	}

	/// questerContent $mol_row sub / <= questerMessager
	@ $mol_mem()
	questerContent() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.questerMessager() )
			return obj
		})( new $mol_row )
	}

	/// questerItem * 
	/// 	title <= questerLabel 
	/// 	Content <= questerContent
	questerItem() {
		return ({
			"title" :  this.questerLabel() ,
			"Content" :  this.questerContent() ,
		})
	}

	/// commanderLabel @ \Command
	commanderLabel() {
		return $mol_locale.text( this.locale_contexts() , "commanderLabel" )
	}

	/// commanderMessage @ \Let us do it right!
	commanderMessage() {
		return $mol_locale.text( this.locale_contexts() , "commanderMessage" )
	}

	/// commanderMessager $mol_view sub / <= commanderMessage
	@ $mol_mem()
	commanderMessager() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.commanderMessage() )
			return obj
		})( new $mol_view )
	}

	/// commanderContent $mol_row sub / <= commanderMessager
	@ $mol_mem()
	commanderContent() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.commanderMessager() )
			return obj
		})( new $mol_row )
	}

	/// commanderItem * 
	/// 	title <= commanderLabel 
	/// 	Content <= commanderContent
	commanderItem() {
		return ({
			"title" :  this.commanderLabel() ,
			"Content" :  this.commanderContent() ,
		})
	}

	/// Deck $mol_deck items / 
	/// 	<= greeterItem 
	/// 	<= questerItem 
	/// 	<= commanderItem
	@ $mol_mem()
	Deck() {
		return (( obj )=>{
			obj.items = () => [].concat( this.greeterItem() , this.questerItem() , this.commanderItem() )
			return obj
		})( new $mol_deck )
	}

	/// sub / <= Deck
	sub() {
		return [].concat( this.Deck() )
	}

} }

