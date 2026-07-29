import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
}

@Component({
  selector: 'app-why-testimonials',
  standalone: true,
  templateUrl: './why-testimonials.component.html',
  styleUrl: './why-testimonials.component.scss'
})
export class WhyTestimonialsComponent {
  readonly testimonials: Testimonial[] = [
    {
      quote: "The zero-commission model alone moved the needle for our business. We've listed on every platform — none of them come close.",
      name: 'Ahmed Al Rashid',
      role: 'Professional Dealer · Dubai',
      initial: 'A',
    },
    {
      quote: "I finally feel like I'm trading on level ground. The WatchCharts data inside every listing changed how I make decisions.",
      name: 'Marco Ferretti',
      role: 'Private Collector · Milan',
      initial: 'M',
    },
  ];
}
