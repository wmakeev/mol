namespace $ { export class $mol_app_supplies_card extends $mol_link {

	/// supply null
	supply() {
		return <any> null
	}

	/// status \
	status() {
		return ""
	}

	/// code_title @ \Code
	code_title() {
		return $mol_locale.text( this.locale_contexts() , "code_title" )
	}

	/// code \
	code() {
		return ""
	}

	/// Code_item $mol_labeler 
	/// 	title <= code_title 
	/// 	content <= code
	@ $mol_mem()
	Code_item() {
		return (( obj )=>{
			obj.title = () => this.code_title()
			obj.content = () => this.code()
			return obj
		})( new $mol_labeler )
	}

	/// cost_title @ \Cost
	cost_title() {
		return $mol_locale.text( this.locale_contexts() , "cost_title" )
	}

	/// cost $mol_unit_money valueOf 0
	@ $mol_mem()
	cost() {
		return (( obj )=>{
			obj.valueOf = () => 0
			return obj
		})( new $mol_unit_money )
	}

	/// Cost $mol_cost value <= cost
	@ $mol_mem()
	Cost() {
		return (( obj )=>{
			obj.value = () => this.cost()
			return obj
		})( new $mol_cost )
	}

	/// Cost_item $mol_labeler 
	/// 	title <= cost_title 
	/// 	content <= Cost
	@ $mol_mem()
	Cost_item() {
		return (( obj )=>{
			obj.title = () => this.cost_title()
			obj.content = () => this.Cost()
			return obj
		})( new $mol_labeler )
	}

	/// provider_title @ \Provider
	provider_title() {
		return $mol_locale.text( this.locale_contexts() , "provider_title" )
	}

	/// provider_name \
	provider_name() {
		return ""
	}

	/// Provider_item $mol_labeler 
	/// 	title <= provider_title 
	/// 	content <= provider_name
	@ $mol_mem()
	Provider_item() {
		return (( obj )=>{
			obj.title = () => this.provider_title()
			obj.content = () => this.provider_name()
			return obj
		})( new $mol_labeler )
	}

	/// items / 
	/// 	<= Code_item 
	/// 	<= Cost_item 
	/// 	<= Provider_item
	items() {
		return [].concat( this.Code_item() , this.Cost_item() , this.Provider_item() )
	}

	/// Group $mol_row sub / <= items
	@ $mol_mem()
	Group() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.items() )
			return obj
		})( new $mol_row )
	}

	/// Card $mol_card 
	/// 	status <= status 
	/// 	Content <= Group
	@ $mol_mem()
	Card() {
		return (( obj )=>{
			obj.status = () => this.status()
			obj.Content = () => this.Group()
			return obj
		})( new $mol_card )
	}

	/// sub / <= Card
	sub() {
		return [].concat( this.Card() )
	}

} }

