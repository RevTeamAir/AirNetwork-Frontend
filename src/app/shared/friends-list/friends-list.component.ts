import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  
  

  friends : Array<any> = []
  filteredFriends: Array<any>=[];
  filterInput: string ="";
  jsonResponse : JsonResponse = <JsonResponse>{};
  user : User = <User>{};
  userId: number = 1;
  posts : Array<any> = [];
  

  constructor(private apiService : ApiService, private router : Router) { }

  ngDoCheck(): void{
    this.filteredFriends = this.friends.filter((friend : any) => friend.username.includes(this.filterInput.toLowerCase()))
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  

  getAllUsers(){
    this.apiService.getUsers().subscribe(responseBody => {
     //this.friends= responseBody.data.map((friends: { username: any; }) => friends.username)
     this.friends=responseBody.data;
     this.filteredFriends = this.friends
      
    })

  }

  goToUser(e : any){
    
    let userId : number = e.target.id;
    let firstname: string= e.target
    let lastname: string= e.target
    let username : string = e.target;
    let bio: string = e.target
    let posts: string = e.target
    console.log(userId)
    console.log(username)
    console.log(bio)
    let name : string = e.target.innerText;
    this.apiService.username = name.toLowerCase();
    
    this.router.navigate([`user/${userId}`]);

  }

  friendInfo(e:any){
    let userId : number = e.target.id;
    let firstname: string= e.target
    let lastname: string= e.target
    let username : string = e.target;
    let bio: string = e.target
    let posts: string = e.target
  }

}

