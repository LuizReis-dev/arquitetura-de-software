import MovieQuery = require("./movie/resolvers/query");
import MovieMutation = require("./movie/resolvers/mutation");
import ActorQuery = require("./actor/resolvers/query");
import ActorMutation = require("./actor/resolvers/mutation");
import GenreQuery = require("./genre/resolvers/query");
import GenreMutation = require("./genre/resolvers/mutation");
const resolvers = {
    Query: {
        ...MovieQuery,
        ...ActorQuery,
        ...GenreQuery
    },
    Mutation: {
        ...MovieMutation,
        ...ActorMutation,
        ...GenreMutation
    }
}

export default resolvers;