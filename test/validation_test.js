const assert = require('assert');
const User = require('../src/user');

describe('Validation of Records',() => {
  it('requires a username', (done) => {
    const user = new User({name: 'Rohit'});
    const validationResult = user.validateSync();
    console.log(validationResult);
    /* assert ( message === 'Name is required.');*/
     done();
  });
});
