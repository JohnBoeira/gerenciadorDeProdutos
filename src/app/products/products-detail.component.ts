import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './shared/model/product.model';
import { ProductService } from './shared/services/product.service';

@Component({
  templateUrl: './products-detail.component.html',
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = "Detalhes do produto";
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
    });
  }

  onBack(): void{
    this.router.navigate(['/products'])
  }

}
