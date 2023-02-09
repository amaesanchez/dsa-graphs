/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      if (!this.nodes.has(vertex)) {
        this.nodes.add(vertex)
      }
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    if (v1.adjacent.has(v2)) {
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1);
    }
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    const neighbors = vertex.adjacent

    for (let node of neighbors) {
      node.adjacent.delete(vertex);
      vertex.adjacent.delete(node);
    }

    this.nodes.delete(vertex);
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start, seen = new Set(start.value)) {

    for (let neighbor of start.adjacent) {
      console.log("neighbor", neighbor)
      if (!seen.has(neighbor)) {
        seen.add(neighbor.value);
        seen = this.depthFirstSearch(neighbor, seen);
      }
    }

    console.log("seen", seen)
    return Array.from(seen);
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) { }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node }
