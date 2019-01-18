import { IBook } from './book';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';



@Injectable()
export class BookService {

  // constructor(private _http: Http) { }

  /*getBook():IBook[]{
    return[{
        bookTitle:"so cute",
        bookAuthor:"Jessie",
        bookPrice:"sss"
      }]
  }*/

  // getBook(): Observable<IBook[]> {
  //   return this._http
  //     .get('assets/api/book/books.json')
  //     .map((response: Response) => <IBook[]>response.json())
  //     .do(data => console.log(data))
  //     .catch(this.handlError);
  // }

  // private handlError(error: Response) {
  //   console.error(error);
  //   const message = `Error status code ${error.status} at ${error.url}`;
  //   return Observable.throw(message);
  // }

  // quer(): Observable<any[]> {
  //   return this._http
  //     .get('assets/api/book/books.json')
  //     .map((response: Response) => response.json);
  // }

  quer(): Observable<string> {
    const test = new Observable<string>();
    return test;
  }

}
