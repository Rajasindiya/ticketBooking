import { Component, OnInit } from '@angular/core';
import { busLists } from 'src/assets/mock-data';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.scss']
})
export class BusDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
busLists = busLists
}
