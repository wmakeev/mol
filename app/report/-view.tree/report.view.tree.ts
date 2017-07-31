namespace $ { export class $mol_app_report extends $mol_page {

	/// title @ \Pump #1337 - Technical passport
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// description \
	description() {
		return ""
	}

	/// descriptor $mol_view sub / <= description
	@ $mol_mem()
	descriptor() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.description() )
			return obj
		})( new $mol_view )
	}

	/// headCells /
	headCells() {
		return [] as any[]
	}

	/// headRower $mol_app_report_rower cells <= headCells
	@ $mol_mem()
	headRower() {
		return (( obj )=>{
			obj.cells = () => this.headCells()
			return obj
		})( new $mol_app_report_rower )
	}

	/// rows /
	rows() {
		return [] as any[]
	}

	/// tabler $mol_app_report_tabler rows / 
	/// 	<= headRower 
	/// 	<= rows
	@ $mol_mem()
	tabler() {
		return (( obj )=>{
			obj.rows = () => [].concat( this.headRower() , this.rows() )
			return obj
		})( new $mol_app_report_tabler )
	}

	/// body / 
	/// 	<= descriptor 
	/// 	<= tabler
	body() {
		return [].concat( this.descriptor() , this.tabler() )
	}

	/// rowerCells!id /
	rowerCells( id : any ) {
		return [] as any[]
	}

	/// rower!id $mol_app_report_rower cells <= rowerCells!id
	@ $mol_mem_key()
	rower( id : any ) {
		return (( obj )=>{
			obj.cells = () => this.rowerCells(id)
			return obj
		})( new $mol_app_report_rower )
	}

	/// cell_content!id null
	cell_content( id : any ) {
		return <any> null
	}

	/// cellrows!id 1
	cellrows( id : any ) {
		return 1
	}

	/// cellCols!id 1
	cellCols( id : any ) {
		return 1
	}

	/// cell!id $mol_app_report_cell 
	/// 	content <= cell_content!id 
	/// 	rows <= cellrows!id 
	/// 	cols <= cellCols!id
	@ $mol_mem_key()
	cell( id : any ) {
		return (( obj )=>{
			obj.content = () => this.cell_content(id)
			obj.rows = () => this.cellrows(id)
			obj.cols = () => this.cellCols(id)
			return obj
		})( new $mol_app_report_cell )
	}

	/// cell_value!id?val null
	@ $mol_mem_key()
	cell_value( id : any , val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// texter!id $mol_view sub / <= cell_value!id?val
	@ $mol_mem_key()
	texter( id : any ) {
		return (( obj )=>{
			obj.sub = () => [].concat( this.cell_value(id) )
			return obj
		})( new $mol_view )
	}

	/// cell_options!id *
	cell_options( id : any ) {
		return ({
		})
	}

	/// select!id $mol_select 
	/// 	value?val <=> cell_value!id?val 
	/// 	dictionary <= cell_options!id
	@ $mol_mem_key()
	select( id : any ) {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.cell_value(id , val )
			obj.dictionary = () => this.cell_options(id)
			return obj
		})( new $mol_select )
	}

	/// number!id $mol_number value?val <=> cell_value!id?val
	@ $mol_mem_key()
	number( id : any ) {
		return (( obj )=>{
			obj.value = ( val? : any ) => this.cell_value(id , val )
			return obj
		})( new $mol_number )
	}

} }

namespace $ { export class $mol_app_report_tabler extends $mol_view {

	/// dom_name \table
	dom_name() {
		return "table"
	}

	/// rows /
	rows() {
		return [] as any[]
	}

	/// sub <= rows
	sub() {
		return this.rows()
	}

} }

namespace $ { export class $mol_app_report_rower extends $mol_view {

	/// dom_name \tr
	dom_name() {
		return "tr"
	}

	/// cells /
	cells() {
		return [] as any[]
	}

	/// sub <= cells
	sub() {
		return this.cells()
	}

} }

namespace $ { export class $mol_app_report_cell extends $mol_view {

	/// dom_name \td
	dom_name() {
		return "td"
	}

	/// cols 1
	cols() {
		return 1
	}

	/// rows 1
	rows() {
		return 1
	}

	/// attr * 
	/// 	^ 
	/// 	colspan <= cols 
	/// 	rowspan <= rows
	attr() {
		return ({
			...super.attr() ,
			"colspan" :  this.cols() ,
			"rowspan" :  this.rows() ,
		})
	}

	/// content null
	content() {
		return <any> null
	}

	/// sub / <= content
	sub() {
		return [].concat( this.content() )
	}

} }

