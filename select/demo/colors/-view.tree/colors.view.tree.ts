namespace $ { export class $mol_select_demo_colors extends $mol_row {

	/// title @ \Color picker with filter and custom rows
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// color?val \
	@ $mol_mem()
	color( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// colors *
	colors() {
		return ({
		})
	}

	/// color_name!id \
	color_name( id : any ) {
		return ""
	}

	/// option_color!id \
	option_color( id : any ) {
		return ""
	}

	/// Color_preview!id $mol_select_colors_color_preview color <= option_color!id
	@ $mol_mem_key()
	Color_preview( id : any ) {
		return (( obj )=>{
			obj.color = () => this.option_color(id)
			return obj
		})( new $mol_select_colors_color_preview )
	}

	/// Color_row!id $mol_row 
	/// 	sub / 
	/// 		<= Color_preview!id 
	/// 		<= color_name!id 
	/// 	minimal_height 40
	@ $mol_mem_key()
	Color_row( id : any ) {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Color_preview(id) , this.color_name(id) )
			obj.minimal_height = () => 40
			return obj
		})( new $mol_row )
	}

	/// option_content!id / <= Color_row!id
	option_content( id : any ) {
		return [].concat( this.Color_row(id) )
	}

	/// Color_select $mol_select 
	/// 	value?val <=> color?val 
	/// 	dictionary <= colors 
	/// 	option_label!id <= color_name!id 
	/// 	option_content!id <= option_content!id
	@ $mol_mem()
	Color_select() {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.color( val )
			obj.dictionary = () => this.colors()
			obj.option_label = ( id : any ) => this.color_name(id)
			obj.option_content = ( id : any ) => this.option_content(id)
			return obj
		})( new $mol_select )
	}

	/// Color $mol_labeler 
	/// 	title \Prefer color
	/// 	Content <= Color_select
	@ $mol_mem()
	Color() {
		return (( obj )=>{
			obj.title = () => "Prefer color"
			obj.Content = () => this.Color_select()
			return obj
		})( new $mol_labeler )
	}

	/// sub / <= Color
	sub() {
		return [].concat( this.Color() )
	}

} }

namespace $ { export class $mol_select_colors_color_preview extends $mol_view {

	/// color \
	color() {
		return ""
	}

	/// style * 
	/// 	^ 
	/// 	background <= color
	style() {
		return ({
			...super.style() ,
			"background" :  this.color() ,
		})
	}

} }

