const { BST } = require('../BST');

describe('测试二分搜索树', function () {
	const node = new BST();
	node.add(1);
	node.add(2);
	node.add(3);
	it('测试add', function () {
		expect(node).toEqual({
			root: {
				e: 1, left: null, right: {
					e: 2, left: null, right: {
						e: 3, left: null, right: null
					}
				}
			},
			size: 3
		});
	});
	
	it('测试contain', function () {
		expect(node.contain(1)).toBeTruthy();
		expect(node.contain(2)).toBeTruthy();
		expect(node.contain(9)).toBeFalsy();
	});
});
