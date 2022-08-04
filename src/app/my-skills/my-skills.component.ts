import { Component, OnInit } from '@angular/core';
import { Iknowledge } from '../iknowledge';
import { KnowledgeService } from '../knowledge.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  visited: boolean = sessionStorage.getItem("skillsVisited") ? true : false;

  kn: Array<Iknowledge>; // data from service

  levelValue: number;
  langName: string = "HTML";

  constructor(private _knowledge: KnowledgeService) {
    this.kn = _knowledge.knowledge;
    this.levelValue = this.kn[0].value;
  }

  ngOnInit(): void {
    
    sessionStorage.setItem("skillsVisited", "true"); 
  }

  changeLevel(e: any) {
    for (let i in this.kn) { // iterating through array
      // e.target.classList has 2 properties f. e. [0]="html",[1]="circle"
      if (this.kn[i].name.toUpperCase() == e.target.classList[0].toUpperCase()) { 
        //toUpperCase(), because class name's are all in lowercase, service's object keys are in the right way 
        // f. e. angular(class) and Angular(service)
        this.langName = this.kn[i].name;
        this.levelValue = this.kn[i].value;
      }

    }
  }
}
