class RetiredForagerBee extends ForagerBee {
  // TODO..
  age = 40
  job = 'gamble'
  canFly = false
  color = 'grey'
};

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead'
}

RetiredForagerBee.prototype.gamble = function(bet) {
  bet = bet || 'honey'
  this.treasureChest.push(bet)
}
