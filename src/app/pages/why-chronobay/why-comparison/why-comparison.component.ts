import { Component } from '@angular/core';

interface CompRow {
  feature: string;
  us: string;
  them: string;
  usIsCheck?: boolean;
}

@Component({
  selector: 'app-why-comparison',
  standalone: true,
  templateUrl: './why-comparison.component.html',
  styleUrl: './why-comparison.component.scss'
})
export class WhyComparisonComponent {
  readonly rows: CompRow[] = [
    { feature: 'Commission on sales',        us: '0%',    them: '3–12%',   usIsCheck: false },
    { feature: 'Identity verification',      us: '',      them: '✕',       usIsCheck: true  },
    { feature: 'Live market data',           us: '',      them: '✕',       usIsCheck: true  },
    { feature: 'Direct buyer-seller messaging', us: '',   them: '✕',       usIsCheck: true  },
    { feature: 'Private listings',           us: '',      them: '✕',       usIsCheck: true  },
    { feature: 'Reference autofill',         us: '',      them: '✕',       usIsCheck: true  },
    { feature: 'Global reach',               us: '',      them: 'Limited', usIsCheck: true  },
    { feature: 'Mobile app',                 us: '',      them: 'Varies',  usIsCheck: true  },
  ];
}
