import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';


@Component({
	selector: 'usuario-editar',
	templateUrl: '../views/usuario-editar-contraseña.html',
	
})

export class UsuarioEditarContraseñaComponent{
	public titulo:string;
	


	constructor(
		

		){
		this.titulo='Editar Contraseña';
		

	}
	ngOnInit(){
		console.log('El usuario-adicionar.component.ts cargado...');
	}
	onSubmit(){
		console.log(this.titulo);
	
		
	}


}