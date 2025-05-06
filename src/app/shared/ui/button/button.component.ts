import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button'
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary'
  @Input() disabled = false
  @Output() click = new EventEmitter<Event>()

  getButtonClasses(): string {
    const baseClasses = 'px-8 py-3 rounded-lg font-medium transition duration-300'

    switch (this.variant) {
      case 'primary':
        return `${baseClasses} bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105`
      case 'secondary':
        return `${baseClasses} bg-gray-600 hover:bg-gray-700 text-white`
      case 'outline':
        return `${baseClasses} bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white`
      default:
        return baseClasses
    }
  }
}


