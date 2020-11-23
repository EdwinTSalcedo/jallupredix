import { Component } from '@angular/core';

@Component({
  selector: 'line-chart-demo',
  templateUrl: '../views/grafica-anual.html'
})
export class GraficaAnualComponent {
  // lineChart
  public lineChartData:Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40 , 55, 58, 70, 60, 85, 11,30,31,52,13,12,55,86,97], label: ''},
 
  
  ];
  public lineChartLabels:Array<any> = ['1997', '1998', '1999', '2000', '2001', '2002', '2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
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