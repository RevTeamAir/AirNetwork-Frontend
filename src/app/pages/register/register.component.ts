import { HttpClient } from '@angular/common/http';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    fileName : string = "";
    userId : number = 0
    isVisible: boolean = false;
    jsonResponse : JsonResponse = <JsonResponse>{};

  @Input()
    firstname : string ="";
    lastname : string ="";
    username : string ="";
    password : string ="";
    email : string="";
    profilePictureLocation: string="";
    bio: string = "";
    
 

  constructor(private router : Router, private apiService : ApiService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  //creates user, puts them in the database and redirects page to Feed page
  submit(createProfile: any){
    this.apiService.createProfile(createProfile).subscribe(responseBody => {
      this.jsonResponse = responseBody;

      if (!this.jsonResponse.success){
      this.isVisible=true;
      }else{
        this.goToFeed()
      }

      console.log(responseBody)
    })
    
    }

    goToFeed(){
      this.router.navigate(['/feed']);
    }

  }
   

    
  

    

  
