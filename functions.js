'use strict';
//pure functions
const money_pile = 5; 
const remove_repetition = function rr(xs, h = xs.shift()) { // remove repetition from array
  return h ? (xs.indexOf(h) < 0 ? [h] : []).concat(rr(xs.filter((x) => {return x != h;}))) : [];
};
const winbid = xs => Math.max(...remove_repetition(xs)); // winbid considering overlaps
const winner = xs => xs.indexOf(winbid([...xs])); // winner considering overlaps
const prize = (xs, g = 0, m = money_pile) => xs.reduce((memo, x) => memo + x + m, g);

//closure

function bankroll(bank) { //closure return test function to check if 
  return function(n) {
    bank -= n;
    if (bank < 0) return false;
    else return true;
  }
};

module.exports = {
  remove_repetition: remove_repetition,
  winbid: winbid,
  winner: winner,
  bankroll: bankroll
};
