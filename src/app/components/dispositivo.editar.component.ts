import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

import {DispositivoService} from '../services/dispositivo.service';
import { Dispositivo } from '../models/dispositivo';
import { GLOBAL } from '../services/global';

declare var jquery:any;
declare var $:any;

@Component({
    selector: 'dispositivo-adicionar',
    templateUrl: '../views/dispositivo-adicionar.html',
    providers: [DispositivoService]
    
})

export class DispositivoEditarComponent{
    public titulo:string;
    public dispositivo: Dispositivo;
    

    constructor(        
        private _dispositivoService: DispositivoService,
        private _route: ActivatedRoute,
        private _router: Router

        ){
        this.titulo='Editar Registro';
        this.dispositivo = new Dispositivo(0,0,'','','','','',0);
        

    }
    ngOnInit(){
        console.log('El componente ha sido cargado...');
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
        
        this.getDispositivo();

    }

    // Obtener dispositivo
    getDispositivo(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            // alert(id);
            this._dispositivoService.getDispositivo(id).subscribe(
                response => {
                    if(response.code==200){
                        this.dispositivo = response.data;

                        // Setear

                        


                    }else{
                        this._router.navigate(['/estaciones']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
                );
        });


    }
    onSubmit(){

        this.actualizarDispositivo();
    }
    actualizarDispositivo(){
        this.dispositivo.horafecha=$('.hf').datetimepicker().val();
        
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            // Peticion AJAX

            this._dispositivoService.editDispositivo(id, this.dispositivo).subscribe(

                response =>  {
                    // if(response['code']  == 200){    
                        if(response.code  == 200){    
                            this._router.navigate(['/estacion']);
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




}