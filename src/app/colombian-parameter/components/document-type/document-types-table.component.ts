import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocumentType } from './../../models/documentType';
import { Pagination } from './../../../core/models/pagination';

@Component({
  selector: 'document-types-table-component',
  templateUrl: './document-types-table.component.html',
  styleUrls: ['./document-types-table.component.css']
})
export class DocumentTypesTableComponent implements OnInit {
	
	@Input() columns = [];
	@Input() documentTypes: DocumentType[] = [];
  @Input() sortedBy: String = '';
  @Input() orderBy: String = '';
  @Output() sortLinkClicked = new EventEmitter<Object>();
  public translateKey: String = "DOCUMENT_TYPE";

  constructor() { }

  ngOnInit() { }

  showColumn(column): boolean {
  	return this.columns.indexOf(column) > -1;
  }

}
