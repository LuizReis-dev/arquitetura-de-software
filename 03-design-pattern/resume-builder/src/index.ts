import readline from 'readline';
import { ResumeBuilder } from './ResumeBuilder';
import { TxtSaveStrategy } from './TxtSaveStrategy';
import { JsonSaveStrategy } from './JsonSaveStrategy';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('\n--- Montagem de Currículo ---');
  const resumeBuilder = ResumeBuilder.getInstance();

  const name = await ask('Nome: ');
  if (name.toLowerCase() === 'sair') return;
  resumeBuilder.withName(name);
  let resume = resumeBuilder.build();

  const contact = await ask('Contato: ');
  if (contact.toLowerCase() === 'sair') return;
  resumeBuilder.withContact(contact);
  resume = resumeBuilder.build();

  while (true) {
    const role = await ask('Cargo (ou "sair" para terminar): ');
    if (role.toLowerCase() === 'sair') break;
    const company = await ask('Empresa: ');
    const period = await ask('Período: ');
    resumeBuilder.addExperience(role, company, period);
    resume = resumeBuilder.build();
  }

  while (true) {
    const degree = await ask('Formação (ou "sair" para terminar): ');
    if (degree.toLowerCase() === 'sair') break;
    const institution = await ask('Instituição: ');
    const period = await ask('Período: ');
    resumeBuilder.addEducation(degree, institution, period);
    resume = resumeBuilder.build();
  }

  // Pergunta formato de salvamento
  let format = '';
  const strategies = {
    txt: {
      strategy: new TxtSaveStrategy(),
      filename: `./${name}_curriculo.txt`,
      message: 'Currículo salvo em TXT!'
    },
    json: {
      strategy: new JsonSaveStrategy(),
      filename: `./${name}_curriculo.json`,
      message: 'Currículo salvo em JSON!'
    }
  };
  while (!(format in strategies)) {
    format = (await ask('Salvar currículo em qual formato? (txt/json): ')).toLowerCase();
  }
  const { strategy, filename, message } = strategies[format as keyof typeof strategies];
  strategy.save(resume, filename);
  console.log(message);

  rl.close();
}
main();
