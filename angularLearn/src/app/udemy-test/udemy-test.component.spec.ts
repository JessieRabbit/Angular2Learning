import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyTestComponent } from './udemy-test.component';
import * as faker from 'faker';
import { BookModel } from '../core/models/book/book.model';

describe('UdemyTestComponent', () => {
  let component: UdemyTestComponent;
  let fixture: ComponentFixture<UdemyTestComponent>;
  let book: BookModel;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UdemyTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyTestComponent);
    component = fixture.componentInstance;
    // 建立一個新的假資料
    book = new BookModel(
      faker.image.image(),
      faker.lorem.words(),
      faker.lorem.sentence(),
      1234.55,
      0
    );
    // 覆蓋原本
    component.book = book;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 抓取css選取器與attribute
  it('should show the book image', () => {
    const image = nativeElement.querySelector('.book-image').getAttribute('src');
    expect(image).toEqual(book.image);
  });

  it('should show the book words', () => {
    const title = nativeElement.querySelector('.book-title').innerHTML;
    expect(title).toEqual(book.title);
  });

  it('should show the book desciption', () => {
    const desciption = nativeElement.querySelector('.book-desciption').innerHTML;
    expect(desciption).toEqual(book.desciption);
  });

  it('should show the book price', () => {
    const price = nativeElement.querySelector('.book-price').innerHTML;
    expect(price).toEqual('USB1,234.55');
  });

  it('should show the book upvotes', () => {
    const upvotes = nativeElement.querySelector('.book-upvotes').innerHTML;
    expect(upvotes).toEqual('0');
  });

  xit('pending', () => {
    const any: any = jasmine.any(Number);
  });

  it('should set correct number of upvotes', () => {
    const votes = component.votesCounter();
    expect(component.votesCounter()).toEqual(votes);
    expect(component.votesCounter()).toBeGreaterThan(votes - 1);
    expect(component.votesCounter()).not.toEqual(votes + 1);
    expect(component.votesCounter()).toBeLessThan(votes + 1);
  });

  it('upvote invokes the comp function', () => {
    const spy = spyOn(component, 'upvote');
    const button = <HTMLElement>nativeElement.querySelector('button.upvote');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
