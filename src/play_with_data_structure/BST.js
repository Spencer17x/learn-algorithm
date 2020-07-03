/**
 * 二分搜索树
 */

const LinkedListQueue = require('./LinkedListQueue');

// 二叉树的节点
class BSTNode {
	constructor(e = null, left = null, right = null) {
		this.e = e;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
		this.size = 0;
	}
	
	getSize() {
		return this.size;
	}
	
	isEmpty() {
		return this.size === 0;
	}
	
	add(e) {
		// if (this.root === null) {
		// 	this.root = new BSTNode(e);
		// 	this.size++;
		// 	return;
		// } else {
		// 	this.addToRoot(this.root, e);
		// }
		
		this.root = this.addToRoot(this.root, e);
	}
	
	/**
	 * 向以root为根的二分搜索树中插入元素e，递归算法
	 * 返回插入新节点后二分搜索树的根
	 * @param root
	 * @param e
	 */
	addToRoot(node, e) {
		// if (node.e === e) return;
		// if (e < node.e && node.left === null) {
		// 	node.left = new BSTNode(e);
		// 	this.size++;
		// 	return;
		// } else if (e > node.e && node.right === null) {
		// 	node.right = new BSTNode(e);
		// 	this.size++;
		// 	return;
		// }
		// if (e < node.e) {
		// 	this.addToRoot(node.left, e);
		// } else {
		// 	this.addToRoot(node.right, e);
		// }
		
		if (node === null) {
			this.size++;
			return new BSTNode(e);
		}
		
		if (e < node.e) {
			node.left = this.addToRoot(node.left, e);
		} else if (e > node.e) {
			node.right = this.addToRoot(node.right, e);
		}
		
		return node;
	}
	
	// 是否包含某个元素e
	contain(e) {
		return this.containElement(this.root, e);
	}
	
	// 递归查询是否包含某个元素e
	containElement(node, e) {
		if (node === null) return false;
		if (node.e === e) {
			return true;
		} else if (e < node.e) {
			return this.containElement(node.left, e);
		} else {
			return this.containElement(node.right, e);
		}
	}
	
	// 二分搜索树的前序遍历
	preOrder() {
		return this.privatePreOrder(this.root);
	}
	
	// 前序遍历以node为根的二分搜索树，递归算法
	// 前序遍历又叫深度优先遍历
	privatePreOrder(node) {
		if (node === null) return;
		console.log(node.e);
		this.privatePreOrder(node.left);
		this.privatePreOrder(node.right);
	}
	
	// 寻找二分搜索树的最小元素
	minimum() {
		if (this.size === 0) throw new Error('BST is empty!');
		return this.privateMinimum(this.root).e;
	}
	
	// 返回以node为根的二分搜索树的最小值所在的节点
	privateMinimum(node) {
		if (node.left === null) {
			return node;
		}
		return this.privateMinimum(node.left);
	}
	
	// 寻找二分搜索树的最大元素
	maximum() {
		if (this.size === 0) throw new Error('BST is empty!');
		return this.privateMaximum(this.root).e;
	}
	
	// 返回以node为根的二分搜索树的最大值所在的节点
	privateMaximum(node) {
		if (node.right === null) {
			return node;
		}
		return this.privateMaximum(node.right);
	}
	
	// 从二分搜索树中删除最小值所在节点，返回最小值
	removeMin() {
		const ret = this.minimum();
		this.root = this.privateRemoveMin(this.root);
		return ret;
	}
	
	// 删除掉以node为根的二分搜索树中的最小节点
	// 返回删除节点后新的二分搜索树的根
	privateRemoveMin(node) {
		if (node.left === null) {
			const rightNode = node.right;
			node.right = null;
			this.size--;
			return rightNode;
		}
		node.left = this.privateRemoveMin(node.left);
		return node;
	}
	
	// 从二分搜索树中删除最小值所在节点，返回最大值
	removeMax() {
		const ret = this.maximum();
		this.root = this.privateRemoveMax(this.root);
		return ret;
	}
	
	// 删除掉以node为根的二分搜索树中的最大节点
	// 返回删除节点后新的二分搜索树的根
	privateRemoveMax(node) {
		if (node.right === null) {
			const leftNode = node.left;
			node.left = null;
			this.size--;
			return leftNode;
		}
		node.right = this.privateRemoveMax(node.right);
		return node;
	}
	
	// 从二分搜索树中删除元素为e的节点
	remove(e) {
		this.root = this.privateRemove(this.root, e);
	}
	
