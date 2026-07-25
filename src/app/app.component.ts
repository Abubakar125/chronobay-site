import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  openFaqIndex: number | null = 0;

  faqs = [
    {
      q: 'Who can join Chronobay?',
      a: 'Chronobay is open to both professional watch dealers and serious private collectors. All members must complete our identity verification process before accessing the marketplace.'
    },
    {
      q: 'How does the zero-commission model work?',
      a: 'We don\'t take any commission on transactions. Our revenue comes from optional premium membership features, not from cutting into your earnings — ever.'
    },
    {
      q: 'What is the identity verification process?',
      a: 'Members verify their identity through UAE PASS integration. This ensures every member is a real, verifiable individual or business entity before they can list or purchase.'
    },
    {
      q: 'How is market pricing data provided?',
      a: 'We integrate with WatchCharts™, the industry\'s most trusted pricing database, to provide real-time market valuations and historical performance charts for all major references.'
    },
    {
      q: 'Is Chronobay available outside the UAE?',
      a: 'Yes, Chronobay is accessible globally, though our primary focus is the UAE and GCC luxury watch market. Membership is available to verified collectors and dealers worldwide.'
    },
    {
      q: 'How are disputes between buyers and sellers resolved?',
      a: 'Our team mediates disputes through a structured resolution process. All transactions are recorded and traceable, providing a clear audit trail for any issues that arise.'
    },
    {
      q: 'Can I list watches without a price?',
      a: 'Yes, you can list watches as price on request, allowing interested buyers to reach out directly without a public listing price — ideal for rare or high-value pieces.'
    },
    {
      q: 'Is there a mobile app?',
      a: 'Yes, Chronobay is available on both iOS (App Store) and Android (Google Play), providing the full marketplace experience — listings, offers, and messaging — on mobile.'
    },
    {
      q: 'How does the reference number autofill work?',
      a: 'Our system uses watch reference numbers to automatically populate listing details including model name, specifications, and historical pricing data, saving you significant time per listing.'
    },
    {
      q: 'How do I apply for membership?',
      a: 'Click Apply For Membership on this page, complete our verification process, and once approved you\'ll gain full access to the marketplace, listings, and direct messaging.'
    },
  ];

  toggleFaq(i: number) {
    this.openFaqIndex = this.openFaqIndex === i ? null : i;
  }
}
