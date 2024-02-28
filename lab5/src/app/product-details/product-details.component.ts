import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  shareWhatsapp(productName: string, productBuyUrl: string) {
    let linkslook = `Check out this product: ${productName} - ${productBuyUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(linkslook)}`);
  }

  like(product: Product) {
    product.likes++;
  }

  // function save(likes: number): void {
  //   const liki = document.getElementById(likes);
  //   if(liki){
  //     localStorage.setItem("likes, liki.innerHTML");
  //   }
  // }
    

  remove(product:Product){
    const index = products.findIndex((p) => p.id === product.id);
    // If the product is found, remove it from the array
    if (index !== -1) {
      products.splice(index, 1);
      // Optionally, you can save the updated products array to localStorage here
      // this.saveProductsToLocalStorage();
    }
    // Redirect to a different page or perform any other necessary actions
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
