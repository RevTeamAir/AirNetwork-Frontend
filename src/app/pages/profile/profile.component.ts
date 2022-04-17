import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId : number = 1

  constructor(private apiService : ApiService) {  
    
  }
  
  ngOnInit(): void {
    this.getUserGivenId();
  }

  getUserGivenId(){
    this.apiService.getUserGivenId(this.userId).subscribe(data => {
      console.log("hello from profile" + data);
    })
  }
}
