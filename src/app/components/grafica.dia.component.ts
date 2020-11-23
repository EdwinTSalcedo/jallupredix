import { Component } from '@angular/core';

@Component({
  selector: 'line-chart-demo',
  templateUrl: '../views/grafica-dia.html'
})
export class GraficaDiaComponent {
  // lineChart
  public lineChartData:Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40 , 55, 58, 70, 60, 85,65,75,], label: ''},
 
  
  ];
  public lineChartLabels:Array<any> = ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'

  ];
  public lineChartOptions:any = {
    responsive: true
  };


  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
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