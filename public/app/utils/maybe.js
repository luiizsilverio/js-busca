export class Maybe {

  constructor (value) {
    this._value = value;
  }

  static of(value) {
    return new Maybe(value);
  }

  isEmpty() {
    return this._value === null || this._value === undefined;
  }

  map(fn) {
    if (this.isEmpty()) return Maybe.of(null);
    const value = fn(this._value);
    return Maybe.of(value);
  }

  getDef(value) {
    if (this.isEmpty()) return value;
    return this._value;
  }
}