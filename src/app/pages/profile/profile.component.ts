import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

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
  selectedFile : any = null;


  constructor(private apiService : ApiService, private router : Router, private httpCli : HttpClient ) {  }
  
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

  //creates user, puts them in the database and redirects page to Feed page
  submit(editUserInfo: any){
    this.apiService.editUserInfo().subscribe(responseBody => {
      this.jsonResponse = responseBody;
      console.log(responseBody)
    })
    
    }

 /*  onFileSelected(event: any){
    this.uploadFile(profilePictureLocation : string, userId : number);
  } */

  uploadFile(profilePictureLocation: string, userId : number) {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.httpCli.post<any>(`https://localhost:9000/user/upload/${userId}`, fd)
      .subscribe(resposeBody => {
        console.log(resposeBody);
      })
  }
}