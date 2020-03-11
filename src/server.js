import {} from 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

// Mongoose: User model
import User from './model/User';

// GraphQL Schema
import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';

// Express setting
const app = express();

// Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { User },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
