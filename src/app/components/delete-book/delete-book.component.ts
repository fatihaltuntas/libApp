import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  id;bookTitle;bookDescription;
  bookDetails:Array<any>;

  constructor(private firebaseService:FirebaseService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    //get the book ID
    this.id=this.route.snapshot.params['id'];
    this.bookDetails=this.firebaseService.getBookDetails(this.id);
    this.bookTitle=this.bookDetails[7].$value;
    this.bookDescription=this.bookDetails[3].$value;
  }
  removeBook(){
    this.firebaseService.deleteBook(this.id);
    this.router.navigate(['books']);
  }
}
