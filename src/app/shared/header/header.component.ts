import { Component, signal } from '@angular/core';
import { NavMenuComponent } from '../../nav-menu/nav-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
}
