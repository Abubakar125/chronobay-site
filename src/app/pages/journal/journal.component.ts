import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FaqComponent } from '../../shared/faq/faq.component';
import { FutureCtaComponent } from '../../shared/future-cta/future-cta.component';
import { IndustryLeadersComponent } from '../../shared/industry-leaders/industry-leaders.component';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, FaqComponent,
      FutureCtaComponent,
      IndustryLeadersComponent],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {

  articles = [
    {
      category: 'Market Analysis',
      title: "The Rolex Submariner's Three Decade Bull Run: What History Tells Us",
      excerpt: "A deep dive into how the world's most recognisable sports watch became the benchmark for pre-owned luxury timepiece investment.",
      date: 'Jun 21, 2026',
    },
    {
      category: "Collector's Guide",
      title: 'Audemars Piguet Royal Oak: A Complete Reference For Serious Buyers',
      excerpt: "Everything a serious buyer needs to know about navigating references, generations, and valuations for one of horology's most iconic pieces.",
      date: 'May 30, 2026',
    },
    {
      category: 'Platform Update',
      title: 'Introducing WatchCharts™ Integration: Live Market Data Inside Every Listing',
      excerpt: 'Real-time market valuations, historical price charts, and reference data now embedded directly into every Chronobay listing.',
      date: 'May 22, 2026',
    },
    {
      category: 'Market Analysis',
      title: "The Rolex Submariner's Three Decade Bull Run: What History Tells Us",
      excerpt: "A deep dive into how the world's most recognisable sports watch became the benchmark for pre-owned luxury timepiece investment.",
      date: 'Jun 21, 2026',
    },
    {
      category: "Collector's Guide",
      title: 'Audemars Piguet Royal Oak: A Complete Reference For Serious Buyers',
      excerpt: "Everything a serious buyer needs to know about navigating references, generations, and valuations for one of horology's most iconic pieces.",
      date: 'May 30, 2026',
    },
    {
      category: 'Platform Update',
      title: 'Introducing WatchCharts™ Integration: Live Market Data Inside Every Listing',
      excerpt: 'Real-time market valuations, historical price charts, and reference data now embedded directly into every Chronobay listing.',
      date: 'May 22, 2026',
    },
    {
      category: 'Market Analysis',
      title: "The Rolex Submariner's Three Decade Bull Run: What History Tells Us",
      excerpt: "A deep dive into how the world's most recognisable sports watch became the benchmark for pre-owned luxury timepiece investment.",
      date: 'Jun 21, 2026',
    },
    {
      category: "Collector's Guide",
      title: 'Audemars Piguet Royal Oak: A Complete Reference For Serious Buyers',
      excerpt: "Everything a serious buyer needs to know about navigating references, generations, and valuations for one of horology's most iconic pieces.",
      date: 'May 30, 2026',
    },
    {
      category: 'Platform Update',
      title: 'Introducing WatchCharts™ Integration: Live Market Data Inside Every Listing',
      excerpt: 'Real-time market valuations, historical price charts, and reference data now embedded directly into every Chronobay listing.',
      date: 'May 22, 2026',
    },
  ];
}
