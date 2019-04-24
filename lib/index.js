const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: 'schema.graphql',
  resolvers,
  playground: true,
  context: request => ({
    ...request,
    user: ({ request }) => {
      const auth = request.get('Authorization');
      if (auth) {
        return auth.replace(/^Bearer /i, '');
      }

      return null;
    }
  })
});

const port = process.env.PORT;

server.start({ port }, url => {
  console.log(`🚀📈 Server ready at http://localhost:${url.port}`);
});
