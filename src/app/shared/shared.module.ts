import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [NavbarComponent, AboutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
