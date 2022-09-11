import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './products-detail.component.html',
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = "Detalhes do produto";

  constructor() { }

  ngOnInit(): void {
  }

}
