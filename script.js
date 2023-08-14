const Node = (value = null, nextNode = null) => {
  return {
    value: value,
    nextNode: nextNode,
  };
};

const LinkedList = () => {
  let currentHead = null;

  //append(value) adds a new node containing value to the end of the list
  const append = (value) => {
    //create the new node
    const newNode = Node(value);

    if (currentHead === null) {
      //if no currentHead, make the newNode as head
      currentHead = newNode;
    } else {
      let tail = currentHead;

      //find the tail
      while (tail.nextNode !== null) {
        tail = tail.nextNode;
      }

      //when current tail has nextNode = null, add the newNode next to tail
      tail.nextNode = newNode;
    }

    console.log("append : " + value);
  };

  //prepend(value) adds a new node containing value to the start of the list
  const prepend = (value) => {
    //create the new node, passing nextNode=currentHead
    const newNode = Node(value, currentHead);

    //make newNode as currentHead
    currentHead = newNode;

    console.log("prepend : " + value);
  };

  //size returns the total number of nodes in the list
  const size = () => {
    let size = 0;
    let node = currentHead;

    //count each node
    while (node !== null) {
      size += 1;
      node = node.nextNode;
    }

    return size;
  };

  //head returns the first node in the list
  const head = () => {
    return currentHead.value;
  };

  //tail returns the last node in the list
  const tail = () => {
    let tail = currentHead;

    //check for tail with nextNode=null
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }

    return tail.value;
  };

  //at(index) returns the node at the given index
  const at = (index) => {
    let current = currentHead;
    let s = size();

    for (let i = 0; i < s; i++) {
      if (i == index) {
        return current.value;
      } else {
        current = current.nextNode;
      }
    }
  };

  //pop removes the last element from the list
  const pop = () => {
    let current = currentHead;
    let s = size();

    //if only has 1 element
    if (s == 1) {
      currentHead = null;
    } else {
      //until the node before last node
      for (let i = 0; i < s - 2; i++) {
        current = current.nextNode;
      }

      //make the node before the last node point to null
      current.nextNode = null;
    }

    console.log("removed last element");
  };

  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  const contains = (val) => {
    let current = currentHead;
    let s = size();
    let found = false;

    for (let i = 0; i < s; i++) {
      if (current.value === val) {
        found = true;
        break;
      } else {
        current = current.nextNode;
      }
    }

    return found;
  };

  //find(value) returns the index of the node containing value, or null if not found.
  const find = (val) => {
    let current = currentHead;
    let s = size();
    let index = null;

    for (let i = 0; i < s; i++) {
      if (current.value === val) {
        index = i;
        break;
      } else {
        current = current.nextNode;
      }
    }

    return index;
  };

  //insertAt(value, index) that inserts a new node with the provided value at the given index.
  const insertAt = (val, index) => {

    console.log("insert " + val + " at index " + index);

    let current = currentHead;
    let prevNode = currentHead;
    let s = size();

    if(index===0){
        prepend(val);
        return;
    }else if(index>=s){
        append(val);
        return;
    }else{

        for (let i = 0; i < s; i++) {
           if(i===index){
            const newNode = Node(val, current);
            prevNode.nextNode = newNode;
            break;
            
           }else{
            prevNode = current;
            current = current.nextNode;
           }
          }

    }

  };

  //removeAt(index) that removes the node at the given index.
  const removeAt = (index) => {

    console.log("remove at index " + index);

    let current = currentHead;
    let prevNode = currentHead;
    let s = size();

    if(index>=s-1){
        pop();
        return;
    }else if(index===0){
        currentHead = currentHead.nextNode;
        return;
    }else{

        for (let i = 0; i < s; i++) {
           if(i===index){
            
            prevNode.nextNode = current.nextNode;
            break;
            
           }else{
            prevNode = current;
            current = current.nextNode;
           }
          }

    }

  };

  //print our linked list : ( value ) -> ( value ) -> ( value ) -> null
  const toString = () => {
    let node = currentHead;
    let string = "";

    while (node !== null) {
      string += `( ${node.value} ) -> `;
      node = node.nextNode;
    }

    return `${string} null`;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    toString,
  };
};

const list = LinkedList();

list.append(5);
list.prepend(23);
list.append(0);

console.log(list.toString());
console.log("linked list size: " + list.size());
console.log("head node value: " + list.head());
console.log("tail node value: " + list.tail());
console.log("node value at index 2: " + list.at(2));
console.log("node value at index 4: " + list.at(4));

list.pop();
console.log(list.toString());
console.log("linked list size: " + list.size());

list.prepend(66);
list.pop();
console.log(list.toString());
console.log("linked list size: " + list.size());

list.pop();
console.log(list.toString());
console.log("linked list size: " + list.size());

list.append(44);
list.prepend(9);
list.append(89);
console.log(list.toString());

console.log(
  "linked list contains 5: " +
    list.contains(5) +
    " found at index " +
    list.find(5)
);
console.log(
  "linked list contains 9: " +
    list.contains(9) +
    " found at index " +
    list.find(9)
);
console.log(
  "linked list contains 44: " +
    list.contains(44) +
    " found at index " +
    list.find(44)
);

list.insertAt(4,0);
console.log(list.toString());
list.insertAt(7, 4);
console.log(list.toString());
list.insertAt(22, 20);
console.log(list.toString());
list.insertAt(53, 1);
console.log(list.toString());
console.log("linked list size: " + list.size());

list.removeAt(2);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
list.removeAt(5);
console.log(list.toString());
list.removeAt(12);
console.log(list.toString());
console.log("linked list size: " + list.size());
