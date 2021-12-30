import { Component, OnInit } from '@angular/core';
import { BusService } from '../bus.service';
@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent implements OnInit {
  
  busLists:any;
  constructor(private busService:BusService) {
    this.busLists = this.busService.getDetails(); 
   }

  ngOnInit(): void {
  }

}
