class ForagerBee extends Bee {
  // TODO..
  age = 10
  job = 'find pollen'
  canFly = true
  treasureChest = []
};

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};
