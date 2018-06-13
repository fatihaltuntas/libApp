import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  books: Array<any>;
  favoriteBooks: Array<any>;
  unreadBooks: Array<any>;
  bookDetails: Array<any>;
  title: string; author: string; dateadded: Date; dateread: Date; price: number; rate: number; description: string = ""; imageUrl: string;

  constructor(private db: AngularFireDatabase) { }
  getBooks() {

    this.db.list('/books').subscribe(ref => {
      this.books = ref;
      console.log(ref);
    });

    console.log(this.books);
    return this.books;
  }

  getFavoriteBooks(): Observable<any> {
    return this.db.list('/books');
  }

  getUnreadBooks(): Observable<any> {
    return this.db.list('/books');
  }
  getBookDetails(id) {
    //let item;
    this.db.list('/books/' + id).subscribe(ref => {
      this.bookDetails = ref;
    });
    return this.bookDetails;
  }
  addBook(bookDetails){
    this.db.list('/books').push(bookDetails);
  }
  deleteBook(id) {
    const itemRef = this.db.list('books');
    itemRef.remove(id);
  }

  updateBook(id,bookDetails)
  {
    const itemRef = this.db.list('books');
    itemRef.update(id,bookDetails);
  }

}
