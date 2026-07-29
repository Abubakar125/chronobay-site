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
    { num: '01', title: 'Create Account',        desc: 'Sign up with your professional credentials. Government-verified registration for dealers and collectors.' },
    { num: '02', title: 'Verify Identity',        desc: 'Complete UAE PASS or International KYC. The process is fast, secure, and required for all members.' },
    { num: '03', title: 'List Your Watch',        desc: 'Enter a reference number. Specifications auto-fill from our database — saving time on every listing.' },
    { num: '04', title: 'Receive Offers',         desc: 'Qualified buyers message you directly. Negotiate price and terms in private, without intermediaries.' },
    { num: '05', title: 'Complete Transaction',   desc: 'Agree terms, transfer ownership securely. Zero commission — you keep 100% of every sale.' },
  ];

  buyerSteps = [
    { num: '01', title: 'Browse Watches',         desc: 'Explore hundreds of verified listings from professional dealers and private collectors worldwide.' },
    { num: '02', title: 'Review Market Value',    desc: 'Every listing shows live WatchCharts™ pricing, historical data, and fair market value bands.' },
    { num: '03', title: 'Contact Seller',         desc: 'Message verified dealers directly. No public forums or middlemen — pure peer-to-peer.' },
    { num: '04', title: 'Negotiate',              desc: 'Submit private offers, counter, and reach agreement in our secure encrypted messaging environment.' },
    { num: '05', title: 'Purchase',               desc: 'Complete the transaction with confidence. Chronobay ensures every deal is documented and secure.' },
  ];

  verificationCards = [
    { icon: 'icon/identity-verification.png', title: 'Identity Verification',  desc: 'Government-grade ID check via UAE PASS or international KYC ensures every member is verified.' },
    { icon: 'icon/small-inventory.png',        title: 'Watch Authentication',   desc: 'Sellers must confirm ownership and provenance. Every piece is documented before listing goes live.' },
    { icon: 'icon/rating.png',                 title: 'Seller Review',          desc: 'Professional approval process for dealers. Reputation-based access keeps quality standards high.' },
    { icon: 'icon/security-ecosystem.png',     title: 'Marketplace Protection', desc: 'The entire ecosystem is secured. Every transaction is monitored and fully traceable.' },
  ];

  marketCards = [
    { icon: 'icon/watch-charts-integration.png', title: 'WatchCharts™ Integration', badge: 'Real-time',    desc: "Live bid/ask data from the world's leading watch pricing platform, embedded in every listing." },
    { icon: 'icon/historical-performance.png',    title: 'Historical Prices',        badge: '10yr data',    desc: 'Multi-year sale history for every reference number to inform smarter buying and selling.' },
    { icon: 'icon/live-maker.png',                title: 'Fair Market Value',         badge: '±2% accuracy', desc: 'Clear value bands help buyers benchmark offers and sellers price with full confidence.' },
  ];

  whyCards = [
    { icon: 'icon/zero-commission.png',        title: 'Zero Commission',       desc: 'We earn from membership — not from your deals. Every transaction stays 100% yours, always.' },
    { icon: 'icon/identity-verification.png',  title: 'Verified Members',      desc: 'Every buyer and seller is identity-verified before they join. No exceptions, no anonymous accounts.' },
    { icon: 'icon/direct-offers.png',          title: 'Direct Communication',  desc: 'Message counterparties without intermediaries. Relationship-first marketplace design.' },
    { icon: 'icon/watch-chart.png',            title: 'Transparent Pricing',   desc: 'Live market data in every listing ensures both parties are informed and fairly positioned.' },
  ];

  securityCards = [
    { icon: 'icon/security-ecosystem.png',    title: 'Encrypted Data',      desc: 'All personal data and communications encrypted at rest and in transit at all times.' },
    { icon: 'icon/direct-offers.png',         title: 'Private Messaging',   desc: 'End-to-end encrypted messaging between verified members only — never public or visible.' },
    { icon: 'icon/global-access.png',         title: 'Secure Payments',     desc: 'Transactions processed through regulated financial institutions with full audit trails.' },
    { icon: 'icon/identity-verification.png', title: 'Verified Community',  desc: 'Every member is KYC-verified. No anonymous accounts are permitted on the platform.' },
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
