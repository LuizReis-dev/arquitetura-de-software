import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const action = await prisma.genre.create({ data: { name: 'Action' } });
  const drama = await prisma.genre.create({ data: { name: 'Drama' } });
  const comedy = await prisma.genre.create({ data: { name: 'Comedy' } });

  const actor1 = await prisma.actor.create({ data: { name: 'Leonardo DiCaprio', birthdate: new Date('1974-11-11') } });
  const actor2 = await prisma.actor.create({ data: { name: 'Morgan Freeman', birthdate: new Date('1937-06-01') } });
  const actor3 = await prisma.actor.create({ data: { name: 'Scarlett Johansson', birthdate: new Date('1984-11-22') } });

  await prisma.movie.create({
  data: {
    title: 'Inception',
    year: 2010,
    actors: {
      connect: [{ id: actor1.id }]
    },
    genres: {
      connect: [{ id: action.id }, { id: drama.id }]
    }
  }
});

await prisma.movie.create({
  data: {
    title: 'Lucy',
    year: 2014,
    actors: {
      connect: [{ id: actor3.id }]
    },
    genres: {
      connect: [{ id: action.id }, { id: comedy.id }]
    }
  }
});

await prisma.movie.create({
  data: {
    title: 'The Shawshank Redemption',
    year: 1994,
    actors: {
      connect: [{ id: actor2.id }]
    },
    genres: {
      connect: [{ id: drama.id }]
    }
  }
});



  console.log('Seeds criadas com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
