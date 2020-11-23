import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import {Http} from "@angular/http";


declare var jquery:any;
declare var $:any;


@Component({
	selector: 'usuarios-editar',
	templateUrl: '../views/usuarios-tabla-editar.html',
	providers: [UsuarioService]
	
})




export class UsuariosTablaEditarComponent implements OnInit{

	
	@Output()
	cambioTarea : EventEmitter<number> = new EventEmitter();


	public titulo:string;
	
	public usuarios: Usuario[];
	public data: any[];
	public confirmado;

	constructor(
		private _usuarioService: UsuarioService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _http: Http

		){
		this.titulo='Gestión de Usuarios';
		

	}
	ngOnInit(){
		console.log('El usuarios-tabla-editar.component.ts cargado...');

		this.getUsuarios();
		this._http.get("http://localhost/curso-angular4-backend/index.php/usuarios")
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
	borrarConfirm(id){
		var r= confirm("Esta seguro?");
		if(r){
			this.confirmado = id;
			this.onDeleteUsuario(id);
		}
		else{
			this.confirmado = null;
		}

	}

	onDeleteUsuario(id){
		this._usuarioService.deleteUsuario(id).subscribe(
			response => {
				if (response.code == 200) {
					console.log("usuario borrado");
					this.getUsuarios();
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
		this._http.get("http://localhost/curso-angular4-backend/index.php/usuarios")
		.subscribe((data)=> {
			setTimeout(()=> {
				this.data = data.json();
			}, 1000);
		});

		$('#datatables').DataTable();
		console.log("pagina actualizada");

		
	}
	getUsuarios(){
		this._usuarioService.getUsuarios().subscribe(

			result => {
				// console.log(result);
				// this.productos = result.data;

				if(result.code !=200){
					console.log(result);
				}else{
					this.usuarios = result.data
				}
			},
			error => {
				console.log(<any>error);
			});
	}

}