import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import { GraphService } from './graph.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
    constructor (private graphService:GraphService){
        
    }
    ngOnInit(){
        this.graphService.addDots().subscribe((data:number[])=>{
            
           let  data1=[];
              console.log(data1);
              data1=data;
              let pointBackgroundColors=[]; 
              let canvas = <HTMLCanvasElement> document.getElementById('myChart')
              let ctx = canvas.getContext('2d');
              let myChart = new Chart(ctx, {
                  type: 'line',
                  data: {
                      labels: ['M', 'I', 'C', 'G', 'O', 'G','I','A','N','K'],
                      datasets: [{
                          label: '# of Votes',
                          data: data1,
                          pointBackgroundColor: pointBackgroundColors
                         
                      }]
                  },
                  options: {
                      scales: {
                          yAxes: [{
                              ticks: {
                                  beginAtZero: true
                              }
                          }]
                      }
                  }
              });
          for(let i=0;i<10;i++){
            
              if (myChart.data.datasets[0].data[i] ==7) {
                pointBackgroundColors.push("#fc1d00");
            } else {
                pointBackgroundColors.push("#1400fc");
            }
            myChart.update();
        }
          })

       
        }
    }
 
    
 

