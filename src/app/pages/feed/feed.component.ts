import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  jsonResponse : JsonResponse = <JsonResponse>{};
  postArray : Array<any> = [];

  constructor(private router : Router, private apiService : ApiService) { }

  ngOnInit(): void {
    //check session
    this.apiService.checkSession().subscribe(response => {
      this.jsonResponse = response;

      if (!this.jsonResponse.success){ // if no session, redirect to login page
        this.router.navigate(['/']);
      }
      this.getAllPosts();
    });
  }

  getAllPosts() {
    this.apiService.getAllPosts().subscribe(responseBody => {
      console.log(responseBody.data)
      this.postArray = responseBody.data;
    }); 
  }

  likePost(userId : number, postId : number) {
    this.apiService.likePost(userId, postId)
  }
}
