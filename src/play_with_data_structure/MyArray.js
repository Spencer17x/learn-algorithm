class MyArray {
	constructor(capacity = 10) {
		this.data = new Array(capacity);
		this.size = 0;
	}
	
	// 获取数组中的元素个数
	getSize() {
		return this.size;
	}
	
	// 获取数组的容量
	getCapacity() {
		return this.data.length;
	}
	
	// 返回数组是否为空
	isEmpty() {
		return this.size === 0;
	}
	
	// 向所有元素后添加一个新元素
	addLast(e) {
		this.add(this.size, e);
	}
	
	// 在所有元素前添加一个新元素
	addFirst(e) {
		this.add(0, e);
	}
	
	// 获取索引位置的值
	get(index) {
		if (index < 0 || index >= this.size) throw new Error('index should be between 0 and size - 1');
		return this.data[index];
	}
	
	// 修改索引位置的值
	set(index, value) {
		if (index < 0 || index >= this.size) throw new Error('index should be between 0 and size - 1');
		this.data[index] = value;
		return this.data[index];
	}
	
	// 在第 index 位置插入一个新元素e
	add(index, e) {
		if (index < 0 || index > this.size) throw new Error('index should be between 0 and size');
		if (this.size === this.getCapacity()) this.resize(this.getCapacity() * 2);
		for (let i = this.size; i > index; i--) {
			this.data[i] = this.data[i - 1];
		}
		this.data[index] = e;
		this.size++;
	}
	
	// 扩容
	resize(newCapacity) {
		const newArr = new Array(newCapacity);
		for (let i = 0; i < this.size; i++) {
			newArr[i] = this.data[i];
		}
		this.data = newArr;
	}
	
	// 查找数组中是否有元素e
	contains(e) {
		for (let i = 0; i < this.size; i++) {
			if (this.data[i] === e) return true;
		}
		return false;
	}
	
	// 查找数据中的元素e返回其索引
	find(e) {
		for (let i = 0; i < this.size; i++) {
			if (this.data[i] === e) return i;
		}
		return -1;
	}
	
	// 删除索引的值
	remove(index) {
		if (index < 0 || index >= this.size) throw new Error('index should be between 0 and size - 1');
		const ret = this.data[index];
		for (let i = index; i < this.size; i++) {
			this.data[i] = this.data[i + 1];
		}
		this.size--;
		if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) this.resize(this.getCapacity() / 2);
		return ret;
	}
	
	// 删除第一个值
	removeFirst() {
		return this.remove(0);
	}
	
	// 删除最后一个值
	removeLast() {
		return this.remove(this.size - 1);
	}
	
	// 删除值为e的值
	removeElement(e) {
		if (this.find(e) === -1) throw new Error(`${e} is not found`);
		const index = this.find(e);
		this.remove(index);
		return index;
	}
	
	// 转换为字符串
	toString() {
		let result = `size: ${this.size}, capacity: ${this.getCapacity()} \n`;
		result += '[';
		for (let i = 0; i < this.size; i++) {
			result += this.data[i];
			if (i !== this.size - 1) result += ', ';
		}
		result += ']';
		return result;
	}
}

module.exports = MyArray;

//const testMyArray = new MyArray(3);
//testMyArray.addFirst(1);
//testMyArray.addLast(3);
//testMyArray.add(1, 2);
//testMyArray.addLast(4);
//testMyArray.removeLast();
//testMyArray.removeLast();
//testMyArray.removeLast();
//testMyArray.removeLast();
////testMyArray.addLast(4);
////testMyArray.removeLast();
//console.log(testMyArray);
//console.log(testMyArray.toString());
