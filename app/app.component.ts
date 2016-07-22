import { Component } from '@angular/core';
import { MainPageComponent } from './main/mainpage.component';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    template: `Hello 
        <a routerLink="/mainpage" routerLinkActive="active">Crisis Center</a>
        <a routerLink="/pagetwo" routerLinkActive="active">Heroes</a>
        <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
    title = "Hello";
}
