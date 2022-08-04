import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routerOutletComponentClass: string = "";
  onActivate(event: any) {
    this.routerOutletComponentClass = event.constructor.name; // changing component property for styling
  }
}
