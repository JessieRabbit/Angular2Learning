import { BookInterface, BookModel } from './book.model';
import * as faker from 'faker';

fdescribe('BookModel', () => {
  let image: string;
  let title: string;
  let desciption: string;
  let price: number;
  let upvotes: number;

  beforeEach(() => {
    image = faker.image.image();
    title = faker.lorem.words();
    desciption = faker.lorem.sentence();
    price = faker.commerce.price();
    upvotes = faker.random.number();
  });

  it('has a valid model', () => {
    const book = new BookModel(image, title, desciption, price, upvotes);
    expect(book.image).toEqual(image);
    expect(book.title).toEqual(title);
    expect(book.desciption).toEqual(desciption);
    expect(book.price).toEqual(price);
    expect(book.upvotes).toEqual(upvotes);
  });
});
