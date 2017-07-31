namespace $ { export class $mol_text extends $mol_list {

	/// uri_base \
	uri_base() {
		return ""
	}

	/// text \
	text() {
		return ""
	}

	/// block_content!id /
	block_content( id : any ) {
		return [] as any[]
	}

	/// block_type!id \
	block_type( id : any ) {
		return ""
	}

	/// Row!id $mol_text_row 
	/// 	sub <= block_content!id 
	/// 	type <= block_type!id
	@ $mol_mem_key()
	Row( id : any ) {
		return (( obj )=>{
			obj.sub = () => this.block_content(id)
			obj.type = () => this.block_type(id)
			return obj
		})( new $mol_text_row )
	}

	/// Span!id $mol_text_span
	@ $mol_mem_key()
	Span( id : any ) {
		return (( obj )=>{
			return obj
		})( new $mol_text_span )
	}

	/// Link!id $mol_text_link
	@ $mol_mem_key()
	Link( id : any ) {
		return (( obj )=>{
			return obj
		})( new $mol_text_link )
	}

	/// Image!id $mol_text_image
	@ $mol_mem_key()
	Image( id : any ) {
		return (( obj )=>{
			return obj
		})( new $mol_text_image )
	}

	/// header_level!id 0
	header_level( id : any ) {
		return 0
	}

	/// header_content!id /
	header_content( id : any ) {
		return [] as any[]
	}

	/// Header!id $mol_text_header 
	/// 	level <= header_level!id 
	/// 	content <= header_content!id
	@ $mol_mem_key()
	Header( id : any ) {
		return (( obj )=>{
			obj.level = () => this.header_level(id)
			obj.content = () => this.header_content(id)
			return obj
		})( new $mol_text_header )
	}

	/// table_head_cells!id /
	table_head_cells( id : any ) {
		return [] as any[]
	}

	/// table_rows!id /
	table_rows( id : any ) {
		return [] as any[]
	}

	/// Table!id $mol_grid 
	/// 	head_cells <= table_head_cells!id 
	/// 	rows <= table_rows!id
	@ $mol_mem_key()
	Table( id : any ) {
		return (( obj )=>{
			obj.head_cells = () => this.table_head_cells(id)
			obj.rows = () => this.table_rows(id)
			return obj
		})( new $mol_grid )
	}

	/// table_cells!id /
	table_cells( id : any ) {
		return [] as any[]
	}

	/// Table_row!id $mol_grid_row cells <= table_cells!id
	@ $mol_mem_key()
	Table_row( id : any ) {
		return (( obj )=>{
			obj.cells = () => this.table_cells(id)
			return obj
		})( new $mol_grid_row )
	}

	/// table_cell_content!id /
	table_cell_content( id : any ) {
		return [] as any[]
	}

	/// Table_cell!id $mol_grid_cell sub <= table_cell_content!id
	@ $mol_mem_key()
	Table_cell( id : any ) {
		return (( obj )=>{
			obj.sub = () => this.table_cell_content(id)
			return obj
		})( new $mol_grid_cell )
	}

	/// Table_cell_head!id $mol_float sub <= table_cell_content!id
	@ $mol_mem_key()
	Table_cell_head( id : any ) {
		return (( obj )=>{
			obj.sub = () => this.table_cell_content(id)
			return obj
		})( new $mol_float )
	}

} }

namespace $ { export class $mol_text_row extends $mol_view {

	/// minimal_height 40
	minimal_height() {
		return 40
	}

	/// type \
	type() {
		return ""
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_type <= type
	attr() {
		return ({
			...super.attr() ,
			"mol_text_type" :  this.type() ,
		})
	}

} }

namespace $ { export class $mol_text_header extends $mol_view {

	/// dom_name \h
	dom_name() {
		return "h"
	}

	/// minimal_height 50
	minimal_height() {
		return 50
	}

	/// level?val 0
	@ $mol_mem()
	level( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 0
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_header_level <= level?val
	attr() {
		return ({
			...super.attr() ,
			"mol_text_header_level" :  this.level() ,
		})
	}

	/// content /
	content() {
		return [] as any[]
	}

	/// sub <= content
	sub() {
		return this.content()
	}

} }

namespace $ { export class $mol_text_span extends $mol_view {

	/// dom_name \span
	dom_name() {
		return "span"
	}

	/// type?val \
	@ $mol_mem()
	type( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_type <= type?val
	attr() {
		return ({
			...super.attr() ,
			"mol_text_type" :  this.type() ,
		})
	}

	/// content?val /
	@ $mol_mem()
	content( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [] as any[]
	}

	/// sub <= content?val
	sub() {
		return this.content()
	}

} }

namespace $ { export class $mol_text_link extends $mol_view {

	/// dom_name \a
	dom_name() {
		return "a"
	}

	/// type?val \
	@ $mol_mem()
	type( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// link?val \
	@ $mol_mem()
	link( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_type <= type?val 
	/// 	href <= link?val
	attr() {
		return ({
			...super.attr() ,
			"mol_text_type" :  this.type() ,
			"href" :  this.link() ,
		})
	}

	/// content?val /
	@ $mol_mem()
	content( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [] as any[]
	}

	/// sub <= content?val
	sub() {
		return this.content()
	}

} }

namespace $ { export class $mol_text_image extends $mol_view {

	/// dom_name \object
	dom_name() {
		return "object"
	}

	/// type?val \
	@ $mol_mem()
	type( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// link?val \
	@ $mol_mem()
	link( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// attr * 
	/// 	^ 
	/// 	mol_text_type <= type?val 
	/// 	data <= link?val
	attr() {
		return ({
			...super.attr() ,
			"mol_text_type" :  this.type() ,
			"data" :  this.link() ,
		})
	}

	/// title?val \
	@ $mol_mem()
	title( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : ""
	}

	/// sub / <= title?val
	sub() {
		return [].concat( this.title() )
	}

} }

