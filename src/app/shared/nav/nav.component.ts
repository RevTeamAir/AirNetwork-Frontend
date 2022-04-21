import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  myControl = new FormControl();
  filterredOptions!: Observable<string[]>;
  allUsers: User[] = [];
  autoCopleteList: any[] = [];

  @ViewChild('autocompleteInput')
  autocompleteInput!: ElementRef;
    @Output() onSelectedOption = new EventEmitter();

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {

    this.apiService.getUsers().subscribe(users => {
      this.allUsers = users
    })

    // this.myControl.valueChanges.subscribe(userInput => {
    //   this.autoCopleteList(userInput)
    // })

  }

  logout(){
    this.apiService.logout().subscribe(responseBody => {
      console.log(responseBody);
  })
}

  

}
