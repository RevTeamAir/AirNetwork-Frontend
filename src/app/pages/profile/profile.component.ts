import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posts : Array<any> = [];
  mapPosts : Array<any> = [];
  isVisible : boolean = true;
  user : User = <User>{};
  isLike : number = 0;
  jsonResponse : JsonResponse = <JsonResponse>{};

  constructor(private apiService : ApiService, private router : Router) {  }
  
  ngOnInit(): void {
    this.apiService.checkSession().subscribe(response => {
      this.jsonResponse = response;

      if (this.jsonResponse.success == true){ // session found so user 
        this.user = this.jsonResponse.data;
        this.posts = this.jsonResponse.data.posts;

        console.log("posts from profile: " + this.posts);
        console.log("user from profile:" + this.user.firstname);
      } else{
        this.router.navigate(['/']);
      }


    });

    
    
  }
  
}

