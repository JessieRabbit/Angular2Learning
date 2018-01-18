import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/Rx'

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent {

  // api串接
  // data: any;
  //  constructor(private http: Http){

  //  }

  //  ngOnInit() {
  //    this.http.get('api/xxx/xxx').map(res=>res.json()).subscribe(
  //      data =>{
  //       this.data=data;
  //       console.log("http來的");
  //      })
  //  }
  datas = [
    { text: '2' },
    { text: '3' },
    { text: '4' },
    { text: '5' },
    { text: '6' },

  ];

}
