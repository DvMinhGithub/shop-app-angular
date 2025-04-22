import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { PaginationComponent } from './components/pagination/pagination.component'
import { ProductCardSkeletonComponent } from './components/product-card-skeleton/product-card-skeleton.component'
import { ProductCardComponent } from './components/product-card/product-card.component'

@NgModule({
  declarations: [PaginationComponent, ProductCardComponent, ProductCardSkeletonComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, RouterModule, PaginationComponent, ProductCardComponent, ProductCardSkeletonComponent]
})
export class SharedModule {}
