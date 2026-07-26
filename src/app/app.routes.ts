import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhyChronobayComponent } from './pages/why-chronobay/why-chronobay.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'why-chronobay', component: WhyChronobayComponent },
];
