import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot }
  from '@angular/router';
import { Wine } from '../models/wine.model';
import { Observable } from 'rxjs';
import { WineServiceService } from '../service/wine-service.service';

@Injectable({
  providedIn: 'root'
})
export class WineLoadResolverService implements Resolve<Wine> {

  constructor(private wineService: WineServiceService) { }
  
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
      Wine | Observable<Wine> | Promise<Wine> {
        console.log('resolve code: ' + route.paramMap.get('code'));
        const wineCode = route.paramMap.get('code');
        return this.wineService.getWine(wineCode!);
      }
}
