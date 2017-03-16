import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import * as fromRoot from './../../../core/reducers';
import * as documentTypeReducer from './../../reducers/document-type.reducer';
import * as documentTypeActions from './../../actions/document-type.actions';
import { DocumentType } from './../../models/documentType';

@Component({
  selector: 'list-and-search-document-types-page',
  templateUrl: './list-and-search-document-types.page.html',
  styleUrls: ['./list-and-search-document-types.page.css']
})
export class ListAndSearchDocumentTypesPage implements OnInit {
	
	public documentTypeState$: Observable<documentTypeReducer.State>;

  /**
   * The search query options.
   */
  public queryData: Object = {
    // here we decide what columns to retrive from API
    filter: [
      'document_types.name',
      'document_types.short_name',
      'document_types.created_at',
    ],
    // the relations map, you know, we need some fields for eager load certain relations
    include: {
    },
    orderBy: "document_types.created_at",
    sortedBy: "desc",
    page: 1
  };

  public constructor(private store: Store<fromRoot.State>) { }

  public ngOnInit() {
  	this.documentTypeState$ = this.store.select(fromRoot.getDocumentTypeState);
  	this.onSearch();
  }

  public onSearch(data: Object = {}) {
    this.queryData = _.merge({}, this.queryData, data);
    this.store.dispatch(new documentTypeActions.LoadAction(this.queryData));
  }
}
