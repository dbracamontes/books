import { Component } from '@angular/core';

@Component({
  selector: 'bookst-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookst works!';
}
