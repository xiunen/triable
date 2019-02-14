function Triable (obj) {
  this._data = obj;
}

Triable.prototype.try = function (prop) {
  if(typeof this._data !== 'object'){
    return new Triable();
  }
  return new Triable(this._data[prop]);
}

Triable.prototype.getValue = function () {
  return this._data;
}

module.exports = Triable;
