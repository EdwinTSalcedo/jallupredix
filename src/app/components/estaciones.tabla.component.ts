import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { EstacionService } from '../services/estacion.service';
import { Estacion } from '../models/estacion';
import {Http} from "@angular/http";


declare var jquery:any;
declare var $:any;

@Component({
	selector: 'usuarios-editar',
	templateUrl: '../views/estaciones-tabla.html',
	providers: [EstacionService]
	
})

export class EstacionesTablaComponent implements OnInit{
	public titulo:string;

	public estaciones: Estacion[];
	public data: any[];
	public confirmado;

	constructor(
		private _estacionService: EstacionService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _http: Http
		){
		this.titulo='Gestión de Estaciones';

	}
	ngOnInit(){
		console.log('El estaciones.tabla.component.ts cargado...');


		this.getEstaciones();
		this._http.get("http://localhost/curso-angular4-backend/index.php/estaciones")
		.subscribe((data)=> {
			setTimeout(()=> {
				this.data = data.json();
			}, 1000);
		});
		setTimeout(function (){
			$(function (){
				// alert("Set time out");
				$('#datatables').DataTable({

					// dom: 'Blfrtip',
					dom: 'lBfrtip',
					

					"pagingType": "full_numbers",
					"lengthMenu": [[10, 25, 50, -1], [10, 25, 50,100, "All"]],
					responsive: true,
					language: {
						search: "_INPUT_",
						searchPlaceholder: "Buscar",
						emptyTable:     "Tabla sin registros",
						zeroRecords:    "No se encontro eso que estabas buscando, prueba otra vez",
					},
					buttons: [
					// 'copy', 'csv', 'excel', 'pdf', 'print'
					{
						extend:'pdfHtml5',
						text: 'pdf',
						titleAttr: 'Exportar a pdf',
						className: 'btn btn-primary'
					},
					{
						extend:'csvHtml5',
						text: 'csv',
						titleAttr: 'Exportar a CSV',
						className: 'btn btn-primary'
					},
					{
						extend:'excelHtml5',
						text: 'excel',
						titleAttr: 'Exportar a excel',
						className: 'btn btn-primary'
					},
					{
						extend:'print',
						text: 'imprimir',
						titleAttr: 'Mandar a impresion',
						className: 'btn btn-primary'
					},


					],

				});

			});
		},300);

		
	}
	getEstaciones(){
		this._estacionService.getEstaciones().subscribe(

			result => {
				// console.log(result);
				// this.productos = result.data;

				if(result.code !=200){
					console.log(result);
				}else{
					this.estaciones = result.data
				}
			},
			error => {
				console.log(<any>error);
			});
	}

	borrarConfirm(id){
		var r= confirm("Esta seguro?");
		if(r){
			this.confirmado = id;
			this.onDeleteEstacion(id);
		}
		else{
			this.confirmado = null;
		}

	}

	onDeleteEstacion(id){
		this._estacionService.deleteEstacion(id).subscribe(
			response => {
				if (response.code == 200) {
					console.log("estacion borrado");
					this.getEstaciones();
					console.log("llamando metodo actualizar");
					this.actualizar();

				}else{
					alert('Error al borrar usuario');	
				}
			},
			error =>{
				console.log(<any>error);
			}

			);
	}

	actualizar(){
		console.log("...entrando")
		this._http.get("http://localhost/curso-angular4-backend/index.php/estaciones")
		.subscribe((data)=> {
			setTimeout(()=> {
				this.data = data.json();
			}, 1000);
		});

		$('#datatables').DataTable();
		console.log("pagina actualizada");

		
	}
	
}
