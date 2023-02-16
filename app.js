const linkedLists = (head = null) => {

  // const getHead = () => head.value
  const getHead = () => head

  // adds a new node containing value to the END of list
  const append = (value) => {
    const newNode = node(value)

    if (head == null) {
      head = newNode
    } else {
      let tail = head
      while (tail.nextNode !== null) {
        tail = tail.nextNode
      }
      tail.nextNode = newNode
      console.log(tail)
    }
  }

  // adds a new node containing value to the start of list
  const prepend = (value) => {
    const newNode = node(value, head)
    head = newNode
    console.log(head)
  }

  const size = () => {
    let count = 0
    let current = head
    while (current !== null) {
      count++;
      current = current.nextNode
    }
    return count;
  }

  const getTail = () => {
    let tail = head
    while (tail.nextNode !== null) {
      tail = tail.nextNode
    }
    return tail.value
  }

  const atIndex = (index) => {
    if (index > size()) {
      return console.log(`There is no node at index ${index}`)
    }
    let node = head
    for (let i = 1; i < index; i++) {
      node = node.nextNode
    }
    return node.value
  }

  // removes last node from the list
  const pop = () => {
    if (!head) return null
    let tailNeighbor = head
    while (tailNeighbor.nextNode.nextNode !== null) {
      tailNeighbor = tailNeighbor.nextNode
    }
    tailNeighbor.nextNode = null
  }

  const contains = (value) => {
    if (!head) return null
    let nodePointer = head
    while (nodePointer.nextNode !== null) {
      if (nodePointer.value === value) return true;
      nodePointer = nodePointer.nextNode
    }
    return nodePointer.value === value
  }

  const find = (value) => {
    if (!head) return null
    let index = 1
    let nodePointer = head
    while (nodePointer.nextNode !== null) {
      if (nodePointer.value === value) return index;
      nodePointer = nodePointer.nextNode
      index++
    }
    return nodePointer.value === value ? index : null
  }

  // ( value ) -> ( value ) -> ( value ) -> null
  const toString = () => {
    let str = ""
    if (!head) return null
    let currentNode = head
    while (currentNode.nextNode !== null) {
      const newStr = `( ${currentNode.value} ) -> `
      str += newStr
      currentNode = currentNode.nextNode
    }
    str += (`( ${currentNode.value} ) --> null`);
    console.log(str);
    return str;
  }


  return { append, prepend, size, getHead, getTail, atIndex, pop, contains, find, toString }
}

const node = (value = null, nextNode = null) => ({ value, nextNode })

const test = linkedLists()
test.append(1)
test.append(4)
test.append(6)
test.prepend(7)
console.log(`The Size is ${test.size()}`)
// console.log(test.getHead())
// console.log(test.getTail())
// console.log(test.atIndex(1))
// console.log(test.atIndex(2))
// console.log(test.atIndex(3))
// console.log(test.atIndex(6))
// console.log(test.atIndex(4))
// test.pop()
// console.log(test.getHead())
// console.log(test.contains(1))
// console.log(test.find(4))
console.log(test.toString())