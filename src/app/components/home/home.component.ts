import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //favorite books
  favoriteBooks: Array<any>;
  unreadBooks: Array<any>;

  //authentication related
  authenticated;
  user: Observable<firebase.User>;

  constructor(private firebaseService: FirebaseService, public af: AngularFireAuth) {

    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = af.authState;
          this.authenticated = true;
        }
      });

  }

  ngOnInit() {



    this.firebaseService.getFavoriteBooks().subscribe(res => {
      this.favoriteBooks = res;
      this.favoriteBooks = this.favoriteBooks.filter(item => item.rate > 4);
    });


    this.firebaseService.getUnreadBooks().subscribe(res => {
      this.unreadBooks = res;
      this.unreadBooks = this.unreadBooks.filter(item => item.dateread == "");
    });;

    //PROBLEM1
    /* this.firebaseService.getFavoriteBooks().subscribe(favBooks =>{
       this.favoriteBooks=favBooks;
       console.log(this.favoriteBooks);
     })*/





    //PROBLEM2
    /*
    this.firebaseService.getUnreadBooks().subscribe(ubBooks => {
      this.unreadBooks=ubBooks;
      console.log('Unread Books', this.unreadBooks);
    })
    */
  }

}
