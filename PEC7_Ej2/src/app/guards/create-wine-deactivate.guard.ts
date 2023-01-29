import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,
         CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { WineNewComponent } from '../wines/wine-new/wine-new.component';


@Injectable()
export class CreateWineDeactivateGuard
    implements CanDeactivate<WineNewComponent> {
  canDeactivate(component: WineNewComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm('Do you want to navigate away from this page?');
  }
}