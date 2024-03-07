
class LinkedListNode {
    val: number
    next: LinkedListNode | null | undefined
    constructor(val?: number, next?: LinkedListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function insert(head: LinkedListNode | null | undefined, insertVal: number): LinkedListNode | null | undefined {
    const newNode = new LinkedListNode(insertVal)

    if (!head) {
        newNode.next = newNode
        return newNode
    }

    let prev = head;
    let curr = head.next;
    let toInsert = false;

    do {
        if (prev.val <= insertVal && insertVal <= curr!.val) {
            toInsert = true
        } else if (prev.val > curr!.val) {
            if(insertVal >= prev.val || insertVal <= curr!.val) {
                toInsert = true
            }
        }

        if (toInsert) {
            prev.next = new LinkedListNode(insertVal, curr)
            return head;
        }

        prev = curr as LinkedListNode
        curr = curr!.next
    } while (prev !== head)

    prev.next = new LinkedListNode(insertVal, curr);
    return head;
}