import { Component } from '@angular/core';

@Component({
  selector: 'app-why-stats-bar',
  standalone: true,
  templateUrl: './why-stats-bar.component.html',
  styleUrl: './why-stats-bar.component.scss'
})
export class WhyStatsBarComponent {
  readonly stats = [
    { value: '0%',   label: 'Commission' },
    { value: '100%', label: 'Verified'   },
    { value: '50+',  label: 'Countries'  },
    { value: '24/7', label: 'Access'     },
  ];
}
