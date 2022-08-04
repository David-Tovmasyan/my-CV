import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { EducationComponent } from './education/education.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ContactComponent} from "./contact/contact.component";
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"About",component:AboutMeComponent},
  {path:"Skills",component:MySkillsComponent},
  {path:"Education",component:EducationComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Home",component:HomeComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
