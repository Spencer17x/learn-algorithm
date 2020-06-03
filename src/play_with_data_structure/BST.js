/**
 * 二分搜索树
 */
	
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
}

module.exports = { BSTNode, BST };
