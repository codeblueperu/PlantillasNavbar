import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CboPerfilesComponent } from './components/cbo-perfiles/cbo-perfiles.component';
import { CboUsuariosComponent } from './components/cbo-usuarios/cbo-usuarios.component';



@NgModule({
  declarations: [
    CboPerfilesComponent,
    CboUsuariosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
