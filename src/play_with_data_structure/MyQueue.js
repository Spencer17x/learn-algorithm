const MyArray = require('./MyArray');

class MyQueue extends MyArray {
	constructor(capacity) {
		super(capacity);
	}
	
	// 入队-添加到队首
	enqueue(e) {
		return super.addLast(e);
	}
	
	// 出队-移除队首元素
	dequeue() {
		return super.removeFirst();
	}
	
	// 获取队首元素
	getFront() {
		return super.get(0);
	}
	
	// 获取队列size
	getSize() {
		return super.getSize();
	}
	
	// 获取队列capacity
	getCapacity() {
		return super.getCapacity();
	}
	
	// 队列是否为空
	isEmpty() {
		return super.isEmpty();
	}
	
	// 转为字符串
	toString() {
		let result = `size: ${super.getSize()}, capacity: ${super.getCapacity()} \n`;
		result += 'front [';
		for (let i = 0; i < super.getSize(); i++) {
			result += super.get(i);
			if (i !== super.getSize() - 1) result += ', ';
		}
		result += '] tail';
		return result;
	}
}

module.exports = MyQueue;

const queue = new MyQueue(4);
queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.getSize());
console.log(queue.getCapacity());
console.log(queue.isEmpty());
console.log(queue.toString());

