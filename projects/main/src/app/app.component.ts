import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main';

  constructor(private router: Router) { }

  goToBenchmark(): void {
    this.router.navigateByUrl('/benchmark');
  }

  goToReporting(): void {
    this.router.navigateByUrl('/reporting');
  }
}
