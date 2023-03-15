class Node {
  constructor(node, left = null, right = null) {
    this.node = node
    this.left = left
    this.right = right
  }
}

class Tree {

  constructor(array) {
    this.root = this.buildTree(array)
  }
  
  buildTree(array) {
    let newArray = Array.from(new Set(array.sort((a, b) => a-b)))

    function createTree(sortArray) {
      let start = 0
      let end = sortArray.length - 1
      let mid = Math.ceil((start+end)/2)

      if (start>end) return null 

      let arrayRight = sortArray.splice(mid+1)
      let arrayLeft = sortArray.splice(0, mid)
      
      let root = new Node(sortArray[0], createTree(arrayLeft), createTree(arrayRight))
      return root
      }

    return createTree(newArray)
    }

  insert(number, currentNode = this.root) {
    if (currentNode === null) return new Node(number)
    number < currentNode.node
    ? (currentNode.left = this.insert(number, currentNode.left))
    : (currentNode.right = this.insert(number, currentNode.right))
    return currentNode
  }

  /* delete(number, currentNode = this.root) {
    currentNode.node === number
    ? 
  } */

  find(number, currentNode = this.root) {
    if (currentNode === null) return null 
    if (currentNode.node === number) {
      return currentNode
    } else {
      return currentNode.node > number
      ? (this.find(number, currentNode.left))
      : (this.find(number, currentNode.right))
    } 
  }

  
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.node}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

let a = [11,5,4,8,0,15,6,7]
let nodo = new Tree(a)
nodo.insert(2)
nodo.insert(17)
console.log(nodo.find(6))
/* console.log(nodo) */
console.log('hola guerre')
prettyPrint(nodo.root) 