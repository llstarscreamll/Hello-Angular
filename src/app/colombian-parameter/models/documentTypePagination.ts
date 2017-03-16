import { Pagination } from './../../core/models/pagination';
import { DocumentType } from './documentType';

export class DocumentTypePagination {
	public data: DocumentType[];
	public pagination: { pagination: Pagination };
}
