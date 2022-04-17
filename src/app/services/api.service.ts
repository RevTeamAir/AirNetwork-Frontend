import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCli : HttpClient) { }

  getAllPosts() {
    //gets all post that have been created
    return this.httpCli.get<any>("")
  }

  getOnePost(postId : number) {
    //gets one post by its id
  }

  getAllPostForUser(userId : number) {
    //gets all post for a given user
  }

  createPost(userId : number) {
    return this.httpCli.get<any>("http://localhost:9000/post/${userId}")
  }
  createPostWithPic(userId : number) {
    return this.httpCli.get<any>("http://localhost:9000/post/upload/${userId}")
  }

}
