class MyLoopQueue {
	constructor(capacity = 10) {
		this.data = new Array(capacity);
		this.front = 0;
		this.tail = 0;
		this.size = 0;
	}
	
	// 入队
	enqueue(e) {
		if (this.size === this.getCapacity()) {
			console.log('-------- 扩容 ----------');
			this.resize(this.data.length * 2);
		}
		this.data[this.tail] = e;
		this.tail = (this.tail + 1) % this.data.length;
		this.size++;
	}
	
	// 出队
	dequeue() {
		if (this.size === this.data.length / 4 && this.data.length / 2 !== 0) {
			console.log('-------- 缩容 ----------');
			this.resize(this.data.length / 2);
		}
		this.data[this.front] = null;
		this.front = (this.front + 1) % this.data.length;
		this.size--;
	}
	
	resize(newCapacity) {
		const newArr = new Array(newCapacity);
		for (let i = 0; i < this.size; i++) {
			newArr[i] = this.data[(this.front + i) % this.data.length];
		}
		this.data = newArr;
		this.front = 0;
		this.tail = this.size;
	}
	
	getSize() {
		return this.size;
	}
	
	getCapacity() {
		return this.data.length - 1;
	}
	
	isEmpty() {
		return this.size === 0;
	}
}

const loopQueue = new MyLoopQueue(4);
loopQueue.enqueue(1);
loopQueue.enqueue(2);
loopQueue.enqueue(3);
console.log(loopQueue);
loopQueue.enqueue(4);
console.log(loopQueue);
loopQueue.dequeue();
loopQueue.dequeue();
loopQueue.dequeue();
console.log(loopQueue);
