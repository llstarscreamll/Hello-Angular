import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from './../models/pagination';

@Component({
  selector: 'app-pagination',
  template: `
    <nav>
      <ul class="pagination pagination-md pull-right">
        <li class="" [ngClass]="{ 'disabled': !pagination?.links?.previous }">
          <span (click)="emitClickEvent(false)" role="button"><span aria-hidden="true">&laquo;</span></span>
        </li>
        <li class="" [ngClass]="{ 'disabled': !pagination?.links?.next }">
          <span (click)="emitClickEvent(true)" role="button"><span aria-hidden="true">&raquo;</span></span>
        </li>
      </ul>
    </nav>
    <div class="clearfix"></div>
    <div class="text-right">
      Página {{ pagination?.current_page }} de {{ pagination?.total_pages }}
    </div>
  `,
})
export class PaginationComponent implements OnInit {

  @Input() pagination: Pagination;
  @Output() pageLinkClicked = new EventEmitter<any>();

  public constructor() { }

  public ngOnInit() { }

  public emitClickEvent(next: boolean = true) {
    let page = next ? this.getNextPage() : this.getPreviosPage();

    if (page != this.pagination.current_page) return this.pageLinkClicked.emit({'page': page});
  }

  public getNextPage(): Number {
    let nextPage = this.pagination.current_page;

    if (this.pagination.current_page < this.pagination.total_pages) {
      nextPage = this.pagination.current_page + 1;
    }

    return nextPage;
  }

  public getPreviosPage(): Number {
    let nextPage = this.pagination.current_page;

    if (this.pagination.current_page > 1) {
      nextPage = this.pagination.current_page - 1;
    }

    return nextPage;
  }

}