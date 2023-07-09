class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === 0) {
      return true;
    } else return false;

    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true;
    } else if (this.stackControl.length > 0) {
      return false;
    }
    // ... your code goes here
  }

  push(item) {
    if (this.stackControl.length === this.MAX_SIZE) {
      throw new Error("STACK_OVERFLOW");
    } else this.stackControl.push(item);

    return this.stackControl;
  }

  pop() {
    if (this.stackControl.length === 0) {
      throw new Error("STACK_UNDERFLOW");
    }
    return this.stackControl.pop();

    // ... your code goes here
  }

  display() {
    return this.stackControl;
    // ... your code goes here
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Stack;
