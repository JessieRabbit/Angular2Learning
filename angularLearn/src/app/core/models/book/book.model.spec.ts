import { BookModel } from './book.model';
import * as faker from 'faker';

describe('BookModel', () => {
  let image: string;
  let title: string;
  let desciption: string;
  let price: number;
  let upvotes: number;

  // 在沒有真實資料前，跑案例前先塞假資料，成功後，就可以在comp建立物件
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
