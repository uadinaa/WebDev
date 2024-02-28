import { Component, Input } from '@angular/core';

import { Product, products as allProducts } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // products = [...products];

  @Input() products: Product[] = allProducts;
  // removeItem(item: Product) {
  //   this.products = this.products.filter((product) => product !== item);
  // }

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

  like(product: Product) {
    product.likes = product.likes + 1;
  }

  remove(products:Product){
    const index = this.products.indexOf(products);
    // => p.id === product.id);
    // If the product is found, remove it from the array
    if (index > -1) {
      this.products.splice(index, 1);
      // Optionally, you can save the updated products array to localStorage here
      // this.saveProductsToLocalStorage();
    }
    // Redirect to a different page or perform any other necessary actions
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
