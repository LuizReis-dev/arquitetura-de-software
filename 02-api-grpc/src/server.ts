import * as grpc from '@grpc/grpc-js';
import * as protoLoader from "@grpc/proto-loader";
import path from 'path';
import { MovieDataSource } from './movie/movie.datasource';
import { MovieService } from './movie/movie.service';
import { MovieImplementation } from './movie/movie.implementation';
import { ActorDataSource } from './actor/actor.datasource';
import { ActorService } from './actor/actor.service';
import { ActorImplementation } from './actor/actor.implementation';
import * as fs from 'fs';
import { GenreDataSource } from './genre/genre.datasource';
import { GenreService } from './genre/genre.service';
import { GenreImplementation } from './genre/genre.implementation';

const PROTO_DIR = path.join(__dirname, '../proto/');

const protoFiles = fs.readdirSync(PROTO_DIR)
  .filter(file => file.endsWith('.proto'))
  .map(file => path.join(PROTO_DIR, file));

const packageDefinition = protoLoader.loadSync(protoFiles, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const grpcObject: any = grpc.loadPackageDefinition(packageDefinition);

// Acesse cada package pelo nome que está no proto
const moviePackage = grpcObject.movie;
const actorPackage = grpcObject.actor;
const genrePackage = grpcObject.genre;

const movieDataSource = new MovieDataSource();
const movieService = new MovieService(movieDataSource);
const movieImplementation = new MovieImplementation(movieService);

const actorDataSource = new ActorDataSource();
const actorService = new ActorService(actorDataSource);
const actorImplementation = new ActorImplementation(actorService);

const genreDataSource = new GenreDataSource();
const genreService = new GenreService(genreDataSource);
const genreImplementation = new GenreImplementation(genreService);    

const server = new grpc.Server();
server.addService(moviePackage.MovieService.service, movieImplementation.getMovieImplementation());
server.addService(actorPackage.ActorService.service, actorImplementation.getActorImplementation());
server.addService(genrePackage.GenreService.service, genreImplementation.getGenreImplementation());

server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`🚀 Movie gRPC server running at http://127.0.0.1:${port}`);
    server.start();
  }
);
