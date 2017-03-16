import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { TranslateService } from 'ng2-translate';

import { Service } from './../../core/abstracts/service';
import { LocalStorageService } from './../../core/services/localStorage';
import { DocumentTypePagination } from './../models/documentTypePagination';
import { DocumentType } from './../models/documentType';
import { AppMessage } from './../../core/models/appMessage';

@Injectable()
export class DocumentTypeService extends Service {
	
	protected API_ENDPOINT: string = 'document-types';
  public langNamespace: string = 'DOCUMENT_TYPE';
  public fieldsLangNamespace: string = 'DOCUMENT_TYPE.fields.document_types.';

	public constructor(
    private http: Http,
    private localStorageService: LocalStorageService,
    private translate: TranslateService,
  ) {
    super();
    this.headers.set('authorization', 'Bearer ' + this.localStorageService.getItem('token'));
  }

  /**
   * Process the load DocumentType request to the API.
   */
  public load(data: Object = {}): Observable<DocumentTypePagination> {
    let searchParams = this.parseGetParams(data);

    return this.http
      .get(this.apiEndpoint(), { headers: this.headers, search: searchParams })
      .map(res => { return { data: res.json().data, pagination: res.json().meta.pagination } })
      .catch(this.handleError);
  }

  public create(data: Object) {
    return this.http
      .post(this.apiEndpoint('create'), data, { headers: this.headers })
      .map(res => { return res.json().data })
      .catch(this.handleError);
  }

  public getDocumentTypeFormModel() {
    return this.http
      .get(this.apiEndpoint('form-model/document-type'), { headers: this.headers })
      .map(res => {return res.json()})
      .catch(this.handleError);
  }

  public getDocumentType(id) {
    let urlParams: URLSearchParams = new URLSearchParams;
    urlParams.set('include', '');
    return this.http
      .get(this.apiEndpoint(id), { headers: this.headers, search: urlParams })
      .map(res => { return res.json().data })
      .catch(this.handleError);
  }

  public getDocumentTypeFormData() {
    return this.http
      .get(this.apiEndpoint('form-data/document-type'), { headers: this.headers })
      .map(res => { return res.json() })
      .catch(this.handleError);
  }

  public getSuccessCreationMessage(): AppMessage {
    let msg: string;

    this.translate.get(this.langNamespace + '.msg.create_succcess').subscribe(val => msg = val);

    let appMessage: AppMessage = {
      message: msg,
      date: new Date(),
      errors: {},
      type: 'success',
      status_code: 200
    };

    return appMessage;
  }
}