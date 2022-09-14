/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var listToArray = function (list) {
    const result = []
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    return result.reverse();
}

var addTwoNumbers = function (l1, l2) {
    l1 = listToArray(l1);
    l2 = listToArray(l2);

    const array = [];

    let i = 1;
    let prev = 0;

    while (true) {
        if (l1[l1.length - i] === undefined && l2[l2.length - i] === undefined) {
            break;
        }

        const a = l1[l1.length - i] || 0;
        const b = l2[l2.length - i] || 0;
        const sum = a + b + prev;
        prev = parseInt(sum / 10);
        array.unshift(sum % 10);
        i++;
    }

    if (prev) {
        array.unshift(prev)
    }

    let __return = new ListNode(array[0]);

    for (let i = 1; i < array.length; i++) {
        __return = new ListNode(array[i], __return);
    }


    return __return;
};
