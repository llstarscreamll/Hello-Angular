import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-top-layout',
  templateUrl: './admin-lte-nav-top-layout.component.html',
  styleUrls: ['./admin-lte-nav-top-layout.component.css'],
})
export class AdminLteNavTopLayoutComponent implements OnInit {

  private viewPortHeight: number = window.innerHeight;

  constructor() { }

  ngOnInit() { }

}
