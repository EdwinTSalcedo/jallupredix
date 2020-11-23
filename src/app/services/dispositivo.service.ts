import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Dispositivo } from '../models/dispositivo';
import { GLOBAL } from './global';

// Sin ;
@Injectable()

export class DispositivoService{
	public url:string;

	constructor(
		public _http: Http
		){
		this.url = GLOBAL.url;
	}

	getDispositivos(){
		// return "Texto Desde El Servicio";
		
		console.log("Devolviendo desde el service");
		
		return this._http.get(this.url+'dispositivo').map( res => res.json());
	}
	addDispositivo(dispositivo: Dispositivo){
		let json = JSON.stringify(dispositivo);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'dispositivo',params,{ headers: headers})

		.map(res => res.json());
	}

	getDispositivo(id){
		console.log("retornar id");
		return this._http.get(this.url+'dispositivo/'+id).map( res => res.json());
	}

	editDispositivo(id,dispositivo:Dispositivo){
		let json = JSON.stringify(dispositivo);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'editar-dispositivo/'+id,params,{ headers: headers})

		.map(res => res.json());
	}
	
	deleteDispositivo(id){
		return this._http.get(this.url+'eliminar-dispositivo/'+id).map(res => res.json());
	}


}