import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FaqComponent } from '../../shared/faq/faq.component';
import { FutureCtaComponent } from '../../shared/future-cta/future-cta.component';
import { IndustryLeadersComponent } from '../../shared/industry-leaders/industry-leaders.component';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    FutureCtaComponent,
    IndustryLeadersComponent,
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

  dealerFeatures = ['Smart Inventory', 'Reference Number Autofill', 'Direct Client Ownership'];
  collectorFeatures = ['Fair Pricing', 'Verified Sellers', 'Market Transparency'];

  sellerSteps = [
    { num: '01', title: 'Create Account',        desc: 'Sign up with your professional credentials. Government identity verification begins immediately.' },
    { num: '02', title: 'Verify Identity',        desc: 'Complete UAE PASS or International KYC. The process takes under five minutes.' },
    { num: '03', title: 'List Your Watch',        desc: 'Enter a reference number. Specifications auto-fill. Our AI assists with description, condition grading and suggested pricing.' },
    { num: '04', title: 'Receive Offers',         desc: 'Qualified buyers message you directly. Negotiate privately with verified counterparties — no intermediaries.' },
    { num: '05', title: 'Complete Transaction',   desc: 'Agree terms, transfer ownership securely. Zero commission deducted. The full amount is yours.' },
  ];

  buyerSteps = [
    { num: '01', title: 'Browse Watches',         desc: 'Explore hundreds of verified listings from professional dealers and private collectors worldwide.' },
    { num: '02', title: 'Review Market Value',    desc: 'Every listing shows live WatchCharts™ pricing, historical data, and fair market value bands.' },
    { num: '03', title: 'Contact Seller',         desc: 'Message verified dealers directly. No public forums or middlemen — pure peer-to-peer.' },
    { num: '04', title: 'Negotiate',              desc: 'Submit private offers, counter, and reach agreement in our secure encrypted messaging environment.' },
    { num: '05', title: 'Purchase',               desc: 'Complete the transaction with confidence. Chronobay ensures every deal is documented and secure.' },
  ];

  verificationCards = [
    { icon: 'icon/uae-pass.png',               title: 'Identity Verification',  desc: 'Government-grade ID check via UAE PASS or international KYC providers. Every member, every time.' },
    { icon: 'icon/watch-authentication.png',   title: 'Watch Authentication',   desc: 'Sellers must confirm ownership and provenance. Every listed piece is traceable.' },
    { icon: 'icon/rating.png',                 title: 'Seller Review',          desc: 'Professional approval process for dealers. Reputation and history are reviewed before listing access.' },
    { icon: 'icon/marketplace-protection.png', title: 'Marketplace Protection', desc: 'The entire ecosystem is secured. Every transaction, every message, every member — protected.' },
  ];

  marketCards = [
    { icon: 'icon/chart-integration.png', title: 'WatchCharts™ Integration', badge: 'Real-time',    desc: "Live bid/ask data from the world's leading watch pricing platform, embedded directly in every listing." },
    { icon: 'icon/realtime-market.png',   title: 'Historical Prices',        badge: '10yr data',    desc: "Multi-year sale history for every reference number. Understand where value has been to see where it's going." },
    { icon: 'icon/fair-market.png',       title: 'Fair Market Value',        badge: '±2% accuracy', desc: 'Clear value bands help buyers benchmark offers and help sellers price competitively and confidently.' },
  ];

  whyCards = [
    { icon: 'icon/zero-commissions.png',       title: 'Zero Commission',       desc: 'We earn from membership — not from your deals. Every dollar of your sale price stays with you.' },
    { icon: 'icon/verified-member.png',        title: 'Verified Members',      desc: 'Every buyer and seller is identity-verified before accessing the platform. No exceptions.' },
    { icon: 'icon/direct-communication.png',   title: 'Direct Communication',  desc: 'Message counterparties without intermediaries. Relationships built on conversation, not abstraction.' },
    { icon: 'icon/transparent-pricing.png',    title: 'Transparent Pricing',   desc: 'Live market data in every listing ensures both parties start from a position of informed confidence.' },
  ];

  securityCards = [
    { icon: 'icon/encrypted.png',          title: 'Encrypted Data',      desc: 'All personal data and communications encrypted at rest and in transit at all times.' },
    { icon: 'icon/private.png',            title: 'Private Messaging',   desc: 'End-to-end encrypted messaging between verified members only — never public or visible.' },
    { icon: 'icon/secure-payment.png',     title: 'Secure Payments',     desc: 'Transactions processed through regulated financial institutions with full audit trails.' },
    { icon: 'icon/verified-community.png', title: 'Verified Community',  desc: 'Every member is KYC-verified. No anonymous accounts are permitted on the platform.' },
  ];

  journeySteps = [
    { num: '01', title: 'Create Account' },
    { num: '02', title: 'Verify' },
    { num: '03', title: 'List' },
    { num: '04', title: 'Negotiate' },
    { num: '05', title: 'Purchase' },
    { num: '06', title: 'Collect' },
  ];

  buyerListings = [
    { ref: 'Submariner 126610LN', brand: 'Rolex',             price: '$14,200' },
    { ref: 'Nautilus 5711/1A',    brand: 'Patek Philippe',    price: '$68,000' },
    { ref: 'Royal Oak 15500ST',   brand: 'Audemars Piguet',   price: '$41,500' },
  ];
}
