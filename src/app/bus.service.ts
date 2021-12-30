import { Injectable } from '@angular/core';
import * as busDetails from './mock-data.json';
@Injectable({
  providedIn: 'root',
})
export class BusService {
  constructor() {}
 
  busLists = (busDetails as any).default;

  getDetails() {
    return this.busLists;
  }
}
