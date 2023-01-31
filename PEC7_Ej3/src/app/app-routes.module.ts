import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [       
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },                
  { path: 'wine', loadChildren: () => import('./wine/wine.module').then(m => m.WineModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: '/register' }  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),   
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
