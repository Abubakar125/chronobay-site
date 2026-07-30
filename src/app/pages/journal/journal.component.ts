import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FaqComponent } from '../../shared/faq/faq.component';
import { FutureCtaComponent } from '../../shared/future-cta/future-cta.component';
import { IndustryLeadersComponent } from '../../shared/industry-leaders/industry-leaders.component';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,FaqComponent,
      FutureCtaComponent,
      IndustryLeadersComponent],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {}
