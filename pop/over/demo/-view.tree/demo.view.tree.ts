namespace $ { export class $mol_pop_over_demo extends $mol_row {

	/// title @ \Menu that opens on mouse over
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// file_title @ \File
	file_title() {
		return $mol_locale.text( this.locale_contexts() , "file_title" )
	}

	/// open_title @ \Open
	open_title() {
		return $mol_locale.text( this.locale_contexts() , "open_title" )
	}

	/// Open $mol_button_minor title <= open_title
	@ $mol_mem()
	Open() {
		return (( obj )=>{
			obj.title = () => this.open_title()
			return obj
		})( new $mol_button_minor )
	}

	/// export_title @ \Export
	export_title() {
		return $mol_locale.text( this.locale_contexts() , "export_title" )
	}

	/// Export $mol_button_minor title <= export_title
	@ $mol_mem()
	Export() {
		return (( obj )=>{
			obj.title = () => this.export_title()
			return obj
		})( new $mol_button_minor )
	}

	/// save_title @ \Save
	save_title() {
		return $mol_locale.text( this.locale_contexts() , "save_title" )
	}

	/// Save $mol_button_minor title <= save_title
	@ $mol_mem()
	Save() {
		return (( obj )=>{
			obj.title = () => this.save_title()
			return obj
		})( new $mol_button_minor )
	}

	/// File_menu $mol_list rows / 
	/// 	<= Open 
	/// 	<= Export 
	/// 	<= Save
	@ $mol_mem()
	File_menu() {
		return (( obj )=>{
			obj.rows = () => [].concat( this.Open() , this.Export() , this.Save() )
			return obj
		})( new $mol_list )
	}

	/// File $mol_pop_over 
	/// 	align \bottom_right
	/// 	Anchor <= file_title 
	/// 	bubble_content / <= File_menu
	@ $mol_mem()
	File() {
		return (( obj )=>{
			obj.align = () => "bottom_right"
			obj.Anchor = () => this.file_title()
			obj.bubble_content = () => [].concat( this.File_menu() )
			return obj
		})( new $mol_pop_over )
	}

	/// help_title @ \About
	help_title() {
		return $mol_locale.text( this.locale_contexts() , "help_title" )
	}

	/// updates_title @ \Updates
	updates_title() {
		return $mol_locale.text( this.locale_contexts() , "updates_title" )
	}

	/// Updates $mol_button_minor title <= updates_title
	@ $mol_mem()
	Updates() {
		return (( obj )=>{
			obj.title = () => this.updates_title()
			return obj
		})( new $mol_button_minor )
	}

	/// about_title @ \About
	about_title() {
		return $mol_locale.text( this.locale_contexts() , "about_title" )
	}

	/// About $mol_button_minor title <= about_title
	@ $mol_mem()
	About() {
		return (( obj )=>{
			obj.title = () => this.about_title()
			return obj
		})( new $mol_button_minor )
	}

	/// Help_menu $mol_list rows / 
	/// 	<= Updates 
	/// 	<= About
	@ $mol_mem()
	Help_menu() {
		return (( obj )=>{
			obj.rows = () => [].concat( this.Updates() , this.About() )
			return obj
		})( new $mol_list )
	}

	/// Help $mol_pop_over 
	/// 	align \bottom_right
	/// 	Anchor <= help_title 
	/// 	bubble_content / <= Help_menu
	@ $mol_mem()
	Help() {
		return (( obj )=>{
			obj.align = () => "bottom_right"
			obj.Anchor = () => this.help_title()
			obj.bubble_content = () => [].concat( this.Help_menu() )
			return obj
		})( new $mol_pop_over )
	}

	/// sub / 
	/// 	<= File 
	/// 	<= Help
	sub() {
		return [].concat( this.File() , this.Help() )
	}

} }

