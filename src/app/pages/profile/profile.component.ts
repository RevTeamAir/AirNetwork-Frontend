import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private sub: any;

  fileName : string ='';
  userId : number = 0;

  posts : Array<any> = [];
  mapPosts : Array<any> = [];
  isVisible : boolean = true;
  user : User = <User>{};
  isLike : number = 0;
  jsonResponse : JsonResponse = <JsonResponse>{};

  constructor(private apiService : ApiService, private router : Router, private route: ActivatedRoute) {  }
  
  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.userId = +params['userId']; // (+) converts string 'id' to a number

      console.log(this.userId)

      // send a request to grab user info
      //this.apiService.getUserGivenId(this.userId).subscribe(response => {
        // this.jsonResponse = response;
        // this.user = this.jsonResponse.data;
        // this.userId = this.jsonResponse.data.id;
        // this.posts = this.jsonResponse.data.posts;

      //})
      

   });



    this.apiService.checkSession().subscribe(response => {
      this.jsonResponse = response;

      if (this.jsonResponse.success == true){ // session found so user 
        this.user = this.jsonResponse.data;
        this.userId = this.jsonResponse.data.id;
        this.posts = this.jsonResponse.data.posts;

        console.log("posts from profile: " + this.posts);
        console.log("user from profile:" + this.user.firstname);
      } else{
        //this.router.navigate(['/']);
      }


    });

    
    
  }

  uploadProfilePic(e :any){
    const file : File = e.target.files[0];

    if (file){
      this.fileName = file.name;

      const formData = new FormData();

      //formData.append(description)

      formData.append("file", file);

      //send the api request to the backend
      this.apiService.uploadProfilePic(this.userId,formData).subscribe(response => {
        console.log(response);
      });

      // this.apiService.createPostWithPic(this.userId, formData).subscribe(response => {
        //console.log(response);
      //});
    }
  }

  updateInfo(form : any){

  }
  
}

