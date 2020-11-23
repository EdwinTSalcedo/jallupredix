import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service';
import { Dispositivo } from '../models/dispositivo';
import {Http} from "@angular/http";
import { GLOBAL } from '../services/global';
@Component({
  selector: 'grafica-mensual',
  templateUrl: '../views/grafica-mensual.html',
  providers: [DispositivoService]
  

})

export class GraficaMensualComponent implements OnInit{
  public titulo:string;  
  public dispositivos: Dispositivo[];
  public data: any[];
  public interfacedispositivos: interfacedispositivo[] = [];

  // lineChart
  public num:Array<number>=[];
  // public num:Array<number>=[];

  // public lineChartData:Array<any> = [ {data: this.num, label: 'Precipitacion'}, ];
  public lineChartData:Array<any> = [];

  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _dispositivoService: DispositivoService,
    private _http: Http,
    

    ){



    this.lineChartData = [ {data: this.num, label: ''}, ];


    
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


  }  

  getDispositivos(){

    this._dispositivoService.getDispositivos().subscribe(

      result => {


        if(result.code !=200){
          console.log("error");
          console.log(result);
        }else{
          this.dispositivos = result.data;
       
          console.log(this.dispositivos.length);
          for (var i = 0; i < this.dispositivos.length; ++i) {
            this.num[i]=Number(this.dispositivos[i].temperatura);
          }
          
        }
      },
      error => {
        console.log(<any>error);
      });
  }

  
  


  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

interface interfacedispositivo {
  humedad:number;
  

}