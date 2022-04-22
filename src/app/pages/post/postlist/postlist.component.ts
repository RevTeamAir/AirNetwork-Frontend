import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonResponse } from 'src/app/models/JsonResponse';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  user : User = <User>{};
  userId : number = 1;

  posts: Array<any> = [];
  filteredPosts : Array<any> = [];
  isVisible : boolean = true;
  isLike : number = 0;
  classes : object = {};
  jsonResponse : JsonResponse = <JsonResponse>{};

  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.apiService.checkSession().subscribe(response => {
      this.jsonResponse = response;

      if (this.jsonResponse.success == true){ // session found so user 
        this.user = this.jsonResponse.data;
        
        console.log(this.jsonResponse.data.id)
        this.userId = this.jsonResponse.data.id;
        
      } else{
        console.log("no session found")
        //this.router.navigate(['/']);
      }


    });
   this.getAllPosts();

  }


  getAllPosts(){
    this.apiService.getAllPosts().subscribe(response => {
      this.jsonResponse = response;
      this.posts = this.jsonResponse.data;
      console.log(this.posts)
      //this.filteredPosts = this.posts.filter();
    });
  } 

  setClasses(){
    this.classes = {

    }
  }
  toggleLike(e : any){
    let newJsonResponse : JsonResponse = <JsonResponse>{};
    
    let elem : any;

    if(e.target.className != "btn"){
      elem = e.target.parentNode
    }else{   
      elem = e.target
    } 

    let postId : number = elem.id;

    // let userId = e.target.id
    console.log(postId);

    // sending the request 
    this.apiService.toggleLike(this.userId, postId).subscribe(response =>{
      newJsonResponse = response;

      console.log(newJsonResponse);

      if(newJsonResponse.success){
        elem.style.color =="red"
      }else{
        elem.style.color =="grey"
      }
    });

    // toggleing the styling
    if (elem.style.color =="red") { //if liked -> unlike
      elem.style.color = "grey"

    } else{ //like
      elem.style.color = "red"

    }

    console.log(elem)
  }

} 

 