import {Component} from '@angular/core';

@Component({
  selector: 'instagram-app',
  template: `
    <nav-bar></nav-bar>
    <loading-screen></loading-screen>
    <router-outlet></router-outlet>
  `
})
export class InstagramAppComponent {

}
