import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //重複顯示與ngfor
  name="";
  price="";
  rank:number;


  cpu=[
    { date:new Date(),name:"123",price:"9811",rank:1  },
    { date:new Date(),name:"123",price:"9811",rank:2  },
    { date:new Date(),name:"123",price:"9811",rank:3  },
  ];

  /*insert(){
    this.cpu.push({ name:this.name,price:this.price,rank:this.rank  });
  }

  delete(i:number){
    this.cpu.splice(i,1);
  }*/

  //ngSwitch
  // edit = false;
  // fun=[
  //   {name:"台灣",precent:"100",rank:0},
  //   {name:"美國",precent:"700",rank:3},
  //   {name:"倫敦",precent:"900",rank:5}
  // ];
}
