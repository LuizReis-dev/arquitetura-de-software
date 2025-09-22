import { SaveStrategy } from './SaveStrategy';
import { Resume } from './Resume';
const fs = require('fs');

export class TxtSaveStrategy implements SaveStrategy {
  save(resume: Resume, filename: string): void {
    let txt = `Nome: ${resume.name}\nContato: ${resume.contact}\n\nExperiência:\n`;
    resume.experiences.forEach(e => {
      txt += `- ${e.role} em ${e.company} (${e.period})\n`;
    });
    txt += '\nFormação:\n';
    resume.educations.forEach(ed => {
      txt += `- ${ed.degree} em ${ed.institution} (${ed.period})\n`;
    });
    fs.writeFileSync(filename, txt);
  }
}
