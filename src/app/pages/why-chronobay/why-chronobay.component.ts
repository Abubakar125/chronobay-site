import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { WhyHeroComponent } from './why-hero/why-hero.component';
import { WhyStatsBarComponent } from './why-stats-bar/why-stats-bar.component';
import { WhyReasonsComponent } from './why-reasons/why-reasons.component';
import { WhyComparisonComponent } from './why-comparison/why-comparison.component';
import { WhyTestimonialsComponent } from './why-testimonials/why-testimonials.component';
import { WhyAudienceComponent } from './why-audience/why-audience.component';
import { WhyCtaComponent } from './why-cta/why-cta.component';

@Component({
  selector: 'app-why-chronobay',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    WhyHeroComponent,
    WhyStatsBarComponent,
    WhyReasonsComponent,
    WhyComparisonComponent,
    WhyTestimonialsComponent,
    WhyAudienceComponent,
    WhyCtaComponent,
  ],
  templateUrl: './why-chronobay.component.html',
  styleUrl: './why-chronobay.component.scss'
})
export class WhyChronobayComponent {}
