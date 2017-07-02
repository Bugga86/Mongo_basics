const assert = require('assert');
const User = require('../src/user');

describe('Updating a value', () => {

beforeEach((done) => {
  joe = new User({name: 'Joe'});
  joe.save()
  .then(() => done());
});

function assertName(operation, done){
  operation
  .then(() => User.find({}))
  .then((users) => {
    assert(users.length === 1);
    assert(users[0].name === 'Rohit');
    done();
  });
}
 it('Instance type using set and save',(done) => {
   joe.set('name','Rohit');
   assertName(joe.save(),done);
   });

   it('A model instance update',(done) => {
   assertName(joe.update({name: 'Rohit'}),done);

   });

   it('A model class can update',(done) => {
    assertName(User.update({name: 'Joe'},{name: 'Rohit'}),done);
   });

   it('A model class can update one record',(done) => {
     assertName(User.findOneAndUpdate({name: 'Joe'},{name: 'Rohit'}),done);
   });

   it('A model class can find and update',(done) => {
     assertName(User.findByIdAndUpdate(joe._id,{name: 'Rohit'}),done);
   })
 });
