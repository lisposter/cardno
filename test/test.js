var should = require('should');
var cardno = require('..');

var no = '4111111111111111';
var no2 = '4111-1111-1111-1111';

describe('cardno', function() {
  it('should validate the card number', function() {
    cardno.validate(no).should.be.True;
  });

  it('should can detect the card issue', function() {
    cardno.is(no)[0].should.be.exactly('Visa');
  });

  it('should can parse a card number string', function() {
    cardno.normalize(no).should.be.exactly(no);
  });
});
