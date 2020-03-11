import _ from 'lodash';

const Mutation = {
    async createUser(parent, args, { User }, info) {
        const inputData = _.pick(args.user, ['email', 'name', 'password', 'address', 'birthday']);
        const user = new User(inputData);
        const savedUser = await user.save();
        return savedUser;
    },
};

export default Mutation;
