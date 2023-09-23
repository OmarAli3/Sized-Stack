/**
 * A stack data structure with a fixed maximum size.
 * @template T The type of elements stored in the stack.
 */
export default class SizedStack<T> {
  private _maxSize: number;
  private _stack: T[];

  /**
   * Creates a new SizedStack instance.
   * @param size The maximum number of elements the stack can hold. If not provided, the stack has infinite capacity.
   */
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

  /**
   * Adds one or more elements to the top of the stack.
   * @param items The elements to add to the stack.
   */
  push(...items: T[]) {
    items.forEach((item) => {
      this.isFull() ? this._shiftAndInsert(item) : this._insertOneItem(item);
    });
  }

  /**
   * Adds one or more elements to the top of the stack, if the stack is not full.
   * @param items The elements to add to the stack.
   */
  pushIfAvailable(...items: T[]) {
    items.forEach((item) => {
      if (!this.isFull()) this._insertOneItem(item);
    });
  }

  /**
   * Removes the top element from the stack.
   */
  pop() {
    this._stack.pop();
  }

  /**
   * Returns the top element of the stack without removing it.
   * @returns The top element of the stack, or undefined if the stack is empty.
   */
  top() {
    return this._stack.at(-1);
  }

  /**
   * Returns whether the stack is full.
   * @returns True if the stack is full, false otherwise.
   */
  isFull() {
    return this._stack.length === this._maxSize;
  }

  /**
   * Returns whether the stack is empty.
   * @returns True if the stack is empty, false otherwise.
   */
  isEmpty() {
    return this._stack.length === 0;
  }

  /**
   * Returns the number of elements in the stack.
   * @returns The number of elements in the stack.
   */
  get size() {
    return this._stack.length;
  }

  /**
   * Returns an array containing all the elements in the stack, in the order they were added.
   * @returns An array containing all the elements in the stack.
   */
  toList() {
    return [...this._stack];
  }
}
