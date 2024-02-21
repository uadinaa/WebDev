import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(platform: string) {
    window.alert(`The product has been shared via ${platform}!`);
  }

  shareWhatsapp(productName: string, productBuyUrl: string) {
    let linkslook = `Check out this product: ${productName} - ${productBuyUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(linkslook)}`);
  }

  shareTelegram(productName: string, productBuyUrl: string) {
    let linkslook = `Check out this product: ${productName} - ${productBuyUrl}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(linkslook)}`);
  }

  buy() {
    window.alert('The product is planning to be bought');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
