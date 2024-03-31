import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppCatComponent } from './app-cat/app-cat.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { routes } from './app.routes';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    // FirstComponent, 
    // SecondComponent,
    // AppComponent,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(
      [
      { path: 'home', component: AppCatComponent},// null
      { path: 'home', component: AppComponent}, // null
      { path: 'home', component: ProductListComponent }, //products
      { path: 'home', component: ProductDetailsComponent }, //products/:productId
    ]),
  ],

  declarations: [AppCatComponent, AppComponent, TopBarComponent, ProductListComponent],
  // FirstComponent, SecondComponent,
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license




@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],


*/
