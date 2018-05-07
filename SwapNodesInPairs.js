
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var delay = function (s) {
    let i = 0;
    while(i++ < s) {
        let j = 0;
        while (j++ < 10000) {}
    }
}

var swapPairs = function(head) {
    let hat = new ListNode(null);

    let p = hat;
    while(head && head.next) {
        let headNextNext  = head.next.next;
        let headNext = head.next;

        p.next = headNext;
        headNext.next = head;

        p = head;
        head = headNextNext;
    }

    if (head) {
        p.next = head;
        head.next = null;
    } else {
        p.next = null;
    }

    return hat.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function generateList(arr) {
    let hat = new ListNode(null);
    let p = hat;

    for (var i = 0; i < arr.length; i++) {
        p.next = new ListNode(arr[i]);
        p = p.next;
    }

    return hat.next;
}

let arr = [1,2,3,4];

let list = swapPairs(generateList(arr));

while (list) {
    delay(10000);
    console.log(list.val);
    list = list.next;
}