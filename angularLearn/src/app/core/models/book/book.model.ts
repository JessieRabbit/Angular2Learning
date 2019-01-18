export interface BookInterface {
  image: string;
  title: string;
  desciption: string;
  price: number;
  upvotes: number;
}

export class BookModel implements BookInterface {
  constructor(
    public image: string,
    public title: string,
    public desciption: string,
    public price: number,
    public upvotes: number,
  ) { }
}
