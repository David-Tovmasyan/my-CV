import { Injectable } from '@angular/core';
import { Iknowledge } from './iknowledge';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor() { }

  languages:Array<Iknowledge>=[
    {name:"Armenian",value:5},
    {name:"Polish",value:3},
    {name:"English",value:4},
    {name:"Russian",value:4},
  ]
}
