import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ListaComponent, UsuarioComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
