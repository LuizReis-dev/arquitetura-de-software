export class Resume {
  name: string;
  contact: string;
  experiences: Array<{ role: string; company: string; period: string }>;
  educations: Array<{ degree: string; institution: string; period: string }>;

  constructor(name: string, contact: string, experiences: any[], educations: any[]) {
    this.name = name;
    this.contact = contact;
    this.experiences = experiences;
    this.educations = educations;
  }

  // Somente dados, sem lógica de serialização
}
