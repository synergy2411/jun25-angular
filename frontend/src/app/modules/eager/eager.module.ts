import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmEagerComponent } from './components/i-am-eager/i-am-eager.component';

@NgModule({
  declarations: [IAmEagerComponent],
  imports: [CommonModule],
  exports: [IAmEagerComponent],
})
export class EagerModule {}
