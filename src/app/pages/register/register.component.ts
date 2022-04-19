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
    this.apiService.createProfile(createProfile).subscribe(responseBody => {
      console.log(responseBody)
    })
    

    }

    //send data to postgres

  }
