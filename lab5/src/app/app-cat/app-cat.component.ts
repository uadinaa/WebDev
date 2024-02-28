import { Component, Input } from "@angular/core";
import { Categories, categories } from "../categories";
import { ProductListComponent } from "../product-list/product-list.component";
import { Product, products } from "../products";
import { ProductDetailsComponent } from "../product-details/product-details.component";


@Component({
  selector: "app-category",
  templateUrl: "./app-cat.component.html",
  styleUrls: ["./app-cat.component.css"], //styleUrl: "./app-cat.component.css",
})

export class AppCatComponent {
  products = [...products];

  @Input() categories: Categories[] = [...categories];

  activeCategory: Categories | undefined;

  changeCategory(category: Categories) {
    this.activeCategory = category;
  }
}





  // categories = [...categories];
  // products: Product[] | undefined;
  // | undefined;


// import { Component, OnInit } from '@angular/core';

// import { categories,Categories } from '../categories';

// import { CategoryTypeItems, categoryTypeProducts } from "./products";
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-app-cat',
//   templateUrl: './app-cat.component.html',
//   styleUrl: './app-cat.component.css'
// })


// export class AppCatComponent {
//   // categoryId: number;
//   // categorie: Categories;
//   // products: Product[];
//   categories: Categories | undefined;
//   // product: Product | undefined;

//   constructor(private route: ActivatedRoute){}

//   ngOnInit(){
//     const routeParams = this.route.snapshot.paramMap;
//     const productIdFromRoute = Number(routeParams.get('categoryId'));

//     this.categories = categories.find( (categories) => categories.id === productIdFromRoute);

//   //   this.route.paramMap.subscribe(params => {
//   //     this.categoryId = +params.get('id');
//   //     this.category = categories.find(categorie => this.categoryId === this.categoryId);
//   //     this.products = this.categorie ? this.categorie.products : [];
//   //   });
//   }


//   // ngOnInit() {
//   //   // First get the product id from the current route.
//   //   const routeParams = this.route.snapshot.paramMap;
//   //   const productIdFromRoute = Number(routeParams.get('productId'));

//   //   // Find the product that correspond with the id provided in route.
//   //   this.product = products.find(
//   //     (product) => product.id === productIdFromRoute
//   //   );
//   // }


// }
