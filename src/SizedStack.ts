export default class SizedStack<T> {
  private _maxSize: number;
  private _stack: T[];

  constructor(size?: number) {
    this._maxSize = size === undefined ? Infinity : size;
    this._stack = [];
  }

  private _insertOneItem(item: T) {
    this._stack.push(item);
  }

  private _shiftAndInsert(item: T) {
    this._stack.shift();
    this._insertOneItem(item);
  }

  push(...items: T[]) {
    items.forEach((item) => {
      this.isFull() ? this._shiftAndInsert(item) : this._insertOneItem(item);
    });
  }

  pushIfAvailable(...items: T[]) {
    items.forEach((item) => {
      if (!this.isFull()) this._insertOneItem(item);
    });
  }

  pop() {
    this._stack.pop();
  }

  top() {
    return this._stack.at(-1);
  }

  isFull() {
    return this._stack.length === this._maxSize;
  }

  isEmpty() {
    return this._stack.length === 0;
  }

  get size() {
    return this._stack.length;
  }

  toList() {
    return [...this._stack];
  }
}
