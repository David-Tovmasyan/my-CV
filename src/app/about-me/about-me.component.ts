import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  // animations: fadeInAnimation
})
export class AboutMeComponent implements OnInit{
  
  visited:boolean = sessionStorage.getItem("aboutVisited")?true:false; 

  constructor() { 
         
  }

  ngOnInit(): void {
      sessionStorage.setItem("aboutVisited","true"); 
  }
    
}
