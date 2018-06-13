import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  authenticated: boolean = false;

  constructor(public af: AngularFireAuth) { 
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = af.authState;
          this.authenticated = true;
        }
      });
   }

  ngOnInit() {
  }

  login() {
      this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.authenticated = true;
  }

   logout() {
    this.af.auth.signOut();
        this.authenticated = false;
  }

}
