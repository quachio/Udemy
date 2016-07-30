import { provideRouter } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from '../app/home-component.component';

const APP_ROUTES = [
  { path: '',         component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];


