"use strict";
(function() {
  var cardno = {};

  /**
   * parse a string to a normalize card number string
   * @param  {String} no the raw string
   * @return {String}    normalized string
   */
  cardno.normalize = function(no) {
    if (typeof no === 'number') {
    no = no.toString();
    };

    no = no.replace(/\s/g, '');
    no = no.replace(/\-/g, '');

    return no;
  };

  /**
   * validate is the number is a creditcard number
   * using luhn10 algorithm
   * taken from https://gist.github.com/ShirtlessKirk/2134376
   * @param  {String}
   * @return {Boolean}
   */
  cardno.validate = cardno.luhn = (function(arr) {
    return function(ccNum) {
      var len = ccNum.length,
        bit = 1,
        sum = 0,
        val;
      while (len) {
        val = parseInt(ccNum.charAt(--len), 10);
        sum += (bit ^= 1) ? arr[val] : val;
      }
      return sum && sum % 10 === 0;
    };
  }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));


  /**
   * detect which card association does this number belongs to
   * @param  {String}
   * @return {Array}
   */
  cardno.is = function(num) {

    /*
    patterns for the BIN
     */
    var patterns = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?/,

    Amex: /^3[47][0-9]{13}$/,

    CarteBlanche: /^389[0-9]{11}$/,

    DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,

    Discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,

    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,

    InstaPayment: /^63[7-9][0-9]{13}$/,

    Laser: /^(6304|6706|6709|6771)[0-9]{12,15}$/,

    Maestro: /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/,

    Solo: /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/,

    Switch: /^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/,

    UnionPay: /^(62[0-9]{14,17})$/,

    KoreanLocalCard: /^9[0-9]{15}$/,

    BCGlobal: /^(6541|6556)[0-9]{12}$/
    };

    return Object.keys(patterns).filter(function(type) {
    return patterns[type].test(num);
    });
  };


  // Node.js & io.js
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = cardno;
  }

  // AMD / RequireJS
  else if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
      return cardno;
    });
  }

  // inline
  else {
    this.cardno = cardno;
  }

})();
