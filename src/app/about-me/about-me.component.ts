import { Component, OnInit } from '@angular/core';
import { Iknowledge } from '../iknowledge';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  
})
export class AboutMeComponent implements OnInit{
  
  visited:boolean = sessionStorage.getItem("aboutVisited")?true:false; 


  languages: Array<Iknowledge> = [];
  constructor(private _languages: LanguagesService) {
    this.languages = _languages.languages;
  }

  ngOnInit(): void {
      sessionStorage.setItem("aboutVisited","true"); 
  }
    
}
