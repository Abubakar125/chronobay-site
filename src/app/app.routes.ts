import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhyChronobayComponent } from './pages/why-chronobay/why-chronobay.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'why-chronobay', component: WhyChronobayComponent },
  { path: 'app', component: AppPageComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
];
