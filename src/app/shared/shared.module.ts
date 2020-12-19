import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IMaskModule } from 'angular-imask';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IMaskModule
  ],
  exports: [
    // MODULOS
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IMaskModule,
    // COMPONENTES
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
