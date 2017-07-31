declare var ymaps : any

namespace $.$mol {

	export class $mol_map_yandex extends $.$mol_map_yandex {

		static api() {
			return $mol_import.script( `https://api-maps.yandex.ru/2.1/?lang=${ $mol_locale.lang() }` ).ymaps
		}

		@ $mol_mem()
		api( next? : any , force? : $mol_atom_force ) : any {
			
			const ymaps = $mol_map_yandex.api()

			if( !ymaps.Map ) {
				ymaps.ready( ()=> this.api( undefined , $mol_atom_force ) )
				throw new $mol_atom_wait( 'Loading maps api modules...' )
			}

			const api = new ymaps.Map( this.dom_node() , {
				center : [ 0 , 0 ] ,
				zoom : 0 ,
			} )

			api.controls.remove( 'fullscreenControl' )
			
			api.events.add( [ 'actionend' ] , ( event : any )=> this.update( event ) )

			return api
		}

		update( event? : any ) {
			this.zoom( this.api().getZoom() , $mol_atom_force )
			this.center( this.api().getCenter(), $mol_atom_force )
		}

		render() {
			this.api().setCenter( this.center() , this.zoom() )
			super.render()
		}

	}

}