import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FaqComponent } from '../../shared/faq/faq.component';
import { FutureCtaComponent } from '../../shared/future-cta/future-cta.component';
import { IndustryLeadersComponent } from '../../shared/industry-leaders/industry-leaders.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FaqComponent, FutureCtaComponent, IndustryLeadersComponent],
  templateUrl: './app-page.component.html',
  styleUrl: './app-page.component.scss'
})
export class AppPageComponent {
  readonly listings = [
    { brand: 'Patek Philippe', ref: '5711/1A',  price: '$68,000' },
    { brand: 'Rolex Daytona',  ref: '116500LN', price: '$29,500' },
    { brand: 'AP Royal Oak',   ref: '15400ST',  price: '$41,200' },
  ];

  readonly features = [
    { icon: 'icon/identity.png',       title: 'Identity Verification', description: 'Government-grade UAE PASS and KYC for every member.' },
    { icon: 'icon/instant.png',        title: 'Instant Listings',       description: 'Reference number auto-fill populates specs in seconds.' },
    { icon: 'icon/realtime-market.png',title: 'Real-Time Market Data',  description: 'Live valuations powered by WatchCharts™.' },
    { icon: 'icon/private.png',        title: 'Private Negotiation',    description: 'Chat directly with verified members, no middlemen.' },
    { icon: 'icon/secure.png',         title: 'Secure Marketplace',     description: 'Every transaction protected, end-to-end.' },
    { icon: 'icon/personal.png',       title: 'Personal Collection',    description: 'Manage and track your entire watch portfolio.' },
  ];

  readonly steps = [
    { number: '01', title: 'Download App',    body: 'Available on the App Store and Google Play. Free to download.' },
    { number: '02', title: 'Verify Identity', body: 'Complete UAE PASS or international KYC — takes under 5 minutes.' },
    { number: '03', title: 'Browse or List',  body: 'Explore the marketplace or post your inventory with reference auto-fill.' },
    { number: '04', title: 'Connect & Trade', body: 'Message verified members, make offers, and close deals with confidence.' },
  ];

  readonly showcaseCallouts = [
    { label: 'Reference Scanner', position: 'left-top' },
    { label: 'Market Value',      position: 'left-bottom' },
    { label: 'Saved Collection',  position: 'top' },
    { label: 'Watch History',     position: 'right-top' },
    { label: 'Direct Chat',       position: 'right-bottom' },
    { label: 'Offer System',      position: 'bottom' },
  ];

  readonly benefits = [
    'Instant Notifications',
    'Watch Alerts',
    'Price Tracking',
    'Offer Management',
    'Collection Dashboard',
    'Verified Community',
  ];

  readonly securityCards = [
    { icon: 'icon/uae-pass.png',        title: 'UAE PASS Verification',    description: 'Government-issued identity verification trusted by millions across the UAE.' },
    { icon: 'icon/internation-kyc.png', title: 'International KYC',         description: 'Global Know Your Customer standards applied to every member worldwide.' },
    { icon: 'icon/encrypted.png',       title: 'Encrypted Data Protection', description: 'End-to-end encryption on all communications and transactions.' },
  ];

  readonly testimonials = [
    { initial: 'A', name: 'Ahmed Al Rashid', role: 'Verified Dealer · Dubai',  quote: 'Real-time pricing across all major references, updated continuously from verified transactions. This is the standard the industry needed.' },
    { initial: 'M', name: 'Marco Ferretti',  role: 'Private Collector · Milan', quote: 'The identity verification gave me the confidence to buy from strangers across the globe. Seamless and completely trustworthy.' },
    { initial: 'J', name: 'James Whitmort',  role: 'Collector · London',        quote: 'Zero commission is a game changer. I\'ve already saved tens of thousands on transactions I\'d have paid fees on elsewhere.' },
  ];

}
