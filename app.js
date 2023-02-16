
const linkedLists = (head = null) => {

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

  const prepend = (value) => {
  }

  return { append }
}

const node = (value = null, nextNode = null) => ({ value, nextNode })

const test = linkedLists()
test.append(1)
test.append(4)
