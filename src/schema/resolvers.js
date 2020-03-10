// Resolvers, just mergin all resolvers into one file
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const resolvers = {
    Query,
    Mutation,
};

export default resolvers;
