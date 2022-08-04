import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // if we have visited this component before we would have gotten data in session storage.
  // so if sessionStorage contains {containerName}Visited key -> it was visited -> visited variable= true -> no animation
  
  visited:boolean = sessionStorage.getItem("homeVisited")?true:false; 

  constructor() { 
         
  }

  ngOnInit(): void {
    // inserts data in sessionStorage when first time visiting (when first time visiting, animation runs)
    sessionStorage.setItem("homeVisited","true"); // value doesn't matter, true is written for better understanding
  }

}
