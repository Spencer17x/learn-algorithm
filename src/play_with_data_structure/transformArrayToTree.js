function transformToTreeList(list, root) {
	list.map(l => ({
		...l,
		children: []
	})).map(node => {
		root = addToRoot(node, root);
	});
	return root;
}

function addToRoot(node, root = {}) {
	root.children = root.children || [];
	if (root.id === node.pid) {
		root.children.push(node);
	} else {
		root.children.forEach(n => {
			addToRoot(node, n);
		});
	}
	return root;
}

module.exports = transformToTreeList;
