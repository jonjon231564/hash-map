import { Node, LinkedList } from "./linked-lists/index.js";

class HashMap {
  constructor(size = 16) {
    this.table = new Array(size);
    this.size = size;
    this.lengthCount = 0;
    this.loadFactor = 0.00
  }

  // hash(key) takes a key and produces a hash code with it.

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    // If the index already has a linked list, append the key-value pair to it.
    if (this.table[index]) {
      if (this.table[index] instanceof LinkedList) {
        this.table[index].prepend([key, value]);
      } else {
        let key2 = this.table[index][0];
        let value2 = this.table[index][1];
        let linkedList = new LinkedList();
        linkedList.prepend([key2, value2]);
        linkedList.prepend([key, value]);
        this.table[index] = linkedList;
      }
    } else {
      // Otherwise, store the key-value pair directly.
      this.table[index] = [key, value];
    }
    this.lengthCount++;
    this.loadFactor = this.lengthCount / this.size
    if (this.loadFactor > 0.75) {
      this.sizeUp()
    }
  }

  get(key) {
    const index = this.hash(key);

    if (this.table[index] instanceof LinkedList) {
      return this.table[index].find(key);
    } else if (this.table[index]) {
      return this.table[index][1];
    }
  }

  has(key) {
    const index = this.hash(key);

    if (this.get(key) == null) {
      return false;
    } else {
      return true;
    }
  }

  remove(key) {
    const index = this.hash(key);

    if (this.table[index] instanceof LinkedList) {
      let current = this.table[index].head;
      let previous = null;
      while (current) {
        if (current.data[0] === key) {
          if (previous === null) {
            this.table[index].head = current.next;
          } else {
            previous.next = current.next;
          }
          this.lengthCount--;
          return `Key: ${key}, has been deleted`;
        }
        previous = current;
        current = current.next;
      }
      return `Key: ${key}, has not been deleted because it doesn't exist`;
    } else if (this.table[index]) {
      this.table[index] = null;
      this.lengthCount--;
      return `Key: ${key}, has been deleted`;
    } else {
      return `Key: ${key}, has not been deleted because it doesn't exist`;
    }

    
  }
  length() {
    if (1 === 1) return this.lengthCount;
  }
  clear() {
    this.table = new Array(this.size);
    this.lengthCount = 0;
    console.log("New Hash Map made");
  }
  keys() {
    let output = [];
    let j = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] instanceof LinkedList) {
        let current = this.table[i].head;
        output[j] = current.data[0];
        j++;
        while (current.next) {
          output[j] = current.data[0];
          j++;
          current = current.next;
        }
      } else if (!this.table[i]) {
      } else {
        output[j] = this.table[i][0];
        j++;
      }
    }
    return output;
  }

  values() {
    let output = [];
    let j = 0;
    for (let i = 0; i < this.size; i++) {
      if (this.table[i] instanceof LinkedList) {
        let current = this.table[i].head;
        output[j] = current.data[1];
        j++;
        while (current.next) {
          output[j] = current.data[1];
          j++;
          current = current.next;
        }
      } else if (!this.table[i]) {
      } else {
        output[j] = this.table[i][1];
        j++;
      }
    }
    return output;
  }

  entries() {
    let keysArray = this.keys();
    let valuesArray = this.values();

    let entriesArray = [];
    for (let i = 0; i < keysArray.length; i++) {
      entriesArray[i] = [keysArray[i], valuesArray[i]];
    }
    return entriesArray;
  }

  sizeUp() {
    // get entries
    let oldEntries = this.entries()
    // new hashmap that is twice the size
    this.table = new Array(this.size * 2);
    this.size = this.size * 2
    this.lengthCount = 0
    // set the past entries
    // lengthCount
    
    for (let i = 0; i < oldEntries.length; i++) {
      this.set(oldEntries[i][0], oldEntries[i][1])
    }
    this.loadFactor = this.lengthCount / this.size
    // console.log that the hashmap has been resized
    console.log(`Alert: Load Factor has exceeded 75% Hash map size is now ${this.size}`)
  }
}



export { HashMap };
