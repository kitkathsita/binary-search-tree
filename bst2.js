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

  levelOrder(func = 'none') {
    let queue = [this.root]
    let arr = []
    while (queue.length > 0) {
      if (queue[0] != null) {
        let firstOne = queue.shift()
        func === 'none'
        ? arr.push(firstOne.node)
        : func(firstOne)
        queue.push(firstOne.left, firstOne.right)
      } else {
        queue.shift()
      }
    }
    return arr
  }

  /* preOrder2(func = 'none') {
    let stack = [this.root]
    let arr = []
    while (stack.length > 0) {
      if (stack[stack.length-1] != null) {
        let firstOut = stack.pop()
        func === 'none'
        ? arr.push(firstOut.node)
        : func(firstOut)
        stack.push(firstOut.right, firstOut.left)
      } else {
        stack.pop()
      }
    }
    return arr 
  } */

  preOrder(actNode = this.root, arr = [], func = 'none') {
    if (actNode === null) return
    func === 'none'
    ? arr.push(actNode.node)
    : func(actNode.node)
    this.inOrder(actNode.left, arr)
    this.inOrder(actNode.right, arr)

    return arr
  }

  inOrder(actNode = this.root, arr = [], func = 'none') {
    if (actNode === null) return
    this.inOrder(actNode.left, arr)
    func === 'none'
    ? arr.push(actNode.node)
    : func(actNode.node)
    this.inOrder(actNode.right, arr)

    return arr
  }

  postOrder(actNode = this.root, arr = [], func = 'none') {
    if (actNode === null) return
    this.inOrder(actNode.left, arr)
    this.inOrder(actNode.right, arr)
    func === 'none'
    ? arr.push(actNode.node)
    : func(actNode.node)

    return arr
  }

  height(actNode = this.root) {
    if (actNode === null) return -1

    let leftHeight = this.height(actNode.left)
    let rightHeight = this.height(actNode.right)

    return Math.max(leftHeight, rightHeight) + 1
  }

  depth(number, root = this.root, edge = 0) {
    if (root === null) return
    if (root.node === number) return edge

    if (root.node > number) {
      return this.depth(number, root.left, edge + 1)
    } else {
      return this.depth(number, root.right, edge + 1)
    }
  }

  isBalanced(actNode = this.root, prove = 'is balanced') {
    if (actNode === null) return
    let rightSubTree = this.height(actNode.right)
    let leftSubTree = this.height(actNode.left)
    
    Math.abs(rightSubTree-leftSubTree) <= 1
    ? prove = 'is balanced'
    : prove = 'is not balanced'
    
    if (prove === 'is not balanced') {
      console.log('aaaaa')
      return prove
    } else {
      this.isBalanced(actNode.right, prove)
      this.isBalanced(actNode.left, prove)
      return prove 
    } 
    
  }

  rebalance() {
    let arr = this.inOrder()
    this.root = this.buildTree(arr)
    return this.root
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
/*console.log(nodo.find(6))
/* console.log(nodo) */
console.log('hola guerre')
/* console.log(nodo.preOrder2())*/
prettyPrint(nodo.root) 
/*console.log(nodo.depth(6))*/
console.log(nodo.isBalanced())