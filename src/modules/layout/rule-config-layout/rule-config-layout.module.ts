import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleConfigLayoutComponent } from './rule-config-layout.component';

import { MaterialModule } from 'src/modules/shared/material/material.module';


@NgModule({
  declarations: [RuleConfigLayoutComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [RuleConfigLayoutComponent]
})
export class RuleConfigLayoutModule { }
