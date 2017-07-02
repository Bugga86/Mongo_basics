const assert = require('assert');
const User = require('../src/user');

describe('Reading user from the User Model', () => {
// let joe;
 beforeEach((done) => {
   joe = new User({ name : 'Joe'});
   joe.save()
   .then(()=> done());
 });
  it('Finds all users with the name Joe',(done) => {
    User.find({ name: 'Joe'})
    .then((users) => {
      assert(users[0]._id.toString() === joe._id.toString());
      done()
    });
  });

  it('Try to find one specific user',(done) => {
    User.findOne({_id: joe._id})
    .then((user) =>
     {
       assert (user.name === 'Joe');
       done();
     })

  })
});
