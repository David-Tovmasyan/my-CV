import { Injectable } from '@angular/core';
import { Iknowledge } from './iknowledge';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  knowledge: Array<Iknowledge> = [
    { name: "HTML", value: 3 },
    { name: "CSS", value: 3 },
    { name: "JS", value: 4 },
    { name: "SCSS", value: 3 },
    { name: "Bootstrap", value: 2 },
    { name: "React", value: 2 },
    { name: "TS", value: 3 },
    { name: "Angular", value: 3 },
    { name: "Git", value: 2 },
    { name: "Github", value: 2 },
    { name: "PHP", value: 1 },
    { name: "MySQL", value: 1 }
  ]

  constructor() { }
}
