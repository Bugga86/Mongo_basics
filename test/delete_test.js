const assert = require('assert');
const User = require('../src/user');

describe('Deleting a User',() => {

 beforeEach((done) => {
   joe = new User({name: 'Joe'});
   joe.save()
   .then(() => done());
 });
  it('Deleting a value from Model instance',(done) => {
    joe.remove()
    .then(() => User.findOne({name: 'Joe'}))
    .then((user) => {
      assert(user === null);
      done();
    });
  });

  it('Class method remove',(done) => {
    User.remove({name: 'Joe'})
    .then(() => User.findOne({name: 'Joe'}))
    .then((user) => {
      assert(user === null);
      done();
    })
  });

  it('Class Method findOneAndRemove',(done) => {
    User.findOneAndRemove({name: 'Joe'})
    .then(() => User.findOne({name: 'Joe'}))
    .then((user) => {
      assert(user === null);
      done();
    })
  });

  it('Class Method findByIdAndRemove',(done) =>{
    User.findByIdAndRemove(joe._id)
    .then(() => User.findOne({name: 'Joe'}))
    .then((user) => {
      assert(user === null);
      done();
    })
  })
});
