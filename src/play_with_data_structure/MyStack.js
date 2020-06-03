const MyArray = require('./MyArray');

class MyStack extends MyArray {
	
	constructor(capacity) {
		super(capacity);
	}
	
	// 末尾添加e
	push(e) {
		return super.addLast(e);
	}
	
	// 栈顶取值
	pop() {
		return super.removeLast();
	}
	
	// 获取栈顶的值
	peek() {
		return super.get(super.getSize() - 1);
	}
	
	// 获取size
	getSize() {
		return super.getSize();
	}
	
	// 获取capacity
	getCapacity() {
		return super.getCapacity();
	}
	
	// 栈内是否为空
	isEmpty() {
		return super.isEmpty();
	}
	
	// 转为字符串
	toString() {
		let result = `size: ${super.getSize()}, capacity: ${super.getCapacity()} \n`;
		result += '[';
		for (let i = 0; i < super.getSize(); i++) {
			result += super.get(i);
			if (i !== super.getSize() - 1) result += ', ';
		}
		result += '] top';
		return result;
	}
}

const stack = new MyStack(4);
stack.push(1);
stack.push(2);
console.log(stack);
console.log(stack.peek());
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.getSize());
console.log(stack.getCapacity());
console.log(stack.isEmpty());
stack.push(2);
stack.push(2);
stack.push(2);
stack.pop();
console.log('-', stack.peek());
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack.toString());
