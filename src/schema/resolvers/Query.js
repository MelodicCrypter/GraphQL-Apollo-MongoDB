const Query = {
    async hello(parent, args, context, info) {
        return 'Hi there!';
    },
    async me(parent, args, context, info) {
        return 'Hey name';
    },
};

export default Query;
