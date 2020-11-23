import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service';
import { Dispositivo } from '../models/dispositivo';
import {Http} from "@angular/http";


declare var jquery:any;
declare var $:any;

@Component({
	selector: 'estacion-detalles',
	templateUrl: '../views/estacion-detalles-tabla.html',
	providers: [DispositivoService]
	
})

export class EstacionesDetallesTablaComponent implements OnInit{
	
	public titulo:string;
	
	public dispositivos: Dispositivo[];
	public data: any[];
	public confirmado;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _dispositivoService: DispositivoService,
		private _http: Http

		){
		this.titulo='Registro del Dispositivo';
		

	}
	ngOnInit(){
		console.log('El componente ha sido cargado...');

		this.getDispositivos();
		this._http.get("http://localhost/curso-angular4-backend/index.php/dispositivo")
		.subscribe((data)=> {
			setTimeout(()=> {
				this.data = data.json();
			}, 400);
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
	

	getDispositivos(){
		this._dispositivoService.getDispositivos().subscribe(

			result => {
				// console.log(result);
				// this.productos = result.data;

				if(result.code !=200){
					console.log(result);
				}else{
					this.dispositivos = result.data
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
		this._dispositivoService.deleteDispositivo(id).subscribe(
			response => {
				if (response.code == 200) {
					console.log("estacion borrado");
					this.getDispositivos();
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
		this._http.get("http://localhost/curso-angular4-backend/index.php/dispositivo")
		.subscribe((data)=> {
			setTimeout(()=> {
				this.data = data.json();
			}, 1000);
		});

		$('#datatables').DataTable();
		console.log("pagina actualizada");

		
	}

}
