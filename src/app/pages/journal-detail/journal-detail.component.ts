import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { IndustryLeadersComponent } from '../../shared/industry-leaders/industry-leaders.component';
import { FutureCtaComponent } from '../../shared/future-cta/future-cta.component';

@Component({
  selector: 'app-journal-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FutureCtaComponent, IndustryLeadersComponent],
  templateUrl: './journal-detail.component.html',
  styleUrl: './journal-detail.component.scss'
})
export class JournalDetailComponent {

}
