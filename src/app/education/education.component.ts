import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  visited:boolean = sessionStorage.getItem("educationVisited")?true:false; 

    constructor() {
    
  }

  ngOnInit(): void {
    sessionStorage.setItem("educationVisited","true"); 

  }

}
