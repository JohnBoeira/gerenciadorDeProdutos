import { Component, OnInit } from "@angular/core";
import { IProduct } from "./shared/model/product.model";
import { ProductService } from "./shared/services/product.service";

@Component({
    selector: 'gp-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./shared/styles/product-list.component.css']
})

export class ProductListComponent implements OnInit{

    pageTitle: string = 'Lista de produtos';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    products: IProduct[] = [];
    filteredProducts: IProduct[] = [];

    private _listFilter: string = '';

    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.filterProducts(value);
    }

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    public onRatingClick(message: string): void{
        this.pageTitle = 'Lista de produtos' + message;
    }

    private filterProducts(value: string){
        value = value.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(value))
    }
}