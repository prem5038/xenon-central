import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuBarComponent } from './side-menu-bar.component';
import { MaterialModule } from 'src/modules/shared/material/material.module';


@NgModule({
  declarations: [SideMenuBarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SideMenuBarComponent]

})
export class SideMenuBarModule { }
