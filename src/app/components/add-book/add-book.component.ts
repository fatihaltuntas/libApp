import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import {  } from "../../date_adapter/AppDateAdapter";
import { AppDateAdapter } from "../../adapter/AppDateAdapter";

export class Book {
  author: string;
  title: string;
  price: number;
  dateadded: any;
  dateread:any ="";
  description:string ="";
  imageUrl:string;
  rate:number =0;
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  
  book = new Book();
 

  isRead:boolean=false;
  dateAdapter:AppDateAdapter = new AppDateAdapter("");

  constructor(private firebaseService:FirebaseService,private router:Router, private db:AngularFireDatabase,) { }

  ngOnInit() {}

  updateDateAdded(dateAdded){
  this.book.dateadded = this.dateAdapter.format(dateAdded,"input");
  console.log('this.dateadded - ', this.book.dateadded);
  }
    updateDateRead(dateRead){
        this.book.dateread = this.dateAdapter.format(dateRead,"input");
         this.isRead = true;
       }
  

  submitAdd(){
    
    this.firebaseService.addBook(this.book);
    this.router.navigate(['books']);

  }
}
