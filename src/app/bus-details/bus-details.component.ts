import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusService } from '../bus.service';
@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent implements OnInit {

  busLists:any;
  availableSeats:any;
  constructor(public route:ActivatedRoute) { 
   }

  ngOnInit(): void {
    this.route.data.subscribe((data) =>{
      this.busLists= data['buses'];
    });
  }
  selectedBus:string = "";
  totalCost:string = "0";
  seatingCost:number = 0;
  nonAc:boolean = false;
  ac:boolean = false;
 
  bookBus(bus:any) {
    this.selectedBus = bus.name;
  }
  acBus(event:any) {
    if (!this.ac) {
      this.nonAc = !this.nonAc;
    }
    if (!this.nonAc) {
      this.seatingCost = 0;
    } else if(!this.ac) {
      this.seatingCost = parseFloat(event.innerText)
    }
  }
  nonAcBus(event:any) {
    if (!this.nonAc) {
      this.ac = !this.ac;
    }
    if (!this.ac) {
      this.seatingCost = 0;
    } else if(!this.nonAc) {
      this.seatingCost = parseFloat(event.innerText)
    }
  }
  viewCost(event:any) {
    this.totalCost = event
  }
}
