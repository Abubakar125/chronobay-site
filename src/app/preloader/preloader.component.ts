import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit {
  isHiding = signal(false);
  isGone = signal(false);

  ngOnInit() {
    setTimeout(() => {
      this.isHiding.set(true);
      setTimeout(() => this.isGone.set(true), 800);
    }, 2200);
  }
}
