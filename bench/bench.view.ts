namespace $.$mol {
	
	export class $mol_bench extends $.$mol_bench {
		
		@ $mol_mem()
		col_sort( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'sort' ) , next )
		}
		
		@ $mol_mem()
		result_sorted() {
			const prev = this.result()
			const col = this.col_sort()
			if( !col ) return prev
			
			const next : { [ sample : string ] : { [ step : string ] : any } } = {}
			
			const keys = Object.keys( prev )
			keys.sort( ( a , b )=> this.result_number({ row : [ '' , a ] , col }) - this.result_number({ row : [ '' , b ] , col }) )
			keys.forEach( row => next[ row ] = prev[ row ] )
			
			return next
		}
		
		result_value( id : { row : string[] , col : string } ) {
			return this.result()[ id.row[ id.row.length - 1 ] ][ id.col ]
		}
		
		result_number( id : { row : string[] , col : string } ) {
			return parseInt( this.result_value( id ) , 10 )
		}
		
		@ $mol_mem_key()
		result_value_max( col : string ) {
			let max = 0
			
			const rows = this.row_ids()
			rows.forEach( row => {
				const numb = this.result_number({ row , col })
				if( numb > max ) max = numb
			} )
			
			return max
		}
		
		result_portion( id : { row : string[] , col : string } ) {
			return this.result_number( id ) / this.result_value_max( id.col )
		}
		
		col_head_label( col : string ) {
			return [ col ]
		}
		
		event_sort_toggle( col : string , next? : Event ) {
			this.col_sort( col )
		}
		
		@ $mol_mem_key()
		col_type( col : string ) {
			if( col === this.hierarchy_col() ) return 'branch'
			
			const rowFirst = this.row_id( 0 )
			const val = this.record( rowFirst[ rowFirst.length - 1 ] )[ col ]
			if( !isNaN( parseFloat( val ) ) ) return 'number'
			
			return 'text'
		}
		
		cell_content_number( id : { row : string[] , col : string } ) {
			return [
				this.result_value( id ) ,
				( this.col_sort() === id.col )
					? this.Result_portion( id )
					: null
			]
		}
		
		col_head_content( col : string ) {
			return [].concat(
				this.col_head_label( col ) ,
				( this.col_sort() === col )
					? this.Col_head_sort( col )
					: null
			)
		}
		
	}
	
}
