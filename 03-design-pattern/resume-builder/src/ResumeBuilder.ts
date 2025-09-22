import { Resume } from './Resume';

export class ResumeBuilder {
  private static instance: ResumeBuilder;
  private name: string = '';
  private contact: string = '';
  private experiences: Array<{ role: string; company: string; period: string }> = [];
  private educations: Array<{ degree: string; institution: string; period: string }> = [];

  private constructor() {
    this.reset();
  }

  public static getInstance(): ResumeBuilder {
    if (!ResumeBuilder.instance) {
      ResumeBuilder.instance = new ResumeBuilder();
    }
    ResumeBuilder.instance.reset();
    return ResumeBuilder.instance;
  }

  public reset(): this {
    this.name = '';
    this.contact = '';
    this.experiences = [];
    this.educations = [];
    return this;
  }

  public withName(name: string): this {
    this.name = name;
    return this;
  }

  public withContact(contact: string): this {
    this.contact = contact;
    return this;
  }

  public addExperience(role: string, company: string, period: string): this {
    this.experiences.push({ role, company, period });
    return this;
  }

  public addEducation(degree: string, institution: string, period: string): this {
    this.educations.push({ degree, institution, period });
    return this;
  }

  public build(): Resume {
    return new Resume(this.name, this.contact, this.experiences, this.educations);
  }
}
