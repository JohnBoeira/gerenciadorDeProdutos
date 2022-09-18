import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-space.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductsDetailComponent,
    ConvertToSpacesPipe,

  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', 
        component: ProductsDetailComponent,
        canActivate: [ProductDetailGuard]
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
