import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isVisible : boolean = false;

  jsonResponse : JsonResponse = <JsonResponse>{};

  constructor(private router : Router, private apiService : ApiService) { }

  ngOnInit(): void {
    //check session
    this.apiService.checkSession().subscribe(response => {
      this.jsonResponse = response;

      if (this.jsonResponse.success == true){ // session found so user is logged in already -> redirect to feed
        this.router.navigate(['/feed']);
      }

    });
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  login(value : any){
    this.isVisible = false;

    console.log(value)

    //use api to send http request
    this.apiService.login(value).subscribe(response => {
     
     this.jsonResponse = response;
    
      console.log(this.jsonResponse)

     if (!this.jsonResponse.success){
       this.isVisible = true;

     } else{
      this.router.navigate(['/feed']);
     }

    }); 
    
    

  }


}
