import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';

import { AgmCoreModule, MapsAPILoader} from '@agm/core';
import {LatLngBounds, LatLngBoundsLiteral, MapTypeStyle} from '@agm/core';

import {EstacionService} from '../services/estacion.service';
import { Estacion } from '../models/estacion';
import { GLOBAL } from '../services/global';

declare var jquery:any;
declare var $:any;


@Component({

    selector: 'estacion-adicionar',
    templateUrl: '../views/estacion-adicionar.html',
    styles: [`
    agm-map {
        height: 330px;
    }
    @media (min-width: 1400px) {
        agm-map {
            height: 380px;
        }
    }
    @media (min-width: 1600px) {
        agm-map {

            height: 530px;
        }
    }
    @media (min-width: 1900px) {
        agm-map {

            height: 630px;
        }
    }

    `],
    providers: [EstacionService]

})

export class EstacionAdicionarComponent{
    public titulo: string;
    public estacion: Estacion;

   lat: number = -16.504127;
    lng: number = -68.125815;
    mlat: number;
    mlng: number;
    zoom:number = 14;
    label:string = 'E';
    type:string = 'hybrid';


    constructor(
        private _estacionService: EstacionService,
        private _route: ActivatedRoute,
        private _router: Router
        ){
        this.titulo='Adicionar Estación';
        this.estacion=new Estacion(0,0,'','','','',0,'','');
    }


    ngOnInit(){

        $('.datepicker').datetimepicker({
            format: 'DD/MM/YYYY',
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
        console.log("El date picker ha sido cargado");

    }
    onSubmit(){

        
        // alert($('.fi').datetimepicker().val());
        // alert($('.fr').datetimepicker().val());

        this.estacion.fechainstalacion=$('.fi').datetimepicker().val();
        this.estacion.fechareposicion=$('.fr').datetimepicker().val();
        

        
        this.estacion.latitud=""+this.mlat;
        this.estacion.longitud=""+this.mlng;

        
        this._estacionService.addEstacion(this.estacion).subscribe(
            response => {
                if(response.code==200)
                {
                    this._router.navigate(['/estaciones']);
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

    mapClicked($event) {
        console.log($event.coords.lat);
        console.log($event.coords.lng);
        this.mlat=$event.coords.lat;
        this.mlng=$event.coords.lng;


    }


}




