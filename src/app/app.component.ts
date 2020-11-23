import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { RedesMonitoreoService } from './services/redesmonitoreo.service';
import { RedesMonitoreo } from './models/redesmonitoreo';
import {Http} from "@angular/http";



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [RedesMonitoreoService]
})
export class AppComponent implements OnInit {

	public titulo:string;
	public redesmonitoreo: RedesMonitoreo[];
	public data: any[];


	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _redesmonitoreoService: RedesMonitoreoService,
		private _http: Http
		){
		this.titulo='Redes Monitoreo';

	}
	ngOnInit(){
		console.log('El componente ha sido cargado...');

		this.getRedes();
		this._http.get("http://localhost/curso-angular4-backend/index.php/redes-monitoreo")
		.subscribe((data)=> {
			setTimeout(()=> {
				this.data = data.json();
			}, 1000);
		});

		
	}

	getRedes(){
		this._redesmonitoreoService.getRedes().subscribe(

			result => {
				console.log(result);
				this.redesmonitoreo = result.data;

				if(result.code !=200){
					console.log(result);
				}else{
					this.redesmonitoreo = result.data
				}
			},
			error => {
				console.log(<any>error);
			});
	}

}

