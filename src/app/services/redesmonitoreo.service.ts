import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Dispositivo } from '../models/dispositivo';
import { GLOBAL } from './global';

// Sin ;
@Injectable()

export class RedesMonitoreoService{
	public url:string;

	constructor(
		public _http: Http
		){
		this.url = GLOBAL.url;
	}

	getRedes(){
		// return "Texto Desde El Servicio";
		
		return this._http.get(this.url+'redes-monitoreo').map( res => res.json());
	}
	


}