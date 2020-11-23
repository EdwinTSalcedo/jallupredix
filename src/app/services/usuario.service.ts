import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/usuario';
import { GLOBAL } from './global';

// Sin ;
@Injectable()

export class UsuarioService{
	public url:string;

	constructor(
		public _http: Http
		){
		this.url = GLOBAL.url;
	}

	getUsuarios(){
		// return "Texto Desde El Servicio";
		
		return this._http.get(this.url+'usuarios').map( res => res.json());
	}
	addUsuario(usuario: Usuario){
		let json = JSON.stringify(usuario);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'usuarios',params,{ headers: headers})

			.map(res => res.json());
	}

	getUsuario(id){
		console.log("retornar id");
		return this._http.get(this.url+'usuario/'+id).map( res => res.json());
	}

	editUsuario(id,usuario:Usuario){
		let json = JSON.stringify(usuario);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'editar-usuario/'+id,params,{ headers: headers})

			.map(res => res.json());
	}
	
	deleteUsuario(id){
		return this._http.get(this.url+'eliminar-usuario/'+id).map(res => res.json());
	}


}