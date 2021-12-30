import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  from: String = '';
  to: String = '';
  exchange() {
    let temp = this.from;
    this.from = this.to;
    this.to = temp;
  }
  
}
