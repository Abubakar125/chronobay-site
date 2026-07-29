import { Component } from '@angular/core';

interface AudienceCard {
  icon: string;
  title: string;
  points: string[];
}

@Component({
  selector: 'app-why-audience',
  standalone: true,
  templateUrl: './why-audience.component.html',
  styleUrl: './why-audience.component.scss'
})
export class WhyAudienceComponent {
  readonly cards: AudienceCard[] = [
    {
      icon: 'icon/why/why-dealers.svg',
      title: 'Professional Dealers',
      points: [
        'You move significant volume and need efficiency',
        "You've lost too much margin to commission platforms",
        'You want direct relationships with verified buyers',
        'You need smart inventory tools, not spreadsheets',
      ],
    },
    {
      icon: 'icon/why/why-collectors.svg',
      title: 'Private Collectors',
      points: [
        'You collect intentionally and research every acquisition',
        'You want to buy from verified sellers only',
        'You need real market data before making an offer',
        'You value discretion and privacy in every transaction',
      ],
    },
  ];
}
