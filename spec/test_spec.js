describe('functions',function(){
  var f = require('../functions.js');
  it('winbid should return max value without repetition',function(){
    var test_case = [2,3,4,4,5,3,5];
    expect(f.winbid(test_case)).toBe(2);
  });
});

