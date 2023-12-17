import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '@views/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from '@views/layouts/main-layout/main-layout.component';
import { AuthGuard } from './data/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('@views/auth/auth.module').then((m) => m.AuthModule)
      }
    ]
  },
  {
    path:'',
    component:MainLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'dashboard',
        loadChildren: () => import('@views/home/home.module').then((m) => m.HomeModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
