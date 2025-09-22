import { Resume } from './Resume';
export interface SaveStrategy {
  save(resume: Resume, filename: string): void;
}
