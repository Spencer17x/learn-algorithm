const getMax = (arr, l, r) => {
	if (l === r) return arr[l];
	const mid = Math.floor((l + r) / 2);
	const maxLeft = getMax(arr, l, mid);
	const maxRight = getMax(arr, mid + 1, r);
	return Math.max(maxLeft, maxRight);
};

const testArr = [1, 2, 2, 3, 2];

console.log(getMax(testArr, 0, testArr.length - 1));
