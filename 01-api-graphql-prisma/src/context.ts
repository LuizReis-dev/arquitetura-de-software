import { PrismaClient } from '../generated/prisma';
import { MovieDataSource } from './movie/datasource';
import { MovieService } from './movie/service';
import { ActorDataSource } from './actor/datasource';
import { ActorService } from './actor/service';
import { GenreDataSource } from './genre/datasource';
import { GenreService } from './genre/service';

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  movieService: MovieService;
  actorService: ActorService;
  genreService: GenreService;
}

const context = (): Context => {
  const movieDataSource = new MovieDataSource(prisma);
  const movieService = new MovieService(movieDataSource);
  const actorDataSource = new ActorDataSource(prisma);
  const actorService = new ActorService(actorDataSource);
  const genreDataSource = new GenreDataSource(prisma);
  const genreService = new GenreService(genreDataSource);

  return {
    prisma,
    movieService,
    actorService,
    genreService,
  };
};

export default context;