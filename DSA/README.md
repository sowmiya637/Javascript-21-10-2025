
````markdown
#  JavaScript Data Structures – Example Project

This project demonstrates **core data structures** in JavaScript — including **Set**, **Map**, **Graph**, and **Tree** — using simple examples that highlight how each structure works internally and how they can be used in real-world applications.

## 🧠 Overview

This mini project covers how different **data structures** in JavaScript store and manage data:

- **Set** → Stores *unique* values (no duplicates).  
- **Map** → Stores *key-value pairs* efficiently.  
- **Graph** → Models *relationships* between entities using vertices and edges.  
- **Tree** → Represents *hierarchical data* with parent–child relationships.

These structures form the foundation for advanced algorithms and system design.

---

## 📊 Concepts Explained

### 1️⃣ Set

**Definition:**  
A **Set** is a collection of unique values. Duplicate elements are automatically ignored.

**Key Methods:**
- `.add(value)` → Adds a value to the set.  
- `.has(value)` → Checks if the value exists.  
- `.size` → Returns the total number of elements.

**Example:**
```js
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // ignored, as it's duplicate

console.log(mySet.has(2)); // true
console.log(mySet.size);   // 2
````

**Output:**

```
true
2
```

**Use Case:** Removing duplicates from an array, caching unique user IDs, etc.

---

### 2️⃣ Map

**Definition:**
A **Map** stores data in **key–value pairs** and maintains the *insertion order* of the keys.

**Key Methods:**

* `.set(key, value)` → Adds or updates a key-value pair.
* `.get(key)` → Returns the value for a given key.
* `.has(key)` → Checks if a key exists.

**Example:**

```js
const myMap = new Map();
myMap.set("name", "Sowmiya");
myMap.set("age", 23);

console.log(myMap.get("name")); // Sowmiya
console.log(myMap.has("age"));  // true
```

**Output:**

```
Sowmiya
true
```

**Use Case:** Storing user data, configuration settings, or caching key-based data.

---

### 3️⃣ Graph

**Definition:**
A **Graph** is a collection of *nodes (vertices)* connected by *edges*.
It’s used to represent **networks**, **connections**, and **relationships**.

**Types:**

* **Directed Graph** → One-way connections
* **Undirected Graph** → Two-way connections (used in this example)

**Example Implementation:**

```js
class Graph {
  constructor() { this.adjList = new Map(); }

  addVertex(v) { this.adjList.set(v, []); }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // undirected
  }

  print() {
    for (let [key, value] of this.adjList.entries()) {
      console.log(`${key} -> ${value.join(", ")}`);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.print();
```

**Output:**

```
A -> B, C
B -> A
C -> A
```

**Use Case:**
Social networks (friends graph), routing maps, dependency trees, or recommendation systems.

---

### 4️⃣ Tree

**Definition:**
A **Tree** is a *hierarchical data structure* where each node has:

* A **value**, and
* Zero or more **children** nodes.

It starts with a **root** node and grows downward like a family or folder tree.

**Example:**

```js
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
```

**Output (Structure):**

```
Root
├─ Child 1
└─ Child 2
```

**Use Case:**
DOM structure in HTML, file system hierarchy, organization charts, or decision trees.

---

## 🛠️ Technologies Used

* **JavaScript (ES6+)** — for implementing data structures
* **Node.js / Browser Console** — for running and testing the code
* **Console Output** — to visualize relationships and results

---

## 📁 Folder Structure

```
data-structures/
│
├── index.js        # Contains all data structure examples
└── README.md       # Documentation (this file)
```

---

## 🧩 Code Explanation


| Data Structure | Storage Type               | Access Pattern               | Real-Life Analogy             |
| -------------- | -------------------------- | ---------------------------- | ----------------------------- |
| **Set**        | Collection of unique items | `.add()`, `.has()`           | Guest list without duplicates |
| **Map**        | Key-value pairs            | `.set()`, `.get()`           | Dictionary or phonebook       |
| **Graph**      | Vertices & edges           | `.addVertex()`, `.addEdge()` | Social media network          |
| **Tree**       | Parent-child nodes         | `.children[]`                | File directory                |

---

## 🧾 Example Output

```
true
2
Sowmiya
true
A -> B, C
B -> A
C -> A
TreeNode { value: 'Root', children: [ TreeNode, TreeNode ] }
```


