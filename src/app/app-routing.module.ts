import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ListaComponent } from './usuarios/lista/lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { AboutComponent } from './shared/about/about.component';

const routes: Routes = [
  { path: 'home', component: ListaComponent},
  { path: 'usuario/:id', component: UsuarioComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
