namespace $ { export class $mol_app_demo_placeholder extends $mol_book_placeholder {

	/// title \$mol
	title() {
		return "$mol"
	}

	/// Title $mol_view sub / <= title
	@ $mol_mem()
	Title() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.title() )
			return obj
		})( new $mol_view )
	}

	/// description @ \Reactive micro-modular ui framework. Very simple, but very powerful! $mol has small size of code, reactive architecture, components with adaptive design, that can be easily configured.
	description() {
		return $mol_locale.text( this.locale_contexts() , "description" )
	}

	/// Description $mol_view sub / <= description
	@ $mol_mem()
	Description() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.description() )
			return obj
		})( new $mol_view )
	}

	/// technology @ \Flexible adaptive interface
	technology() {
		return $mol_locale.text( this.locale_contexts() , "technology" )
	}

	/// Technology $mol_app_placeholder_advantage 
	/// 	image \-/mol/app/demo/placeholder/technology.svg
	/// 	title <= technology
	@ $mol_mem()
	Technology() {
		return (( obj )=>{
			obj.image = () => "-/mol/app/demo/placeholder/technology.svg"
			obj.title = () => this.technology()
			return obj
		})( new $mol_app_placeholder_advantage )
	}

	/// code_rate @ \Quick and easy development
	code_rate() {
		return $mol_locale.text( this.locale_contexts() , "code_rate" )
	}

	/// Code $mol_app_placeholder_advantage 
	/// 	image \-/mol/app/demo/placeholder/code_rate.svg
	/// 	title <= code_rate
	@ $mol_mem()
	Code() {
		return (( obj )=>{
			obj.image = () => "-/mol/app/demo/placeholder/code_rate.svg"
			obj.title = () => this.code_rate()
			return obj
		})( new $mol_app_placeholder_advantage )
	}

	/// programming @ \High-speed applications
	programming() {
		return $mol_locale.text( this.locale_contexts() , "programming" )
	}

	/// Programming $mol_app_placeholder_advantage 
	/// 	image \-/mol/app/demo/placeholder/programming.svg
	/// 	title <= programming
	@ $mol_mem()
	Programming() {
		return (( obj )=>{
			obj.image = () => "-/mol/app/demo/placeholder/programming.svg"
			obj.title = () => this.programming()
			return obj
		})( new $mol_app_placeholder_advantage )
	}

	/// Advantages $mol_view sub / 
	/// 	<= Technology 
	/// 	<= Code 
	/// 	<= Programming
	@ $mol_mem()
	Advantages() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Technology() , this.Code() , this.Programming() )
			return obj
		})( new $mol_view )
	}

	/// Github_link $mol_link_iconed uri \https://github.com/eigenmethod/mol
	@ $mol_mem()
	Github_link() {
		return (( obj )=>{
			obj.uri = () => "https://github.com/eigenmethod/mol"
			return obj
		})( new $mol_link_iconed )
	}

	/// Content $mol_card content / 
	/// 	<= Title 
	/// 	<= Description 
	/// 	<= Advantages 
	/// 	<= Github_link
	@ $mol_mem()
	Content() {
		return (( obj )=>{
			obj.content = () => [].concat( this.Title() , this.Description() , this.Advantages() , this.Github_link() )
			return obj
		})( new $mol_card )
	}

	/// sub / <= Content
	sub() {
		return [].concat( this.Content() )
	}

} }

namespace $ { export class $mol_app_placeholder_advantage extends $mol_view {

	/// image \
	image() {
		return ""
	}

	/// Image $mol_image uri <= image
	@ $mol_mem()
	Image() {
		return (( obj )=>{
			obj.uri = () => this.image()
			return obj
		})( new $mol_image )
	}

	/// title \
	title() {
		return ""
	}

	/// sub / 
	/// 	<= Image 
	/// 	<= title
	sub() {
		return [].concat( this.Image() , this.title() )
	}

} }

