import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpCli : HttpClient) { }

  getUserGivenId(userId : number){
    console.log("apiservice")
    return this.httpCli.get<any>(`http:localhost:9000/user/${userId}`)

  }

  getAllPostsForUser(userId : number){
    return this.httpCli.get<any>(`http:localhost:9000/post/${userId}`)

  }

  deleteOnePost(){

  }

  /* login(username: string, password: string){
    return this.httpCli.post<any>(`http://localhost:4200/session`,
      
    {
      withCredentials: true
    })
  } */


}
