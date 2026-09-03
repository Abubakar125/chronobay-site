import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  openFaqIndex: number | null = null;

  toggleFaq(i: number) {
    this.openFaqIndex = this.openFaqIndex === i ? null : i;
  }

  readonly faqs = [
    { q: 'How can I sell my luxury watch?',                          a: 'Sell your luxury watches on ChronoBay by listing your timepiece, adding its details and pricing, and connecting directly with verified buyers.' },
    { q: 'How can I buy pre-owned luxury watches online?',           a: 'You can buy pre-owned luxury watches online through ChronoBay, where you can discover watches from verified dealers and collectors, review market data, compare prices, and connect directly with sellers.' },
    { q: 'How does ChronoBay protect buyers when buying luxury watches?', a: 'ChronoBay protects buyers primarily through a secure escrow service that holds payments until the buyer receives and accepts the watch.' },
    { q: 'How does ChronoBay verify watches?',                       a: 'ChronoBay helps buyers verify luxury watches through identity-verified dealers and collectors, detailed watch information, and real-time market data before making a purchase.' },
    { q: 'How much does ChronoBay charge to sell your watch?',       a: 'ChronoBay charges 0% commission on watch sales, so sellers keep 100% of the sale price with no transaction fees.' },
    { q: 'What are the top 3 luxury watch brands available on ChronoBay?', a: 'The top three luxury watch brands by global sales, recognition, and market presence are Rolex, Rado, and Omega, all available on ChronoBay.' },
    { q: 'How can I register as a dealer or collector on ChronoBay?', a: 'You can register as a dealer or collector by joining the ChronoBay Early Access list and completing the required identity verification process.' },
    { q: 'Can I negotiate the price of a luxury watch on ChronoBay?', a: 'Yes, you can negotiate prices on ChronoBay. Many professional dealers and private collectors are open to discussing offers and negotiating prices directly with buyers before completing a deal.' },
    { q: 'What does ChronoBay Buyer Protection cover?',              a: 'ChronoBay Buyer Protection covers buyers through secure escrow, with payment held until the buyer receives and accepts the watch.' },
    { q: 'How do I check the market value of a watch?',             a: "To check the market value of a watch, use ChronoBay's real-time market data, current valuations, and historical price information for major watch references." },
  ];
}
