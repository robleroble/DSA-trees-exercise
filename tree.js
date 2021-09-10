/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // if tree is empty (root=null), return 0
    if (this.root === null) {
      return 0;
    }
    // placeholder variable that we will continuously add to
    let totalSum = 0;
    // stack of nodes/children/etc to traverse thru
    let toVisitStack = [this.root];
    // Use depth-first search to traverse
    while (toVisitStack.length) {
      // remove node from VisitStack
      let current = toVisitStack.pop();
      // add currentNode val to sum
      totalSum = totalSum + current.val;
      // loop over currentNode's children and add them to stack
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
    // return total sum
    return totalSum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // if tree is empty (root=null), return 0
    if (this.root === null) {
      return 0;
    }
    // placeholder variable keep count of even vals
    let count = 0;
    // stack of nodes/children/etc to traverse thru
    let toVisitStack = [this.root];
    // Use depth-first search to traverse
    while (toVisitStack.length) {
      // remove node from VisitStack
      let current = toVisitStack.pop();
      // if currentNode's val is even, add to sum
      if (current.val % 2 === 0) {
        count = count + 1;
      }
      // loop over currentNode's children and add them to stack
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
    // return total sum
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    // if tree is empty (root=null), return 0
    if (this.root === null) {
      return 0;
    }
    // placeholder to keep count of nodes > than lowerBound
    let count = 0;
    // stack of nodes/children to traverse thru
    let toVisitStack = [this.root];
    while (toVisitStack.length) {
      // remove node from VisitStack
      let current = toVisitStack.pop();
      // if currentNode's val is even, add to sum
      if (current.val > lowerBound) {
        count = count + 1;
      }
      // loop over currentNode's children and add them to stack
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
    // return total sum
    return count;
  }
}

module.exports = { Tree, TreeNode };
