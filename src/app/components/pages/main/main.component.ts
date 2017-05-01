import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'HELLO';
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  loginOut() {
    this.router.navigate(['/login']);
  }
}
