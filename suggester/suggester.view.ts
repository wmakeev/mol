namespace $.$mol {

	export class $mol_suggester extends $.$mol_suggester {

		@ $mol_mem()
		contextSub( ) {
			var context = this.context()
			var subContext = Object.create( context )
			subContext.$mol_viewer_heightLimit = ()=> context.$mol_viewer_heightLimit() / 3
			return subContext
		}

		suggestRows() {
			return this.suggests().map( ( suggest , index )=> this.rower( index ) )
		}

		childs() {
			return [
				this.stringer() ,
				( this.focused() && this.suggests().length )
					? this.lister()
					: null
			]
		}

		eventRowerSelected( index : number , next? : MouseEvent ) {
			this.value( this.suggests()[ index ] );
		}

		@ $mol_mem()
		selectedRow( next? : any ) {
			this.value()
			return ( next !== void 0 ) ? next : 0
		}

		eventPress( next? : KeyboardEvent ) {
			const keyCodes = $mol_keyboard_code;
			let selectedRow = this.selectedRow()
			let suggestsLength = this.lister().childsVisible().length
			let isSelectedKey = next.keyCode === keyCodes.enter || next.keyCode === keyCodes.right
			let spaceKey = ( next.keyCode === keyCodes.space ) ? ' ' : ''
			let upKey = next.keyCode === keyCodes.up
			let downKey = next.keyCode === keyCodes.down

			if( isSelectedKey || spaceKey ) {

				if( !selectedRow ) return

				if( spaceKey ) next.preventDefault()

				this.value( this.suggests()[ selectedRow - 1 ] + spaceKey )
			}

			if( downKey ) {
				selectedRow = selectedRow === suggestsLength ? 0 : selectedRow + 1
				this.selectedRow( selectedRow )
			}

			if( upKey ) {
				selectedRow = selectedRow === 0 ? suggestsLength : selectedRow - 1
				this.selectedRow( selectedRow )
			}

		}

		focused() {
			return $mol_viewer_selection.focused().indexOf( this.DOMNode() ) !== -1
		}

		selected( index : number ) {
			return index === ( this.selectedRow() - 1 )
		}

		suggest( index : number ) {
			return this.suggests()[ index ]
		}
	}
}
