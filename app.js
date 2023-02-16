
const linkedLists = (head = null) => {

  const getHead = () => head.value

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

  // adds a new node containing value to the END of list
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
    console.log(`size = ${count}`);
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
    if (node.value == null) return
    for (let i = 1; i < index; i++) {
      node = node.nextNode
    }
    return node.value
  }

  return { append, prepend, size, getHead, getTail, atIndex }
}

const node = (value = null, nextNode = null) => ({ value, nextNode })

const test = linkedLists()
test.append(1)
test.append(4)
test.append(6)
test.prepend(7)
test.size()
// console.log(test.getHead())
// console.log(test.getTail())
console.log(test.atIndex(10))