import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  
  currentImg = '';
  user : User = <User>{}

    constructor(private apiService : ApiService) {}
  
    ngOnInit(): void {
    this.currentImg;
  }

  getProfilePicture(){
    this.apiService.getProfilePic().subscribe(responseBody => {
      this.user = responseBody;
      this.currentImg = this.user.profilePictureLocation
    })
  }

    

}
//grab picture from local computer
//display that picture
//send picture to databse under profile picture location