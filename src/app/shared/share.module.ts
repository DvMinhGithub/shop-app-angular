import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ButtonComponent } from './ui/button/button.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { ProductCardSkeletonComponent } from './components/product-card-skeleton/product-card-skeleton.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { FadeInDirective } from './directives/fade-in.directive'
import { SearchInputComponent } from './ui/search-input/search-input.component'
import { SelectFilterComponent } from './ui/select-filter/select-filter.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { NewsletterSubscriptionComponent } from './ui/newsletter-subscription/newsletter-subscription.component'
import { LazyLoadDirective } from './directives/lazyLoadDirective';
import { LazySectionComponent } from './components/lazy-section/lazy-section.component'

@NgModule({
  declarations: [
    PaginationComponent,
    ProductCardComponent,
    ProductCardSkeletonComponent,
    ButtonComponent,
    FadeInDirective,
    SearchInputComponent,
    SelectFilterComponent,
    SearchFilterComponent,
    NewsletterSubscriptionComponent,
    LazyLoadDirective,
    LazySectionComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    CommonModule,
    RouterModule,
    PaginationComponent,
    ProductCardComponent,
    ProductCardSkeletonComponent,
    ButtonComponent,
    FadeInDirective,
    SearchInputComponent,
    SelectFilterComponent,
    SearchFilterComponent,
    NewsletterSubscriptionComponent,
    LazySectionComponent,
    LazyLoadDirective
  ]
})
export class SharedModule { }
