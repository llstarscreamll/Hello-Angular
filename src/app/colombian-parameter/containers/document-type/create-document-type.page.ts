import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { FormModelParser } from './../../../core/services/formModelParser';
import * as appMessage from './../../../core/reducers/appMessage';
import * as fromRoot from './../../../core/reducers';
import * as documentTypeReducer from './../../reducers/document-type.reducer';
import * as documentTypeActions from './../../actions/document-type.actions';
import { DocumentType } from './../../models/documentType';

@Component({
  selector: 'create-document-type-page',
  templateUrl: './create-document-type.page.html',
  styleUrls: ['./create-document-type.page.css']
})
export class CreateDocumentTypePage implements OnInit, OnDestroy {

	public documentTypeState$: Observable<documentTypeReducer.State>;
	public documentTypeForm: FormGroup;
	private formModelSubscription: Subscription;
  public appMessage$: Observable<appMessage.State>;

  public constructor(
  	private store: Store<fromRoot.State>,
  	private formModelParser: FormModelParser
  ) { }

  public ngOnInit() {
  	this.documentTypeState$ = this.store.select(fromRoot.getDocumentTypeState);
    this.appMessage$ = this.store.select(fromRoot.getAppMessagesState);
    this.store.dispatch(new documentTypeActions.GetFormModelAction(null));
  	this.store.dispatch(new documentTypeActions.GetFormDataAction(null));

  	this.formModelSubscription = this.store.select(fromRoot.getDocumentTypeFormModel)
      .subscribe((model) => {
        this.documentTypeForm = this.formModelParser.toFormGroup(model);
      });
  }

  public ngOnDestroy() {
    this.formModelSubscription.unsubscribe();
  }

  public createDocumentType() {
    this.store.dispatch(new documentTypeActions.CreateAction(this.documentTypeForm.value));
  }
}
