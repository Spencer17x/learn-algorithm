const MyLinkedList = require('./MyLinkedList');

// 其实这个和ArrayStack比较狠复杂，因为LinkedListStack中包含更多的new操作
class LinkedListStack extends MyLinkedList {
	constructor() {
		super();
	}
	
	getSize() {
		return super.getSize();
	}
	
	isEmpty() {
		return super.isEmpty();
	}
	
	push(e) {
		super.addFirst(e);
	}
	
	pop() {
		return super.removeFirst();
	}
	
	peek() {
		return super.getFirst();
	}
	
	toString() {
		let res = 'Stack: top ';
		res += super.toString();
		return res;
	}
}

module.exports = LinkedListStack;

const linkedListStack = new LinkedListStack();

for (let i = 0; i < 5; i++) {
	linkedListStack.push(i);
	console.log(linkedListStack.toString());
}

linkedListStack.pop();
console.log(linkedListStack.toString());
