import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [ButtonsComponent]
})
export class ButtonsModule { }
