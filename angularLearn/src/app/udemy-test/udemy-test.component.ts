import { BookModel } from './../core/models/book/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-test',
  templateUrl: './udemy-test.component.html',
  styleUrls: ['./udemy-test.component.css']
})
export class UdemyTestComponent implements OnInit {

  public book: BookModel = new BookModel(
    '123',
    'Jessie',
    'Hello,test',
    27,
    28,
  );
  constructor() { }

  upvote() {
    this.book.upvotes++;
  }

  votesCounter() {
    return this.book.upvotes;
  }

  ngOnInit() {
  }

}
