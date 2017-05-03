import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.message = 'Hello ' + this.name;
  }
}
