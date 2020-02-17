import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderModule } from 'src/modules/navigation/toolbar/header/header.module';
import { SideMenuBarModule } from 'src/modules/navigation/sidenav/side-menu-bar/side-menu-bar.module';
import { RuleConfigLayoutModule } from 'src/modules/layout/rule-config-layout/rule-config-layout.module';

import { MaterialModule } from 'src/modules/shared/material/material.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HeaderModule,
    SideMenuBarModule,
    RuleConfigLayoutModule
  ]
})
export class MainLayoutModule { }
