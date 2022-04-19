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
  posts : Array<any> = [];
  postArray : Array<any> = [];

  constructor(private router : Router, private apiService : ApiService) { }

  ngOnInit(): void {
      this.getAllPosts();
    //check session
    this.apiService.checkSession().subscribe(response => {
      this.jsonResponse = response;

      if (!this.jsonResponse.success){ // if no session, redirect to login page
        this.router.navigate(['/']);
      } 
      this.posts = this.jsonResponse.data.posts;
      console.log(this.posts);
    });
  }

  getAllPosts() {
    this.apiService.getAllPosts().subscribe(responseBody => {
      console.log(responseBody.data)
      this.postArray = responseBody.data;
    }); 
  }
}
