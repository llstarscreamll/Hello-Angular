import { Timestamps } from './../../core/models/date';

export class DocumentType {
	id: number;
	name: string;
	short_name: string;
	created_at: Timestamps;
	updated_at: Timestamps;
	deleted_at: Timestamps;
}
