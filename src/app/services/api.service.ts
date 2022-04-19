import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postId: any;

  constructor(private httpCli : HttpClient) { }

  
  createProfile(createProfile : any){
    return this.httpCli.post<any>('http://localhost:9000/user', createProfile,{
      withCredentials: true,
    })
}

  getUserGivenId(userId : number){
    console.log("apiservice")
    return this.httpCli.get<any>(`http:localhost:9000/user/${userId}`)

  }

  getAllPostsForUser(userId : number){
    return this.httpCli.get<any>(`http:localhost:9000/post/${userId}`)
  }

  deleteOnePost(){

  }

  login(user : any){
    return this.httpCli.post<any>(`http://localhost:9000/session`, user, {
      withCredentials: true
    })
  } 

  checkSession(){
    return this.httpCli.get<any>('http://localhost:9000/session', {
      withCredentials: true
    });
  }

  logout(){
    return this.httpCli.delete<any>('http://localhost:9000/session', {
      withCredentials: true
    });
  }

  getAllPosts(){
    return this.httpCli.get<any>('http://localhost:9000/post', {
      withCredentials: true
    });
  }

}
