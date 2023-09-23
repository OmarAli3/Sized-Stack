import { describe, expect, it } from "vitest";
import SizedStack from "./SizedStack";

describe("SizedStack", () => {
  it("should push items to the stack", () => {
    const stack = new SizedStack<number>();
    stack.push(1, 2, 3);
    expect(stack.toList()).toEqual([1, 2, 3]);
  });

  it("should pop items from the stack", () => {
    const stack = new SizedStack<number>();
    stack.push(1, 2, 3);
    stack.pop();
    expect(stack.toList()).toEqual([1, 2]);
  });

  it("should return the top item of the stack", () => {
    const stack = new SizedStack<number>();
    stack.push(1, 2, 3);
    expect(stack.top()).toBe(3);
  });

  it("should return true if the stack is full", () => {
    const stack = new SizedStack<number>(3);
    stack.push(1, 2, 3);
    expect(stack.isFull()).toBe(true);
  });

  it("should return false if the stack is not full", () => {
    const stack = new SizedStack<number>(3);
    stack.push(1, 2);
    expect(stack.isFull()).toBe(false);
  });

  it("should return true if the stack is empty", () => {
    const stack = new SizedStack<number>();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should return false if the stack is not empty", () => {
    const stack = new SizedStack<number>();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("should return the size of the stack", () => {
    const stack = new SizedStack<number>();
    stack.push(1, 2, 3);
    expect(stack.size).toBe(3);
  });

  it("should insert items if the stack is not full", () => {
    const stack = new SizedStack<number>(3);
    stack.pushIfAvailable(1, 2);
    expect(stack.toList()).toEqual([1, 2]);
  });

  it("should not insert items if the stack is full", () => {
    const stack = new SizedStack<number>(3);
    stack.push(1, 2, 3);
    stack.pushIfAvailable(4, 5);
    expect(stack.toList()).toEqual([1, 2, 3]);
  });

  it("should shift and insert items if the stack is full", () => {
    const stack = new SizedStack<number>(3);
    stack.push(1, 2, 3);
    stack.push(4, 5);
    expect(stack.toList()).toEqual([3, 4, 5]);
  });
});
