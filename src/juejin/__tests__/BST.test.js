const { BST } = require('../BST');

describe('掘金小册二叉树学习', () => {
	it('测试BST', () => {
		const tree = new BST();
		tree.add(3).add(2).add(1).add(4).add(5);
		expect(tree).toEqual({
			val: 3,
			left: {
				val: 2,
				left: {
					val: 1,
					left: null,
					right: null
				},
				right: null
			},
			right: {
				val: 4,
				left: null,
				right: {
					val: 5,
					left: null,
					right: null
				}
			}
		});
		expect(tree.preOrder()).toEqual([3, 2, 1, 4, 5]);
		expect(tree.inOrder()).toEqual([1, 2, 3, 4, 5]);
		expect(tree.postOrder()).toEqual([1, 2, 5, 4, 3]);
	});
});