import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h1>Welcome to auth0-angular2</h1>

    <p>
      This repo shows you how to set up authentication in your Angular 2 apps with Auth0.
      Get started by providing your Auth0 client ID and domain in the Auth0Lock widget in <code>auth/auth.service.ts</code>.
    </p>
  `
})
export class Home {

  constructor() {}

}
