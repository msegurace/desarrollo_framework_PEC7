import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinelistComponent } from './wine-list/wine-list.component';
import { AuthGuard } from '../guards/auth.guard';
import { WineNewComponent } from './wine-new/wine-new.component';
import { CreateWineDeactivateGuard } from '../guards/create-wine-deactivate.guard';
import { WineDetailsComponent } from './wine-details/wine-details.component';
import { WineLoadResolverService } from '../guards/wine-load-resolver.service';


const routes: Routes = [
  { path: 'list', component: WinelistComponent,
    canActivate: [AuthGuard] },
  { path: 'create', component: WineNewComponent,
    canActivate: [AuthGuard],
    canDeactivate: [CreateWineDeactivateGuard] },
  { path: ':code', component: WineDetailsComponent,
    canActivate: [AuthGuard],
    resolve: { wine: WineLoadResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }
