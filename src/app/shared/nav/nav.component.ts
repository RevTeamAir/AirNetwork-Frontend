import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  logout(){
    this.apiService.logout().subscribe(responseBody => {
      console.log(responseBody);
  })
}

}
