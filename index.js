'use strict';
const remove_repetition =  function rr(xs,h=xs.shift()){
  return  h ? [h,...rr(xs.filter((x)=>{ return x != h }))] : [];
}

module.exports = remove_repetition;
  
