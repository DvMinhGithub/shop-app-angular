import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  @Output() searchChange = new EventEmitter<string>()
  @Output() filterChange = new EventEmitter<{ category: string; sort: string }>()

  searchQuery = ''
  selectedCategory = ''
  selectedSort = 'default'
  showMobileFilters = false

  categories = [
    { value: 'electronics', label: 'Điện tử' },
    { value: 'laptops', label: 'Laptop' },
    { value: 'phones', label: 'Điện thoại' },
    { value: 'accessories', label: 'Phụ kiện' }
  ]

  sortOptions = [
    { value: 'default', label: 'Mặc định' },
    { value: 'price_asc', label: 'Giá tăng dần' },
    { value: 'price_desc', label: 'Giá giảm dần' },
    { value: 'newest', label: 'Mới nhất' }
  ]

  onSearch(query: string) {
    this.searchChange.emit(query)
  }

  onFilterChange() {
    this.filterChange.emit({
      category: this.selectedCategory,
      sort: this.selectedSort
    })
  }

  onCategoryChange(value: string) {
    this.filterChange.emit({ category: value, sort: '' })
  }

  onSortChange(value: string) {
    this.filterChange.emit({ category: '', sort: value })
  }
}
