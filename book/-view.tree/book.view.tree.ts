namespace $ { export class $mol_book extends $mol_view {

	/// pages_wrapped /
	pages_wrapped() {
		return [] as any[]
	}

	/// sub <= pages_wrapped
	sub() {
		return this.pages_wrapped()
	}

	/// pages /
	pages() {
		return [] as any[]
	}

	width(){
		return this.Meter().width()
	}

	/// Meter $mol_meter width => width
	@ $mol_mem()
	Meter() {
		return (( obj )=>{
			return obj
		})( new $mol_meter )
	}

	/// event_front_up?val null
	@ $mol_mem()
	event_front_up( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// event_front_down?val null
	@ $mol_mem()
	event_front_down( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Touch $mol_touch 
	/// 	swipe_right?val <=> event_front_up?val 
	/// 	swipe_left?val <=> event_front_down?val
	@ $mol_mem()
	Touch() {
		return (( obj )=>{
			obj.swipe_right = ( val? : any ) => this.event_front_up( val )
			obj.swipe_left = ( val? : any ) => this.event_front_down( val )
			return obj
		})( new $mol_touch )
	}

	/// plugins / 
	/// 	<= Meter 
	/// 	<= Touch
	plugins() {
		return [].concat( this.Meter() , this.Touch() )
	}

	/// page!index null
	page( index : any ) {
		return <any> null
	}

	/// page_visible!index true
	page_visible( index : any ) {
		return true
	}

	/// Page!index $mol_book_page 
	/// 	Sub <= page!index 
	/// 	visible <= page_visible!index
	@ $mol_mem_key()
	Page( index : any ) {
		return (( obj )=>{
			obj.Sub = () => this.page(index)
			obj.visible = () => this.page_visible(index)
			return obj
		})( new $mol_book_page )
	}

	/// Placeholder $mol_book_placeholder title <= title
	@ $mol_mem()
	Placeholder() {
		return (( obj )=>{
			obj.title = () => this.title()
			return obj
		})( new $mol_book_placeholder )
	}

} }

namespace $ { export class $mol_book_placeholder extends $mol_scroll {

	/// minimal_width 400
	minimal_width() {
		return 400
	}

	/// attr * 
	/// 	^ 
	/// 	tabindex null
	attr() {
		return ({
			...super.attr() ,
			"tabindex" :  <any> null ,
		})
	}

	/// sub / <= title
	sub() {
		return [].concat( this.title() )
	}

} }

namespace $ { export class $mol_book_page extends $mol_ghost {

	/// visible true
	visible() {
		return true
	}

	/// attr * 
	/// 	^ 
	/// 	tabindex 0 
	/// 	mol_book_page_focused <= focused 
	/// 	mol_book_page_visible <= visible
	attr() {
		return ({
			...super.attr() ,
			"tabindex" :  0 ,
			"mol_book_page_focused" :  this.focused() ,
			"mol_book_page_visible" :  this.visible() ,
		})
	}

} }

