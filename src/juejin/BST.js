function TreeNode(val = null) {
	this.val = val;
	this.left = this.right = null;
}

class BST extends TreeNode {
	constructor() {
		super();
	}

	/**
	 * 暴露出去的添加节点的方法
	 * @param val
	 * @returns {TreeNode|BST}
	 */
	add(val) {
		if (this.val) {
			return this.privateAdd(this, val);
		} else {
			this.val = val;
			return this;
		}
	}

	/**
	 * 递归添加
	 * @param node
	 * @param val
	 * @returns {TreeNode|*}
	 */
	privateAdd(node, val) {
		if (node === null) return new TreeNode(val);
		if (node.val > val) {
			node.left = this.privateAdd(node.left, val);
		} else if (node.val < val) {
			node.right = this.privateAdd(node.right, val);
		}
		return node;
	}

	/**
	 * 前/先序遍历
	 */
	preOrder() {
		return this.privatePreOrder(this, []);
	}

	privatePreOrder(node, preOrderArr) {
		if (node === null) return;
		preOrderArr.push(node.val);
		// console.log(node.val);
		this.privatePreOrder(node.left, preOrderArr);
		this.privatePreOrder(node.right, preOrderArr);
		return preOrderArr;
	}

	/**
	 * 中序遍历
	 */
	inOrder() {
		return this.privateInOrder(this, []);
	}

	privateInOrder(node, inOrderArr) {
		if (node === null) return;
		this.privateInOrder(node.left, inOrderArr);
		inOrderArr.push(node.val);
		// console.log(node.val);
		this.privateInOrder(node.right, inOrderArr);
		return inOrderArr;
	}

	/**
	 * 后序遍历
	 * @returns {[]}
	 */
	postOrder() {
		return this.privatePostOrder(this, []);
	}

	privatePostOrder(node, postOrderArr) {
		if (node === null) return;
		this.privatePostOrder(node.left, postOrderArr);
		this.privatePostOrder(node.right, postOrderArr);
		postOrderArr.push(node.val);
		return postOrderArr;
		// console.log(node.val);
	}
}

module.exports = { BST };

