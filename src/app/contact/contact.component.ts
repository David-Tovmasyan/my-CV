import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  visited:boolean = sessionStorage.getItem("contactVisited")?true:false; 

  constructor() { 
         
  }

  ngOnInit(): void {
      sessionStorage.setItem("contactVisited","true"); 
  }

}
