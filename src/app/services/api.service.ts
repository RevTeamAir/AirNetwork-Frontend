import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  selectedFile : any = null;
  postId: any;

  constructor(private httpCli : HttpClient) { }

  
  createProfile(createProfile : any){
    return this.httpCli.post<any>('http://localhost:9000/user', createProfile,{
      withCredentials: true,
    })
  }

  uploadFile(profilePictureLocation: string, userId : number) {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.httpCli.post<any>(`https://localhost:9000/user/upload/${userId}`, fd)
      .subscribe(resposeBody => {
        console.log(resposeBody);
      })
  }

  getUserGivenId(userId : number){
    console.log("apiservice")
    return this.httpCli.get<any>(`http://localhost:9000/user/${userId}`)

  }

  getUsers(){
    return this.httpCli.get<any>("http://localhost:9000/user")
  }

  getAllPostsForUser(userId : number){
    return this.httpCli.get<any>(`http://localhost:9000/post/${userId}`)
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

  getProfilePic(){
    return this.httpCli.post<any>('http://localhost:9000/upload/{userId}', this.createProfile, {
      withCredentials: true,
    })
    
  }
  
  editUserInfo(){
    return this.httpCli.put<any>(`http://localhost:9000/user`,this.createProfile, {
      withCredentials: true
    } )
  }

}
