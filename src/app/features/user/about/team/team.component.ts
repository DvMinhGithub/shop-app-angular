import { Component } from '@angular/core'
import { members } from './models/contant'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  members = members
}
