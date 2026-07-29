import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FaqComponent } from '../../shared/faq/faq.component';
import { FutureCtaComponent } from '../../shared/future-cta/future-cta.component';
import { IndustryLeadersComponent } from '../../shared/industry-leaders/industry-leaders.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FaqComponent, FutureCtaComponent, IndustryLeadersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  heroSlide = 0;
  private heroSlideTimer: any;

  ngOnInit() {
    this.heroSlideTimer = setInterval(() => {
      this.heroSlide = this.heroSlide === 0 ? 1 : 0;
    }, 3500);
  }

  ngOnDestroy() {
    clearInterval(this.heroSlideTimer);
  }

  brands = [
    { name: 'Tissot',  logo: 'images/brand-tissot.svg'  },
    { name: 'Rado',    logo: 'images/brand-rado.svg'    },
    { name: 'Omega',   logo: 'images/brand-omega.svg'   },
    { name: 'Cartier', logo: 'images/brand-cartier.svg' },
    { name: 'Seiko',   logo: 'images/brand-seiko.svg'   },
    { name: 'Citizen', logo: 'images/brand-citizen.svg' },
    { name: 'Casio',   logo: 'images/brand-casio.svg'   },
    { name: 'Timex',   logo: 'images/brand-timex.svg'   },
    { name: 'Rolex',   logo: 'images/brand-rolex.svg'   },
  ];

  stats = [
    { value: '0%',   label: 'Commission',      sub: 'Always' },
    { value: '100%', label: 'Verified Members', sub: 'No Exceptions' },
    { value: '50+',  label: 'Countries',        sub: 'Worldwide' },
    { value: '24/7', label: 'Marketplace',      sub: 'Always Open' },
  ];

  steps = [
    { num: '01', title: 'Verify Identity',      desc: "Complete a secure identity check powered by UAE PASS. Your credentials are verified once — then you're in for life." },
    { num: '02', title: 'List Or Discover',     desc: 'List your timepieces with reference-number autofill and market-accurate pricing, or browse thousands of verified pieces.' },
    { num: '03', title: 'Negotiate Directly',   desc: 'Connect peer-to-peer with verified buyers and sellers. No intermediaries, no commissions, no friction.' },
    { num: '04', title: 'Complete Transaction', desc: 'Close deals with confidence through our secure escrow-guided transaction framework built for high-value trades.' },
  ];

  testimonials = [
    { quote: 'Chronobay has transformed how I manage inventory. The reference autofill alone saves me hours each week, and selling without commission has significantly improved our margins.', name: 'Ahmed Al Rashid', role: 'Professional Dealer · Dubai, UAE',  initial: 'A' },
    { quote: "I've purchased three pieces through Chronobay and every transaction was seamless. The market data gave me the confidence to know exactly what I was paying was fair.",          name: 'Marco Ferretti',  role: 'Private Collector · Dubai, UAE',    initial: 'M' },
    { quote: 'The verification layer is what sets Chronobay apart. As someone who advises ultra-HNW clients on horology, trust is everything — and this platform has earned it.',              name: 'James Whitmort',  role: 'Industry Expert · Dubai, UAE',      initial: 'J' },
  ];

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
  ];

}
