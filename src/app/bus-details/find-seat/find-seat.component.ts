import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-find-seat',
  templateUrl: './find-seat.component.html',
  styleUrls: ['./find-seat.component.scss']
})
export class FindSeatComponent implements OnInit {

  constructor() { }
  @Input() input : any;
  @Output() output:EventEmitter<Number> = new EventEmitter();
  ngOnInit(): void {
  }
  passengerCount(value:string) {
    if(this.input) {
      let cost = parseFloat(value) * this.input
      this.output.emit(cost);
    } else {
      alert("Select Seat")
    }
  }
}
