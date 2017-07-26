namespace $.$mol {

	export class $mol_ghost extends $.$mol_ghost {
		
		@ $mol_mem()
		dom_node() {
			const node = this.Sub().dom_node()

			$mol_dom_render_attributes( node , this.attr_static() )
			$mol_dom_render_events( node , this.event() )
			$mol_dom_render_events_async( node , this.event_async() )

			return node
		}
		
		render() {
			this.Sub().render()
			super.render()
		}
		
	}

}
