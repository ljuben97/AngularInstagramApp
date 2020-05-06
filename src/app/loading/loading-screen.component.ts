import {Component} from "@angular/core";
import {Event, NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  template: '<div *ngIf="toggleAnimation"><div class="lds-facebook"><div></div><div></div><div></div></div></div>',
  selector: 'loading-screen',
  styles: [`
    .lds-facebook {
      top: 50%;
      left: 50%;
      position: fixed;
      width: 80px;
      height: 80px;
      z-index: 2;
    }
    .lds-facebook div {
      display: inline-block;
      position: absolute;
      left: 8px;
      width: 16px;
      background: deepskyblue;
      animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .lds-facebook div:nth-child(1) {
      left: 8px;
      animation-delay: -0.24s;
    }
    .lds-facebook div:nth-child(2) {
      left: 32px;
      animation-delay: -0.12s;
    }
    .lds-facebook div:nth-child(3) {
      left: 56px;
      animation-delay: 0s;
    }
    @keyframes lds-facebook {
      0% {
        top: 8px;
        height: 64px;
      }
      50%, 100% {
        top: 24px;
        height: 32px;
      }
    }

  `]
})
export class LoadingScreenComponent{

  public toggleAnimation: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart){
        this.toggleAnimation=true;
      }
      else if(routerEvent instanceof NavigationEnd){
        this.toggleAnimation=false;
      }
    })
  }
}
