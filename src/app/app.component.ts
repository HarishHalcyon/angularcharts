import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
// import { Chart, registerables } from 'chart.js';
import { ChartsModule, SingleOrMultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
//   constructor(private http:HttpClient) {}
// //Bar Chart
// type = 'bar';
//          options = {
//             responsive: true,
//             maintainAspectRatio: true,
//             scales: {
//                 yAxes : [{
//                     ticks : {
//                         max : 100,    
//                         min : 0
//                     }
//                 }]
//             }
//         };
//         data:any;
//         barchart:any;
//         ngOnInit(){
//             //web api call
//             this.http.get('http://localhost/chartjs.php').subscribe(data => {
//                 this.barchart = data;
                
               
//                 this.data = {
//                     labels: this.barchart[0], //months
//                     datasets: [{
//                     label: "Angular 11",
//                     data: this.barchart[1][0],
//                     backgroundColor: "#f38b4a",
//                     },{
//                         label: "Angular 12",
//                         data: this.barchart[1][1],
//                         backgroundColor: "#6970d5",
//                     }]
//                 };
      
                
//         });
// }

// 2 try
// constructor() { }
// public barChartOptions = {
//   scaleShowVerticalLines: false,
//   responsive: true
// };
// public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
// public barChartType = 'bar';
// public barChartLegend = true;
// public barChartData = [
//   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
//   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
// ];


//pie
users = [
  { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User', data:20 },
  { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin', data:50 },
  { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin', data:90 },
  { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' , data:60}
  //,{ firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' , data:10}
];
// public pieChartLabels = this.users.forEach(element => {
//   return element.firstName
// });
//   public pieChartData = this.users.forEach(element => {
//     return element.data
//   });
public datatable = [
  {
    Columns: 'Sales Q1',
    data : 10
  },
  {
    Columns: 'Sales Q2',
    data : 20
  },
  {
    Columns: 'Sales Q3',
    data : 30
  },
  {
    Columns: 'Sales Q4',
    data : 40
  }
]



public colums: any = []; 
public data: any = []; 
public pieChartLabels = this.colums;
public pieChartData  = this.data;
//public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4','Sales null'];
// public pieChartData = [120, 150, 180, 90];

//public  temp = 
    //public pieChartData : SingleOrMultiDataSet = this.arr;
  public pieChartType:ChartType = 'pie';

  getdata() {
    this.datatable.forEach(element => {
      this.colums.push(element.Columns)
      this.data.push(element.data)
    
        });
  }
  constructor() { }
  ngOnInit() {
    this.getdata()
    console.log(this.pieChartLabels)
    console.log(this.pieChartData)
  }
  
  

//
}
