import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Estacion } from '../models/estacion';
import { GLOBAL } from './global';

// Sin ;
@Injectable()

export class EstacionService{
	public url:string;

	constructor(
		public _http: Http
		){
		this.url = GLOBAL.url;
	}

	getEstaciones(){
		// return "Texto Desde El Servicio";
		
		return this._http.get(this.url+'estaciones').map( res => res.json());
	}
	getEstacionesRed1(){
		// return "Texto Desde El Servicio";
		
		return this._http.get(this.url+'red1').map( res => res.json());
	}
		getEstacionesRed2(){
		// return "Texto Desde El Servicio";
		
		return this._http.get(this.url+'red2').map( res => res.json());
	}
		getEstacionesRed3(){
		// return "Texto Desde El Servicio";
		
		return this._http.get(this.url+'red3').map( res => res.json());
	}

	addEstacion(estacion: Estacion){
		let json = JSON.stringify(estacion);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'estaciones',params,{ headers: headers})

			.map(res => res.json());
	}

	getEstacion(id){
		console.log("retornar id");
		return this._http.get(this.url+'estacion/'+id).map( res => res.json());
	}

	editEstacion(id,estacion:Estacion){
		let json = JSON.stringify(estacion);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'editar-estacion/'+id,params,{ headers: headers})

			.map(res => res.json());
	}
	
	deleteEstacion(id){
		return this._http.get(this.url+'eliminar-estacion/'+id).map(res => res.json());
	}


}