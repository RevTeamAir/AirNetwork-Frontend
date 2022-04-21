import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  posts: Array<any> = [];
  filteredPosts : Array<any> = [];
  userId= 1;
  isVisible : boolean = true;
  isLike : number = 0;
  classes : object = {};
  jsonResponse : JsonResponse = <JsonResponse>{};

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
   this.getAllPosts();
  }


  getAllPosts(){
    this.apiService.getAllPosts().subscribe(response => {
      this.jsonResponse = response;
      this.posts = this.jsonResponse.data;
    });
  } 

  setClasses(){
    this.classes = {

    }
  }

} 

 