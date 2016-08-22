'use strict';
const f = require('./functions.js');
class Player{
  constructor(){
   this.bank_check = f.bankroll(100);
  }
}
