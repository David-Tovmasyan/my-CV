import { Component, OnInit } from '@angular/core';
import { Iknowledge } from '../iknowledge';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  visited:boolean = sessionStorage.getItem("educationVisited")?true:false; 

  // languages part
  languages: Array<Iknowledge> = [];
  constructor(private _languages: LanguagesService) {
    this.languages = _languages.languages;
  }

  ngOnInit(): void {
    sessionStorage.setItem("educationVisited","true"); 

  }

}
