import { BookService } from './book/book.service';
import { IBook } from './book/book';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CounterState } from './stores/counter/counter.store';
import { DECREMENT, INCREMENT, RESET } from './stores/counter/counter.action';
import { Console } from '@angular/core/src/console';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('init');
  }
  // ngOnChanges(){
  //   console.log('new change detected');
  // }
  // tslint:disable-next-line:member-ordering
  title = 'app';
  // tslint:disable-next-line:member-ordering
  rabbit = 30;

  // 重複顯示與ngfor
  // tslint:disable-next-line:member-ordering
  name = '';
  // tslint:disable-next-line:member-ordering
  price = '';
  // tslint:disable-next-line:member-ordering
  rank: number;


  // tslint:disable-next-line:member-ordering
  cpu = [
    { date: new Date(), name: '123', price: '9811', rank: 1 },
    { date: new Date(), name: '123', price: '9811', rank: 2 },
    { date: new Date(), name: '123', price: '9811', rank: 3 },
  ];

  /*insert(){
    this.cpu.push({ name:this.name,price:this.price,rank:this.rank  });
  }

  delete(i:number){
    this.cpu.splice(i,1);
  }*/

  // ngSwitch
  // edit = false;
  // fun=[
  //   {name:"台灣",precent:"100",rank:0},
  //   {name:"美國",precent:"700",rank:3},
  //   {name:"倫敦",precent:"900",rank:5}
  // ];

  // tslint:disable-next-line:member-ordering
  dateString = new Date();
  // tslint:disable-next-line:member-ordering
  Description = '123456789010223423224243442';

  // tslint:disable-next-line:member-ordering
  showMessage = 'test';
  onNotifyClicked(message: string): void {
    this.showMessage = message;
  }

  // tslint:disable-next-line:member-ordering
  books: IBook[];
  // constructor(private _bookService:BookService){
  //   this.books = _bookService.getBook();
  // }

  // 此註解掉是沒問題的程式 因constructor只能有一個
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

  // 表單驗證
  see(f: any) {
    console.log(f);
  }

  // 表單驗證reactive
  // form:FormGroup;
  // tslint:disable-next-line:member-ordering
  form: FormArray;

  // tslint:disable-next-line:member-ordering
  data = [
    { acc: 'aaa', tel: '123456' },
    { acc: 'bbb', tel: '123456' },
    { acc: 'ccc', tel: '123456' },
    { acc: 'ddd', tel: '123456' },
    { acc: 'eee', tel: '123456' },
  ];

  /*constructor(private fb: FormBuilder){
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
  }*/
  seeGroup(f: any) {
    console.log(this.form);
  }

  // input output 再度練習
  // tslint:disable-next-line:member-ordering
  outMessage = '';

  // tslint:disable-next-line:member-ordering
  @ViewChild(WelcomeComponent)
  private ch_ts: WelcomeComponent;

  right() {
    this.ch_ts.right();
  }

  left() {
    this.ch_ts.left();

  }

  // ngrx練習
  // tslint:disable-next-line:member-ordering
  counter$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.counter$ = store.select('counter');
  }

  increment() {
    this.store.dispatch({
      type: INCREMENT,
    });
  }

  decrement() {
    this.store.dispatch({
      type: DECREMENT,
    });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }


}
