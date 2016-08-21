'use strict';
//pure functions
const money_pile = 5;
const remove_repetition =  function rr(xs,h=xs.shift()){ // remove repetition from array
  return  h ? (xs.indexOf(h) < 0 ? [h] : [] ).concat(rr(xs.filter((x)=>{ return x != h }))) : [];
}
const winbid = xs => Math.max(...remove_repetition(xs)); // winbid considering overlaps
const winner = xs => xs.indexOf(winbid([...xs])); // winner considering overlaps
const prize  = (xs,g=0,m = money_pile) => xs.reduce((memo,x)=>(memo+x+m),g);
const bankroll = function r(seed){
  return function(bet){
    if (seed - bankroll<0) return false;
    else return r(seed-bankroll);
  }
}


module.exports = {
  remove_repetition : remove_repetition,
  winbid : winbid,
  winner : winner,
  bankroll : bankroll
};
