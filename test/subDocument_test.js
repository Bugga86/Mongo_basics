const assert = require('assert');
const User = require('../src/user');

describe('Subdocument',() => {
  it('can create a subdocument',(done) => {
    const joe = new User({
      name: 'Joe',
//      posts: [{title:'Software Engineer'}],
      posts: [{title:'Software Engineer' , salary: 2000}]
    });
    joe.save()
    .then(() => User.findOne({ name: 'Joe'}))
    .then((user) => {
      assert( user.posts[0].salary === 2000);
      assert( user.posts[0].title === 'Software Engineer');
      done();
    });

    it('can add multiple Subdocuments', (done) => {
      const joe = new User({
          name : 'Joe',
          posts: []
      });
      joe.save()
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        user.posts.push({title: 'Team leader'});
        return user.save();
      })
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        assert(user.posts[0].title === 'Team leader');
        done();
      });
    });

  });
});
