import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutModule } from '../modules/layout/main-layout/main-layout.module';
import { MainLayoutComponent } from 'src/modules/layout/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
