import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WhyChronobayComponent } from './pages/why-chronobay/why-chronobay.component';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { JournalComponent } from './pages/journal/journal.component';
import { JournalDetailComponent } from './pages/journal-detail/journal-detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'why-chronobay', component: WhyChronobayComponent },
  { path: 'app', component: AppPageComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'journal/:id', component: JournalDetailComponent },
  { path: 'contact-us', component: ContactUsComponent },
];
