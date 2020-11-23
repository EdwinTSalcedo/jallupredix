import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

import {UsuarioService} from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import { GLOBAL } from '../services/global';

declare var jquery:any;
declare var $:any;

@Component({
	selector: 'usuario-adicionar',
	templateUrl: '../views/usuario-adicionar.html',
	providers: [UsuarioService]
	
})

export class UsuarioAdicionarComponent{
	public titulo:string;
	public usuario: Usuario;
	

	constructor(		
		private _usuarioService: UsuarioService,
		private _route: ActivatedRoute,
		private _router: Router

		){
		this.titulo='Adicionar Usuario';
		// id,empresa,nombre,apellido,telefono,grupousuario
		this.usuario = new Usuario(0,'','','',0,'');
		// this.producto =  new Producto(0,'','',0,'');

	}
	ngOnInit(){
		console.log('El componente ha sido cargado...');

		

	}
	onSubmit(){
		
		
		this._usuarioService.addUsuario(this.usuario).subscribe(
			response => {
				if(response.code==200)
				{
					this._router.navigate(['/editar-usuarios']);
				}
				else{
					console.log(response);
				}
			},
			error =>{
				console.log(<any>error);
			}
			)	
		
	}	


}