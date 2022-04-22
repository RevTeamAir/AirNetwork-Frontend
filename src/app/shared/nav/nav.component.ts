import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { findIndex, Observable } from 'rxjs';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  myControl = new FormControl();
  filterInput : string ="";
  user : User = <User>{};
  filteredUsers : Array<any> = []
  users : Array<any> = []
  jsonResponse : JsonResponse = <JsonResponse>{};
  userId : number = 1

  constructor(private apiService : ApiService, private router : Router) { }

  ngDoCheck(): void{
    this.filteredUsers = this.users.filter((user : any)=> user.firstname.includes(this.filterInput.toLocaleLowerCase()))
  }

  ngOnInit(): void {

    this.apiService.checkSession().subscribe(response => {
      this.jsonResponse = response
      this.userId = this.jsonResponse.data.id
    })
    
    this.apiService.getUsers();

  }

  logout(){
    this.apiService.logout().subscribe(responseBody => {
      console.log(responseBody);
  })
}

  searchBar(){
    this.apiService.getUsers().subscribe(responseBody =>{
      this.users = responseBody.data
      this.filteredUsers = this.users
        this.users = responseBody.data.map((user: { firstname: string; }) => {
          user.firstname
        })
      console.log(responseBody.data)
    })
  }


}


