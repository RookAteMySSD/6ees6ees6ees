class HoneyMakerBee extends Bee {
  // TODO..
  age = 10
  job = 'make honey'
  honeyPot = 0
};

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
};