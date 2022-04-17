import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  posts: Array<any> = [];
  userId= 1;

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    /* this.getUserGivenId(); */
    this.getAllPostsforUser();
  }


  getAllPostsforUser(){
    this.apiService.getAllPostsForUser(this.userId).subscribe(data => {
      console.log(data);
    });
  }

}
