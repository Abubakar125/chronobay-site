import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavMenuComponent } from '../../nav-menu/nav-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenuComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
}
