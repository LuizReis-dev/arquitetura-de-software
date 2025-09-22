import { SaveStrategy } from './SaveStrategy';
import { Resume } from './Resume';
const fs = require('fs');

export class JsonSaveStrategy implements SaveStrategy {
  save(resume: Resume, filename: string): void {
    const obj = {
      nome: resume.name,
      contato: resume.contact,
      experiencia: resume.experiences,
      formacao: resume.educations
    };
    fs.writeFileSync(filename, JSON.stringify(obj, null, 2));
  }
}
