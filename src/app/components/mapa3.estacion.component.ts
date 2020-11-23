import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { AgmCoreModule, MapsAPILoader} from '@agm/core';
import {LatLngBounds, LatLngBoundsLiteral, MapTypeStyle} from '@agm/core';

import { Router,ActivatedRoute,Params } from '@angular/router';
import {Http} from "@angular/http";
import {EstacionService} from '../services/estacion.service';
import { Estacion } from '../models/estacion';
import { GLOBAL } from '../services/global';

@Component({
	
	selector: 'mapass',
	templateUrl: '../views/mapa3-estacion.html',
	styles: [`
	agm-map {
		height: 420px;
	}
	@media (min-width: 1400px) {
		agm-map {
			height: 500px;
		}
	}
	@media (min-width: 1600px) {
		agm-map {
			height: 650px;
		}
	}
	@media (min-width: 1900px) {
		agm-map {
			height: 750px;
		}
	}

	`]
	,
	providers: [EstacionService]

})

export class Mapa3EstacionComponent{
	public titulo: string;
	public estaciones: Estacion[];
	public data: any[];
	public markers: marker[] = [];

	lat: number = -16.504127;
	lng: number = -68.125815;
	mlat: number=-16.504127;;
	mlng: number=-68.125815;;
	zoom:number = 14;
	label:string = 'E';
	type:string = 'terrain';

	constructor(
		private _estacionService: EstacionService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _http: Http
		){
		this.titulo = 'Pagina Principal';
	}


	ngOnInit(){
		console.log('Se ha cargado la pagina principal');
		this.getEstacionesRed();
		this._http.get("http://localhost/curso-angular4-backend/index.php/red1")
		.subscribe((data)=> {
			setTimeout(()=> {
				this.data = data.json();
			}, 300);
		});
		

		console.log(">>"+this.markers);
	}

	getEstacionesRed(){
		this._estacionService.getEstacionesRed3().subscribe(

			result => {
				

				if(result.code !=200){
					console.log(result);
				}else{
					this.estaciones = result.data;
					console.log("el data va aqui");
					console.log("tamaño res"+result.data.length);
					for (var i = 0; i < result.data.length; i++) {
						this.markers.push({
							'reds':result.data[i].redesmonitoreo,
							'gprs':result.data[i].gprs,
							'tipoestacion':result.data[i].tipoestacion,
							'lat':Number(result.data[i].latitud),
							'lng':Number(result.data[i].longitud)

						}
						);
					}


				}
			},
			error => {
				console.log(<any>error);
			});
		console.log("Marcadores");
		
	}


}
interface marker {
	reds:string;
	lat: number;
	lng: number;
	gprs:string;
	tipoestacion:string;

}