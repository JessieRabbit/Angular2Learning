export interface IBook{
    // bookTitle:string;
    // bookAuthor:string;
    // bookPrice:string;

    id : string;
    name : string;
    productCode: string;
    releaseDate: Date;
    description: string;
    author : string;
    genre : string;
    specifications: string;
    inStock : boolean;
    price : number;
    starRating: string;
}