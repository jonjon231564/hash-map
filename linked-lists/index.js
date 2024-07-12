class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }

}



class LinkedList {
    constructor(head = null) {
        this.head = head
        this.headSize = 0
    }
    // append(data) adds a new node containing data to the end of the list
    append(data) {
        let current
        let node = new Node(data)

        if(!this.head) {
            this.head = node
            this.headSize++
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
            this.headSize++
        }
    }

    //  prepend(data) adds a new node containing data to the start of the list
    prepend(data) {
        
        this.head = new Node(data, this.head)
        this.headSize++
    }
    

    // size returns the total number of nodes in the list
    size() {
        console.log(`This is the list size ${this.headSize}`)
    }

    // head returns the first node in the list
    firstNode() {
        console.log(`This is the first node ${this.head.data}`)
    }

    // tail returns the last node in the list
    tail() {
        let current = this.head
        while(current.next) {
            current = current.next
        }
        console.log(`This is the last node ${current.data}`)
    }

    // at(index) returns the node at the given index
    at(index) {
        let current = this.head
        for(let i = 0; i < index - 1; i++) {
            current = current.next
        }
        console.log(`This is the node at index ${index} ${current.data}`)
    }
    // pop removes the last element from the list
    pop() {
        let index = this.headSize
        let current = this.head
        for(let i = 1; i < index - 1; i++) {
            current = current.next
        }
        delete(current.next)
        this.headSize--
    }

    // contains(data) returns true if the passed in data is in the list and otherwise returns false.
    contains(value) {
        
        let current = this.head
        while (current) {
            current = current.next
            
            if (current == null) {
                return false
            } else if(current.data == value) {
                return true
            }
        } 
    }


    // find(data) returns the index of the node containing data, or null if not found.
    find(value) {
        let current = this.head
        let i = 0
        while (current) {
            
            
            if (current == null) {
                return null
            } else if(current.data[0] === value) {
                return current.data[1]
            }
            current = current.next
            i++
        }
        
    }

    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( data ) -> ( data ) -> ( data ) -> null
    toString() {
        let current
        let output = ''

        if(!this.head) {
            console.log('no data')
        } else {
            current = this.head
            while(current.next) {
                output += `(${current.data}) -> `
                current = current.next
            }
            output += `(${current.data}) -> null`
            
            console.log(output)
            
        }
    }
    // removeAt(index) {
    //     let c
    // }
}



export { Node, LinkedList };












