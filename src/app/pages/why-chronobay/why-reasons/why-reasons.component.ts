import { Component } from '@angular/core';

interface Reason {
  num: string;
  icon: string;
  title: string;
  body: string;
  badge: string;
}

@Component({
  selector: 'app-why-reasons',
  standalone: true,
  templateUrl: './why-reasons.component.html',
  styleUrl: './why-reasons.component.scss'
})
export class WhyReasonsComponent {
  readonly reasons: Reason[] = [
    {
      num: '01',
      icon: 'icon/why/why-reason-01.svg',
      title: 'Zero Commission. Always.',
      body: "Every other marketplace takes a cut of your deal. Chronobay takes nothing. Our revenue comes from membership — not from taxing your transactions. Whether you're selling a $5,000 Tudor or a $500,000 Patek, you keep every dollar.",
      badge: '0% on every transaction, forever',
    },
    {
      num: '02',
      icon: 'icon/why/why-reason-02.svg',
      title: '100% Verified Members',
      body: 'Every person on Chronobay — dealer or collector — has passed identity verification via UAE PASS before they can list, bid, or message. No anonymous accounts. No grey-market actors. Just a community of real, verifiable professionals.',
      badge: 'Identity verified via UAE PASS',
    },
    {
      num: '03',
      icon: 'icon/why/why-reason-03.svg',
      title: 'Real Market Intelligence',
      body: "Integrated with WatchCharts™, Chronobay shows live market valuations and multi-year historical performance data inside every listing. Know what you're buying before you make an offer. Know what you're selling before you name a price.",
      badge: 'Powered by WatchCharts��',
    },
    {
      num: '04',
      icon: 'icon/why/why-reason-04.svg',
      title: 'A Truly Global Community',
      body: 'Our members operate across 50+ countries. A dealer in Dubai can connect directly with a collector in Zurich or a trading house in Tokyo — with no third-party friction, no currency surprises, and no platform interference.',
      badge: '50+ countries and growing',
    },
    {
      num: '05',
      icon: 'icon/why/why-reason-05.svg',
      title: 'Built for Speed & Precision',
      body: 'Reference number autofill, smart inventory management, and direct-to-buyer communication mean that professional dealers can move inventory faster than any other channel — without sacrificing accuracy or control.',
      badge: 'Tools built for serious volume',
    },
    {
      num: '06',
      icon: 'icon/why/why-reason-06.svg',
      title: 'Private by Design',
      body: 'Chronobay is not a public forum. It is a private marketplace where discretion is foundational. Your listing history, your trades, and your communications are never visible to the public — only to verified members.',
      badge: 'Invitation-only access model',
    },
  ];
}
