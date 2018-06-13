export interface IBook {
    author: string;
    dateadded: any;
    title: string;
    price: number;
    dateread: any;
    description: string;
    imageUrl: string;
    rate: number
}

export class Book implements IBook {
    public author: string;
    public dateadded: any;
    public title: string;
    public price: number;
    public dateread: any = "";
    public description: string = "";
    public imageUrl: string;
    public rate: number = 0;

    constructor(author: string, dateadded: any, title: string, price: number, dateread: any, description: string, imageUrl: string, rate: number) { }
}