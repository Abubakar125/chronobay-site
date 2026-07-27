import { Component } from '@angular/core';

interface CompRow {
  feature: string;
  them: string;
}

@Component({
  selector: 'app-why-comparison',
  standalone: true,
  templateUrl: './why-comparison.component.html',
  styleUrl: './why-comparison.component.scss'
})
export class WhyComparisonComponent {
  readonly rows: CompRow[] = [
    { feature: 'Identity verification',         them: ''        },
    { feature: 'Live market data',              them: ''        },
    { feature: 'Direct buyer-seller messaging', them: ''        },
    { feature: 'Private listings',              them: ''        },
    { feature: 'Reference autofill',            them: ''        },
    { feature: 'Global reach',                  them: 'Limited' },
    { feature: 'Mobile app',                    them: 'Varies'  },
  ];
}
