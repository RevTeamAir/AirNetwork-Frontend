import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  jsonResponse : JsonResponse = <JsonResponse>{};
  postArray : Array<any> = [];
  isVisible : boolean = true;
  isLike : boolean = false;
  closeResult: string = "";
  user : User = <User>{};
  userId : number = 0;

  constructor(
    private router : Router, 
    private apiService : ApiService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    //check session
    this.apiService.checkSession().subscribe(response => {
      this.jsonResponse = response;

      if (!this.jsonResponse.success){ // if no session, redirect to login page
        this.router.navigate(['/']);
      }
      this.userId = this.jsonResponse.data.id;
      this.getAllPosts();
      this.user = this.jsonResponse.data;
    });
  }

  //gets all the posts created 
  getAllPosts() {
    this.apiService.getAllPosts().subscribe(responseBody => {
      console.log(responseBody.data)
      this.postArray = responseBody.data;
    }); 
  }

  //likes a post if the like button on the post is clicked 
  likePost(userId : number, postId : number) {
    this.isVisible = false;
    this.isLike = true;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(f: any) {
    this.apiService.createPost(this.userId, f).subscribe((result) => {
      this.ngOnInit(); //reload post
    })
    this.modalService.dismissAll(); //dismiss the modal
  }
  
}