	// 删除以node为根的二分搜索树中值为e的节点，递归算法
	// 返回删除节点后新的二分搜索树的根
	privateRemove(node, e) {
		if (node === null) return null;
		if (e > node.e) {
			node.right = this.privateRemove(node.right, e);
			return node;
		} else if (e < node.e) {
			node.left = this.privateRemove(node.left, e);
			return node;
		} else { // e === node.e
			
			// 待删除节点左子树为空的情况
			if (node.left === null) {
				const rightNode = node.right;
				node.right = null;
				this.size--;
				return rightNode;
			}
			// 待删除节点右子树为空的情况
			if (node.right === null) {
				const leftNode = node.left;
				node.left = null;
				this.size--;
				return leftNode;
			}
			// 待删除节点左右子树均不为空的情况
			// 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
			// 用这个节点顶替待删除节点的位置
			const successor = this.privateMinimum(node.right);
			successor.right = this.privateRemoveMin(node.right);
			successor.left = node.left;
			node.left = node.right = null;
			return successor;
		}
	}
	
	toString() {
		let res = { v: '' };
		this.generateBSTString(this.root, 0, res);
		return res.v;
	}
	
	// 生成以node为节点，深度为depth的描述二叉树的字符串
	generateBSTString(node, depth, res) {
		if (node === null) {
			res.v += this.generateDepthString(depth) + 'null\n';
			return;
		}
		res.v += this.generateDepthString(depth) + node.e + '\n';
		this.generateBSTString(node.left, depth + 1, res);
		this.generateBSTString(node.right, depth + 1, res);
	}
	
	generateDepthString(depth) {
		let res = '';
		for (let i = 0; i < depth; i++) {
			res += '--';
		}
		return res;
	}
	
	// 二分搜索树的中序遍历
	inOrder() {
		this.privateInOrder(this.root);
	}
	
	// 中序遍历以node为根的二分搜索树，递归算法
	privateInOrder(node) {
		if (node === null) return;
		this.privateInOrder(node.left);
		console.log(node.e);
		this.privateInOrder(node.right);
	}
	
	// 二分搜索树的后序遍历
	// 应用：为二分搜索树释放内存
	postOrder() {
		this.privatePostOrder(this.root);
	}
	
	// 后序遍历以node为根的二分搜索树，递归算法
	privatePostOrder(node) {
		if (node === null) return;
		this.privatePostOrder(node.left);
		this.privatePostOrder(node.right);
		console.log(node.e);
	}
	
	// 二分搜索树的层序遍历/广度优先遍历
	levelOrder() {
		const queue = new LinkedListQueue();
		queue.enqueue(this.root);
		while (!queue.isEmpty()) {
			const cur = queue.dequeue();
			console.log(cur.e);
			if (cur.left !== null) {
				queue.enqueue(cur.left);
			}
			if (cur.right !== null) {
				queue.enqueue(cur.right);
			}
		}
	}
	
	// 二分搜索树的非递归前序遍历
	preOrderNR() {
		const stack = [];
		stack.push(this.root);
		while (stack.length > 0) {
			const cur = stack.pop();
			console.log(cur.e);
			if (cur.right !== null) {
				stack.push(cur.right);
			}
			if (cur.left !== null) {
				stack.push(cur.left);
			}
		}
	}
}

// 输出前序遍历结果
const println = () => {
	const bst = new BST();
	[5, 3, 6, 8, 4, 2].map(v => {
		bst.add(v);
	});
	// console.log('------ 前序遍历 start ------');
	// bst.preOrder();
	// console.log('------ 前序遍历 end ------');
	// console.log();
	//
	// console.log('------ 中序遍历 start ------');
	// bst.inOrder();
	// console.log('------ 中序遍历 end ------');
	// console.log();
	//
	// console.log('------ 后序遍历 start ------');
	// bst.postOrder();
	// console.log('------ 后序遍历 end ------');
	// console.log();
	//
	// console.log('------ 层序遍历 start ------');
	// bst.levelOrder();
	// console.log('------ 层序遍历 end ------');
	// console.log();
	//
	// console.log('------ 非递归前序遍历 start ------');
	// bst.preOrderNR();
	// console.log('------ 非递归前序遍历 end ------');
	// console.log();
	// console.log(bst.toString());
	console.log();
	console.log('------ 二叉树最小的值 start ------');
	console.log(bst.minimum());
	console.log('------ 二叉树最小的值 end ------');
	console.log();
	console.log('------ 二叉树最大的值 start ------');
	console.log(bst.maximum());
	console.log('------ 二叉树最大的值 end ------');
	console.log();
	
	bst.remove(5)
	console.log(bst.toString())
	
	// console.log(bst.removeMin());
	// console.log(bst.removeMax());
};

// println();

module.exports = { BSTNode, BST };
