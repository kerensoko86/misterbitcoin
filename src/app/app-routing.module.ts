import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsComponent } from './pages/contact-details-page/contact-details-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component'
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'signup', component: SignUpComponent },

  { path: 'contact/edit/:id', component: ContactEditPageComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'stats', component: StatisticPageComponent },

];
