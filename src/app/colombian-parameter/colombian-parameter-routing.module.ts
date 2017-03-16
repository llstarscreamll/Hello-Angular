import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../auth/guards/auth';
import { ListAndSearchDocumentTypesPage } from './containers/document-type/list-and-search-document-types.page';
import { CreateDocumentTypePage } from './containers/document-type/create-document-type.page';
import { DocumentTypeDetailsPage } from './containers/document-type/document-type-details.page';
import { EditDocumentTypePage } from './containers/document-type/edit-document-type.page';

const routes: Routes = [
  {
    path: 'document-type', canActivate: [AuthGuard], children: [
      { path: '', component: ListAndSearchDocumentTypesPage, pathMatch: 'full' },
      { path: 'create', component: CreateDocumentTypePage },
      { path: ':id', component: DocumentTypeDetailsPage },
      { path: ':id/edit', component: EditDocumentTypePage },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DocumentTypeRoutingModule { }
