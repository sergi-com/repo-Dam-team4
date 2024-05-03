import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [RouterLink, AppComponent],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.css'
})
export class PagenotfoundComponent {
  constructor(private router: Router) { }
  goToAppComponent() {
  this.router.navigate(['/component']);
  }
}
