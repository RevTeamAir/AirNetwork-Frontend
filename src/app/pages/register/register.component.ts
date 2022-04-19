import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    userId : number = 0
  @Input()
    firstname : string ="";
    lastname : string ="";
    username : string ="";
    password : string ="";
    email : string="";
    profilePictureLocation: string="";
    bio: string = "";
  
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  submit(createProfile: any){
    this.apiService.createProfile(this.userId, this.firstname, this.lastname, this.username, this.password, this.email, this.profilePictureLocation, this.bio)
    console.log("form submitted", createProfile)
     
    }

    // createProfile(){
    //   this.apiService.createProfile(this.userId, this.firstname, this.lastname, this.username, this.password, this.email, this.profilePictureLocation, this.bio)
  
    // }
  }
