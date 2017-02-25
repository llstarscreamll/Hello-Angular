import { Component, Input, OnInit } from '@angular/core';
import { Pagination } from './../models/pagination';

@Component({
  selector: 'app-pagination',
  template: `
    <nav>
      <ul class="pagination pagination-lg pull-right">
        <li class="" [ngClass]="{ 'disabled': !pagination?.links?.previous }">
          <span role="button"><span aria-hidden="true">&laquo;</span></span>
        </li>
        <li class="" [ngClass]="{ 'disabled': !pagination?.links?.next }">
          <span role="button"><span aria-hidden="true">&raquo;</span></span>
        </li>
      </ul>
    </nav>
    <div class="clearfix"></div>
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