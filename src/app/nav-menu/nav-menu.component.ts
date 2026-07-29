import { Component, OnDestroy, effect, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent implements OnDestroy {
  isOpen = input<boolean>(false);
  closed = output<void>();

  visible = signal(false);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => this.visible.set(true));
      }
    });
  }

  close() {
    this.visible.set(false);
    this.closeTimer = setTimeout(() => {
      document.body.style.overflow = '';
      this.closed.emit();
    }, 450);
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
    if (this.closeTimer) clearTimeout(this.closeTimer);
  }

  readonly links = [
    { label: 'Home',                 route: '/',               gold: false },
    { label: 'Why Chronobay',        route: '/why-chronobay',  gold: false },
    { label: 'App',                  route: '/app',            gold: false },
    { label: 'How It Works',         route: null,              gold: false },
    { label: 'Journal',              route: null,              gold: false },
    { label: 'Newsletter',           route: null,              gold: false },
    { label: 'Login',                route: null,              gold: false },
    { label: 'Apply For Membership', route: null,              gold: true  },
    { label: 'Download App',         route: null,              gold: true  },
  ];
}
