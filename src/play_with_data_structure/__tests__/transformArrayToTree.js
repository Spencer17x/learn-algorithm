const transformToTreeList = require('../transformArrayToTree');

describe('测试数组列表', () => {
	it('数据转换', function () {
		const list = [
			{ name: '人1', id: 1, pid: 0 },
			{ name: '人2', id: 2, pid: 0 },
			{ name: '人3', id: 3, pid: 1 },
			{ name: '人4', id: 4, pid: 1 },
			{ name: '人5', id: 5, pid: 2 },
			{ name: '人6', id: 6, pid: 2 },
		];
		let root = {
			name: '根',
			id: 0,
			pid: -1
		};
		expect(transformToTreeList(list, root)).toEqual({
			name: '根',
			id: 0,
			pid: -1,
			children: [
				{
					name: '人1', id: 1, pid: 0,
					children: [
						{ name: '人3', id: 3, pid: 1, children: [] },
						{ name: '人4', id: 4, pid: 1, children: [] },
					]
				},
				{
					name: '人2', id: 2, pid: 0,
					children: [
						{ name: '人5', id: 5, pid: 2, children: [] },
						{ name: '人6', id: 6, pid: 2, children: [] },
					]
				},
			]
		});
	});
});
