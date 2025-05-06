import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() type = 'text'
  @Input() placeholder = 'Search...'
  @Input() value = ''
  @Input() bgColor = 'bg-gray-700'
  @Input() textColor = 'text-gray-100'
  @Input() borderColor = 'border-gray-600'
  @Input() placeholderColor = 'placeholder-gray-400'
  @Input() iconColor = 'text-gray-400'
  @Output() searchChange = new EventEmitter<string>()

  onInput(event: Event) {
    this.searchChange.emit((event.target as HTMLInputElement).value)
  }
}
