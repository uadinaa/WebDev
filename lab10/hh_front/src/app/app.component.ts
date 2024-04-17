import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CompaniesComponent } from "./companies/companies.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, CompaniesComponent]
})
export class AppComponent {
  title = 'hh_front';
}
