class Node {
  constructor(node, left = null, right = null) {
    this.node = node
    this.left = left
    this.right = right
  }
}

class Tree {
  
  buildTree(array) {
    let newArray = Array.from(new Set(array.sort((a, b) => a-b)))

    function createTree(sortArray) {
      let start = 0
      let end = sortArray.length - 1
      let mid = Math.ceil((start+end)/2)
      if (start>end) {
        return null
      } else {
        let arrayRight = sortArray.splice(mid+1)
        let arrayLeft = sortArray.splice(0, mid)
        
        let root = new Node(sortArray[0], createTree(arrayLeft), createTree(arrayRight))
        return root
      }
    }
    return createTree(newArray)
  }

  insert(number) {
    
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
let nodo = new Tree()
console.log(nodo.buildTree(a))
console.log('hola guerre')
prettyPrint(nodo.buildTree(a))
