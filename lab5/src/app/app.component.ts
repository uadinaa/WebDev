import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-name-i-did-not-came-up-with-anything'
}


  // categories = [...categories]

// import { CategoryTypeItems, categoryTypeProducts } from "./products";

// import { AppCatComponent } from './app-cat/app-cat.component';
// import { categories, Categories } from './categories';



/*
Copyright Google LLC.. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/