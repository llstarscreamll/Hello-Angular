import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basic-search',
  template: `
  <form name="basicSearch" (ngSubmit)="search.emit({search: searchText, page: 1})">
    <div class="input-group">
      <input [(ngModel)]="searchText" name="searchText" class="form-control" placeholder="Buscar..." aria-label="Text input with segmented button dropdown">
      <div class="input-group-btn">
        <button type="submit" class="btn btn-default">
          <span class="glyphicon glyphicon-search"></span>
        </button>
      </div>
    </div>
  </form>
  `,
  styles: [':host { display: block; }']
})
export class BasicSearchComponent implements OnInit {

  @Output() search = new EventEmitter<{}>();
  public searchText: string;

  constructor() { }
  ngOnInit() { }
}