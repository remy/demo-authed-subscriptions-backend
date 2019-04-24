const users = [
  { username: 'rem', password: 'rem' },
  { username: 'rem', password: 'rem' },
  { username: 'rem', password: 'rem' }
];

const Types = {
  Count: parent => 0 //getCount(parent.username)
};

const Query = {
  me: (parent, args, { user }) => {
    if (!user) {
      throw new Error('Not authorised');
    }

    return users.find(_ => _.username === user) || new Error('Not found');
  }
};

const Mutation = {
  bearerToken: (parent, args) => {
    // the bearer token is the user's username - this is obviously just test!
    const user = users.find(_ => _.username === args.username);
    if (!user) {
      throw new Error('Not authorised');
    }

    return user;
  }
};

module.exports = {
  ...Types,
  Query,
  Mutation
};
