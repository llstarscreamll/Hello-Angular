import { EffectsModule } from '@ngrx/effects';
import { DocumentTypeEffects } from './document-type.effects';

export const EFFECTS = [
  EffectsModule.run(DocumentTypeEffects),
];
