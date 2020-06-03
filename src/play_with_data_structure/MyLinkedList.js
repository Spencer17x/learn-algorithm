class Node {
	constructor(e = null, next = null) {
		this.e = e;
		this.next = next;
	}
}

class MyLinkedList {
	constructor() {
		// this.head = null;
		this.dummyHead = new Node(null, null);
		this.size = 0;
	}
	
	// 获取链表中的元素个数
	getSize() {
		return this.size;
	}
	
	// 返回链表是否为空
	isEmpty() {
		return this.size === 0;
	}
	
	// 在链表头添加新的元素e
	addFirst(e) {
		// const node = new Node(e);
		// node.next = this.head;
		// this.head = node;
		//
		// this.head = new Node(e, this.head);
		// this.size++;
		
		this.add(0, e);
	}
	
	// 在链表的index(0 - based)位置添加新的元素e
	// 在链表中不是一个常用的操作，联系用：）
	add(index, e) {
		if (index < 0 || index > this.size) throw new Error('Add failed. Illegal index.');
		// if (index === 0) {
		// 	this.addFirst(e);
		// } else {
		// 	let prev = this.head;
		// 	for (let i = 0; i < index - 1; i++) {
		// 		prev = prev.next;
		// 	}
		// 	// const node = new Node(e);
		// 	// node.next = prev.next;
		// 	// prev.next = node;
		// 	prev.next = new Node(e, prev.next);
		// 	this.size++;
		// }
		
		let prev = this.dummyHead;
		for (let i = 0; i < index; i++) {
			prev = prev.next;
		}
		// const node = new Node(e);
		// node.next = prev.next;
		// prev.next = node;
		prev.next = new Node(e, prev.next);
		this.size++;
	}
	
	// 在链表末尾添加新的元素e
	addLast(e) {
		this.add(this.size, e);
	}
	
	// 获得链表的第index(0-based)个位置的元素
	// 在链表中不是一个常用的操作，练习用：
	get(index) {
		if (index < 0 || index >= this.size) throw new Error('Get Failed. Illegal index.');
		let cur = this.dummyHead.next;
		for (let i = 0; i < index; i++) {
			cur = cur.next;
		}
		return cur.e;
	}
	
	// 获得链表的第一个元素
	getFirst() {
		return this.get(0);
	}
	
	// 获取链表的最后一个元素
	getLast() {
		return this.get(this.size - 1);
	}
	
	// 修改链表的第index(0-based)个位置的元素
	// 在链表中不是一个常用的操作，练习用：
	set(index, e) {
		if (index < 0 || index >= this.size) throw new Error('Set Failed. Illegal index.');
		let cur = this.dummyHead.next;
		for (let i = 0; i < index; i++) {
			cur = cur.next;
		}
		cur.e = e;
	}
	
	// 查找链表中是否有元素e
	contains(e) {
		let cur = this.dummyHead.next;
		while (cur !== null) {
			if (cur.e === e) return true;
			cur = cur.next;
		}
		return false;
	}
	
	remove(index) {
		let prev = this.dummyHead;
		for (let i = 0; i < index; i++) {
			prev = prev.next;
		}
		let retNode = prev.next;
		prev.next = retNode.next;
		retNode.next = null;
		this.size--;
		return retNode.e;
	}
	
	removeFirst() {
		return this.remove(0);
	}
	
	removeLast() {
		return this.remove(this.size - 1);
	}
	
	toString() {
		let res = '';
		let cur = this.dummyHead.next;
		while (cur !== null) {
			res += `${cur.e}->`;
			cur = cur.next;
		}
		res += 'null';
		return res;
	}
}

module.exports = MyLinkedList;

// const testLinkedList = () => {
// 	const linkedList = new MyLinkedList();
// 	for (let i = 0; i < 5; i++) {
// 		linkedList.addFirst(i);
// 	}
// 	console.log(linkedList.toString());
// 	linkedList.remove(2);
// 	console.log(linkedList.toString());
// 	linkedList.removeFirst();
// 	console.log(linkedList.toString());
// 	linkedList.removeLast();
// 	console.log(linkedList.toString());
// };
//
// testLinkedList();
