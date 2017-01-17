import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontComponent implements OnInit {

  public constructor() { }

  ngOnInit() { }

}
