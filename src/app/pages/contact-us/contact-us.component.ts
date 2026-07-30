import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { IndustryLeadersComponent } from '../../shared/industry-leaders/industry-leaders.component';
import { FutureCtaComponent } from '../../shared/future-cta/future-cta.component';
import { FaqComponent } from '../../shared/faq/faq.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FutureCtaComponent, IndustryLeadersComponent, FaqComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {}
