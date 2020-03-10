import _ from 'lodash';

// User model
import User from '../../model/User';

const Mutation = {
    async createUser(parent, args, context, info) {
        const inputData = _.pick(args.user, ['email', 'name', 'password', 'address', 'birthday']);
        const user = new User(inputData);
        const savedUser = await user.save();
        return savedUser;
    },
};

export default Mutation;
