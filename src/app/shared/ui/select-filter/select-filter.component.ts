import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent {
  @Input() options: { value: string; label: string }[] = []
  @Input() selectedValue = ''
  @Input() bgColor = 'bg-gray-700'
  @Input() textColor = 'text-gray-100'
  @Input() borderColor = 'border-gray-600'
  @Output() valueChange = new EventEmitter<string>()

  onChange(event: Event) {
    this.valueChange.emit((event.target as HTMLSelectElement).value)
  }
}
