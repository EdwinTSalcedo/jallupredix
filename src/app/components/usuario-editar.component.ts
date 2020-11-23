import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

import {UsuarioService} from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import { GLOBAL } from '../services/global';

@Component({
	selector: 'usuario-editar',
	templateUrl: '../views/usuario-adicionar.html',
	providers: [UsuarioService]
})

export class UsuarioEditarComponent{
	public titulo:string;
	public usuario: Usuario;

	constructor(
		private _usuarioService: UsuarioService,
		private _route: ActivatedRoute,
		private _router: Router
		){
		this.titulo='Editar Perfil';
		this.usuario = new Usuario(0,'','','',0,'');
		
	}
	ngOnInit(){
		console.log('El usuario-adicionar.component.ts cargado...');
		this.getUsuario();
	}


	onSubmit(){
		console.log(this.usuario);		
			this.actualizarUsuario();		
	}

	actualizarUsuario(){

		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			// Peticion AJAX

			this._usuarioService.editUsuario(id, this.usuario).subscribe(

				response =>  {
					// if(response['code']  == 200){	
						if(response.code  == 200){	
							this._router.navigate(['/editar-usuarios']);
							console.log("se adiciono y tabla de nuevo");
						}else{
							console.log(response);
							console.log("solo add");
						}
					},	
					error => {
						console.log(<any>error);
					}

					);
		});
	}
	getUsuario(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			// alert(id);
			this._usuarioService.getUsuario(id).subscribe(
				response => {
					if(response.code==200){
						this.usuario = response.data;
					}else{
						this._router.navigate(['/editar-usuarios']);
					}
				},
				error => {
					console.log(<any>error);
				}
				);
		});
	}


}