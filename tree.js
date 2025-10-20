class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

const root = new TreeNode("Root");
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");

root.children.push(child1);
root.children.push(child2);

console.log(root);
// Root
// ├─ Child 1
// └─ Child 2
