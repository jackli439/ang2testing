import { provideRouter, RouterConfig } from '@angular/router';
import { MainPageComponent } from './main/mainpage.component';
import { PageTwoComponent } from './pagetwo/pagetwo.component';

const routes: RouterConfig = [
    { path: 'mainpage', component: MainPageComponent, useAsDefault: true },
    { path: 'pagetwo', component: PageTwoComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];