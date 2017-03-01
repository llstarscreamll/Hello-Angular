import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basic-search',
  template: `
        <form name="basicSearch" (ngSubmit)="search.emit({search: searchText})">
          <div class="input-group">
            <div class="input-group-btn">
              <div class="btn-group" dropdown>
                <button type="button" class="btn btn-default" dropdownToggle>
                  <span class="caret"></span>
                </button>
                <ul dropdownMenu role="menu" aria-labelledby="single-button" class="dropdown-menu dropdown-menu-right">
                  <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
                  <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
                  <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
                  <li class="divider dropdown-divider"></li>
                  <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
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