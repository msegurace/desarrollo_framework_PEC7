import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WineNewComponent } from './wines/wine-new/wine-new.component';
import { WinelistComponent } from './wines/wine-list/wine-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WineDetailsComponent } from './wines/wine-details/wine-details.component';
import { AuthGuard } from './guards/auth.guard';
import { WineLoadResolverService } from './guards/wine-load-resolver.service';
import { CreateWineDeactivateGuard } from './guards/create-wine-deactivate.guard';

const appRoutes: Routes = [       
  { path: '', redirectTo: '/login', pathMatch: 'full' },                
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wines/list', component: WinelistComponent, canActivate: [AuthGuard] },
  { path: 'wines/create', component: WineNewComponent ,  canActivate: [AuthGuard], canDeactivate: [CreateWineDeactivateGuard] },
  { path: 'wine/:code', component: WineDetailsComponent, canActivate: [AuthGuard], resolve: {wine: WineLoadResolverService} }, 
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
