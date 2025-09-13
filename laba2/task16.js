Array.prototype.square = function() {
  return this.map(x => x * x);
}

Array.prototype.cube = function() {
  return this.map(x => x * x * x);
}

Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
}

Array.prototype.average = function() {
  return this.sum() / this.length;
}

Array.prototype.even = function() {
  return this.filter(x => x % 2 === 0);
}

Array.prototype.odd = function() {
  return this.filter(x => x % 2 !== 0);
}