import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { FormModelParser } from './../../../core/services/formModelParser';
import * as appMessage from './../../../core/reducers/appMessage';
import * as fromRoot from './../../../core/reducers';
import * as documentTypeReducer from './../../reducers/document-type.reducer';
import * as documentTypeActions from './../../actions/document-type.actions';
import { DocumentType } from './../../models/documentType';

@Component({
  selector: 'document-type-details-page',
  templateUrl: './document-type-details.page.html',
  styleUrls: ['./document-type-details.page.css']
})
export class DocumentTypeDetailsPage implements OnInit, OnDestroy {
	
	public documentTypeState$: Observable<documentTypeReducer.State>;
	public documentTypeForm: FormGroup;
	private formModelSubscription: Subscription;
	public appMessage$: Observable<appMessage.State>;
	public documentType$: Observable<DocumentType>;
	private documentTypeSubscription$: Subscription;
	private id;

  constructor(
  	private store: Store<fromRoot.State>,
  	private formModelParser: FormModelParser,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.documentTypeState$ = this.store.select(fromRoot.getDocumentTypeState);
  	this.documentType$ = this.store.select(fromRoot.getSelectedDocumentType);
    this.appMessage$ = this.store.select(fromRoot.getAppMessagesState);
    this.store.dispatch(new documentTypeActions.GetFormModelAction(null));
  	this.store.dispatch(new documentTypeActions.GetFormDataAction(null));

  	this.formModelSubscription = this.store.select(fromRoot.getDocumentTypeFormModel)
      .subscribe((model) => {
        this.documentTypeForm = this.formModelParser.toFormGroup(model);
      });

    this.route.params.subscribe(params => {
        this.id = params['id'];
        this.store.dispatch(new documentTypeActions.GetAction(this.id));
      });

    this.documentType$
  		.subscribe((documentType) => {
  			if (documentType != null)
  			this.documentTypeForm.patchValue(this.getDocumentTypeDetailsFormPatchValues(documentType));
  		});
  }

  public ngOnDestroy() {
    this.formModelSubscription.unsubscribe();
  }

  private getDocumentTypeDetailsFormPatchValues(documentType: DocumentType) {
  	return {
  		...documentType,
			created_at: documentType.created_at ? documentType.created_at.date : null,
			updated_at: documentType.updated_at ? documentType.updated_at.date : null,
			deleted_at: documentType.deleted_at ? documentType.deleted_at.date : null,
		};
  }
}
