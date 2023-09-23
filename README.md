# Sized Stack

A stack data structure with a fixed optional maximum size. It allows you to specify a maximum size for the stack. If the maximum size is reached, adding a new element to the stack will remove the oldest element from the stack. This can be useful in situations where you want to limit the memory usage of the stack.

## Installation

```sh
npm install sized-stack
```

## Use cases

In addition to supporting all use cases of the normal stack data structure, the `sized-stack` library can be used in the following situations:

1. **Caching in web applications:** In web applications, caching can be used to improve performance by storing frequently accessed data in memory. However, it may be necessary to limit the size of the cache to avoid using too much memory. The `sized-stack` library can be used to implement a cache with a fixed maximum size, ensuring that the memory usage is bounded.

2. **Undo/redo functionality in text editors:** Text editors often provide undo/redo functionality that allows the user to undo or redo previous actions. The `sized-stack` library can be used to implement a stack that stores the previous actions, with a fixed maximum size to limit the memory usage.

3. **Displaying the most recent items in a list:** In some applications, it may be useful to display the most recent items in a list. Especially if the list describes a sequence of events, it may be desirable to only display the most recent events. The `sized-stack` library can be used to implement a stack that stores the most recent items, with a fixed maximum size to limit the memory usage.

_and more..._

## Usage

```typescript
import SizedStack from "sized-stack";

// Create a new stack with maximum size 3
const stack = new SizedStack<string>(3);

// Add some elements to the stack
stack.push("a");
stack.push("b");
stack.push("c");

// Check if the stack is full
console.log(stack.isFull()); // true

// Add another element to the stack
stack.push("d");

// Check the top element of the stack
console.log(stack.top()); // 'd'

// Remove the top element from the stack
stack.pop();

// Get the number of elements in the stack
console.log(stack.size); // 2

// Insert an element into the stack if it is not full
stack.pushIfAvailable("e");

// Try to insert another element into the stack, but fail because it is full
stack.pushIfAvailable("f");

// Get an array containing all the elements in the stack
console.log(stack.toList()); // ['b', 'c', 'e']
```

## API

### `new SizedStack<T>(size?: number)`

Creates a new `sized-stack` instance.

- `size` (optional): The maximum number of elements the stack can hold. If not provided, the stack has infinite capacity.

### `push(...items: T[]): void`

Adds one or more elements to the top of the stack.

- `items`: The elements to add to the stack.

### `pushIfAvailable(...items: T[]): void`

Adds one or more elements to the top of the stack, if the stack is not full.

- `items`: The elements to add to the stack.

### `pop(): void`

Removes the top element from the stack.

### `top(): T | undefined`

Returns the top element of the stack without removing it.

### `isFull(): boolean`

Returns whether the stack is full.

### `isEmpty(): boolean`

Returns whether the stack is empty.

### `size: number`

Returns the number of elements in the stack.

### `toList(): T[]`

Returns an array containing all the elements in the stack, in the order they were added.

## License

This library is licensed under the [MIT License](LICENSE).
