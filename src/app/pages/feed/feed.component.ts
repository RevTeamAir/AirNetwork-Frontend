import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts : Array<any> = [];

  constructor(private api : ApiService, router : Router) { }

  ngOnInit(): void {
    this.getAllPosts;
  }

  getAllPosts() {
    this.api.getAllPosts().subscribe(responseBody => {
      this.posts = responseBody.results;
    })
  }

  createPost() {
    this.api.createPost().subscribe(responseBody => {
      this.posts = responseBody.results;
    })
  }

}
