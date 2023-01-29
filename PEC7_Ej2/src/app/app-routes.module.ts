import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineNewComponent } from './wine-new/wine-new.component';
import { WinelistComponent } from './winelist/winelist.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WineDetailsComponent } from './wine-details/wine-details.component';
import { AuthGuard } from './guards/auth.guard';
import { WineLoadResolverService } from './service/wine-load-resolver.service';

const appRoutes: Routes = [       
  { path: '', redirectTo: '/login', pathMatch: 'full' },                
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wines/list', component: WinelistComponent, canActivate: [AuthGuard] },
  { path: 'wines/create', component: WineNewComponent ,  canActivate: [AuthGuard] },
  { path: 'wine/:code', component: WineDetailsComponent, canActivate: [AuthGuard], resolve: WineLoadResolverService},
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
