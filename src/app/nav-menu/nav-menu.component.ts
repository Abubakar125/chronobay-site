import { Component, OnDestroy, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
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
    { label: 'Home',                 gold: false },
    { label: 'Why Chronobay',        gold: false },
    { label: 'App',                  gold: false },
    { label: 'How It Works',         gold: false },
    { label: 'Journal',              gold: false },
    { label: 'Newsletter',           gold: false },
    { label: 'Login',                gold: false },
    { label: 'Apply For Membership', gold: true  },
    { label: 'Download App',         gold: true  },
  ];
}
