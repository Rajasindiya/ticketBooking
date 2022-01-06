import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BusService } from '../bus.service';

@Injectable({
  providedIn: 'root'
})
export class BusResolverResolver implements Resolve<boolean> {

  constructor(public service:BusService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.service.getDetails();
  }
}
