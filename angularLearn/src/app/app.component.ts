import { BookService } from './book/book.service';
import { IBook } from './book/book';
import { Component , OnInit} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    console.log('init');
  }
  // ngOnChanges(){
  //   console.log('new change detected');
  // }
  title = 'app';
  rabbit = 30;

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

  dateString=new Date();
  Description="123456789010223423224243442";

  showMessage:string="test";
  onNotifyClicked(message:string):void{
    this.showMessage=message;
  }

  books:IBook[];
  // constructor(private _bookService:BookService){
  //   this.books = _bookService.getBook();
  // }

  //此註解掉是沒問題的程式 因constructor只能有一個
  /*errorMessage:string;
  constructor(private _bookService:BookService){}
  ngOnInit(){
    this.getBooks()
  }

  getBooks(){
    this._bookService.getBook()
    .subscribe(
      books => this.books=books,
      error => this.errorMessage = <any>error
    );
  }*/

  //表單驗證
  see(f:any){
    console.log(f);
  }

  //表單驗證reactive
  // form:FormGroup;
  form:FormArray;

  data = [
    { acc: "aaa",tel: "123456" },
    { acc: "bbb",tel: "123456" },
    { acc: "ccc",tel: "123456" },
    { acc: "ddd",tel: "123456" },
    { acc: "eee",tel: "123456" },
  ]

  constructor(private fb: FormBuilder){
    // this.form = this.fb.group({
    //   acc:['',[Validators.required]],
    //   tel:['',[Validators.required , Validators.minLength(7) , Validators.pattern("[0-9]*")]]
    // })
      this.form = this.fb.array([]);
      this.data.forEach(element => {
        this.form.push(
          this.fb.group({
            acc:[element.acc,[Validators.required]],
            tel:[element.tel,[Validators.required , Validators.minLength(7) , Validators.pattern("[0-9]*")]]
          })
        )
      });
  }
  seeGroup(f:any){
    console.log(this.form);
  }


}
