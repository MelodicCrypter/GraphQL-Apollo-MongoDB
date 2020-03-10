import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Query {
        hello: String!
        me: String!
    }

    type Mutation {
        createUser(user: AddUserInput): User!
    }

    input AddUserInput {
        email: String
        name: String
        password: String
        address: String
        birthday: String
    }

    type User {
        id: ID!
        email: String!
        name: String!
        password: String!
        address: String!
        birthday: String
    }
`;

export default typeDefs;
