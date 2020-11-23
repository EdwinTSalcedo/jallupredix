import { Component } from '@angular/core';


@Component({

	selector: 'acerca',
	templateUrl: '../views/acerca.html'

})
export class AcercaComponent{
	public titulo: string;



	constructor(){
		this.titulo = 'Acerca de este Proyecto';
	}


	ngOnInit(){
		console.log('Se ha cargado la pagina principal');
	}
}