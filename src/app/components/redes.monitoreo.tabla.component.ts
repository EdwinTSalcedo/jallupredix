import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';


@Component({
	selector: 'usuarios-editar',
	templateUrl: '../views/redes-monitoreo-tabla.html',
	
})

export class RedesMonitoreoTablaComponent{
	public titulo:string;
	


	constructor(
		

		){
		this.titulo='Redes de Monitoreo';
		

	}
	ngOnInit(){
		console.log('El redes.monitoreo.tabla.ts cargado...');
	}
	onSubmit(){
		console.log(this.titulo);
	
		
	}


}