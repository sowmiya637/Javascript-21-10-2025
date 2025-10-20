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
// A -> B, C
// B -> A
// C -> A
