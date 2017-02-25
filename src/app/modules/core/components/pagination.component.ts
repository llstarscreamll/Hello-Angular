import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from './../models/pagination';

@Component({
  selector: 'app-pagination',
  template: `
    <nav class="text-right">
      <ul class="pagination pull right">
        <li class="" [ngClass]="{ 'disabled': !pagination?.links?.previous }"><a href="#">Previous</a></li>
        <li class="" [ngClass]="{ 'disabled': !pagination?.links?.next }"><a href="#">Next</a></li>
      </ul>
    </nav>
    <div class="text-right">
      Mostrando {{ pagination?.count }} de {{ pagination?.total }} registros
    </div>
  `,
})
export class PaginationComponent implements OnInit {

  @Input() pagination: Pagination;

  public constructor() { }

  public ngOnInit() { }

}