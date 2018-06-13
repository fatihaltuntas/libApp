import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router,ActivatedRoute } from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AppDateAdapter } from "../../adapter/AppDateAdapter";
import { NgForm } from "@angular/forms"


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id:any;
  bookDetails:Array<any>;
  title:string;author:string;dateadded:Date;dateread:Date;price:number;rate:number;description:string;imageUrl:String;

  dateAdapter:AppDateAdapter = new AppDateAdapter("");

  constructor(private firebaseService:FirebaseService,private router:Router,private route:ActivatedRoute,private db:AngularFireDatabase) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
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


    submitEdit(){
      let bookDetails={
        author:this.author,
        dateadded:this.dateadded,
        dateread:this.dateread,
        description:this.description,
        imageUrl:this.imageUrl,
        price:this.price,
        rate:this.rate,
        title:this.title
      }
      this.firebaseService.updateBook(this.id,bookDetails);

      this.router.navigate(['books']);
    }
  }