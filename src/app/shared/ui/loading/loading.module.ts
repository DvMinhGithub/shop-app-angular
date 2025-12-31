import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Loading } from './loading'

@NgModule({
  declarations: [Loading],
  imports: [CommonModule],
  exports: [Loading]
})
export class LoadingModule {}