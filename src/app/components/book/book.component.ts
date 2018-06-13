import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  id:any;
  bookDetails:Array<any>;
  title;author;dateadded;dateread;price;rate;description;imageUrl;

  constructor(private firebaseService:FirebaseService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.bookDetails=this.firebaseService.getBookDetails(this.id);
    this.author=this.bookDetails[0].$value;
    this.dateadded=this.bookDetails[1].$value;
    this.dateread=this.bookDetails[2].$value;
    this.description=this.bookDetails[3].$value;
    this.imageUrl=this.bookDetails[4].$value;
    this.price=this.bookDetails[5].$value;
    this.rate=this.bookDetails[6].$value;
    this.title=this.bookDetails[7].$value;

    
  }

}
