class SortArrayMethods {
	/**
	 * 数组中两个值位置交换
	 * @param arr
	 * @param i
	 * @param j
	 */
	swap(arr, i, j) {
		const temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	
	/**
	 * 冒牌排序
	 * 相邻索引的两个值对比交换位置
	 * 时间复杂度 O(n^2)
	 * @param arr
	 * @returns {*}
	 */
	bubble_sort(arr) {
		if (arr.length < 2 || !Array.isArray(arr)) return;
		for (let i = 0; i < arr.length - 1; i++) {
			for (let j = 0; j < arr.length - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					this.swap(arr, j, j + 1);
				}
			}
		}
		return arr;
	}
	
	/**
	 * 选择排序
	 * 0 - arr.length 选个最小的和0交换
	 * 1 - arr.length 选个最小的和1交换
	 * 2 - arr.length 选个最小的和2交换
	 * 依次执行
	 * 时间复杂度 O(n^2)
	 * @param arr
	 */
	selection_sort(arr) {
		if (arr.length < 2 || !Array.isArray(arr)) return;
		for (let i = 0; i < arr.length; i++) {
			let minIndex = i;
			for (let j = i + 1; j < arr.length; j++) {
				minIndex = arr[j] < arr[minIndex] ? j : minIndex;
			}
			this.swap(arr, i, minIndex);
		}
		return arr;
	}
	
	/**
	 * 插入排序
	 * 类似抓牌
	 * 复杂度和数据状况有关，如果已经排好序则为 O(n)，逆序为O(n ^ 2)
	 * @param arr
	 */
	insert_sort(arr) {
		if (arr.length < 2 || !Array.isArray(arr)) return;
		for (let i = 1; i < arr.length; i++) {
			for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
				this.swap(arr, j, j + 1);
			}
		}
		return arr;
	}
	
	/**
	 * 归并排序
	 * @param arr
	 */
	merge_sort(arr) {
		if (arr.length < 2 || !Array.isArray(arr)) return;
		return this.sortProcess(arr, 0, arr.length - 1);
	}
	
	sortProcess(arr, l, r) {
		if (l === r) return;
		const mid = Math.floor((l + r) / 2);
		this.sortProcess(arr, l, mid);
		this.sortProcess(arr, mid + 1, r);
		return this.merge(arr, l, mid, r);
	}
	
	merge(arr, l, mid, r) {
		const help = new Array(r - l + 1);
		let i = 0;
		let p1 = l;
		let p2 = mid + 1;
		while (p1 <= mid && p2 <= r) {
			help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
		}
		while (p1 <= mid) {
			help[i++] = arr[p1++];
		}
		while (p2 <= r) {
			help[i++] = arr[p2++];
		}
		for (let j = 0; j < help.length; j++) {
			arr[l + j] = help[j];
		}
		return arr;
	}
}

const sortArrayMethods = new SortArrayMethods();
console.log(sortArrayMethods.bubble_sort([22, 34, 3, 32, 82]));
console.log(sortArrayMethods.selection_sort([22, 34, 3, 32, 82]));
console.log(sortArrayMethods.insert_sort([22, 34, 3, 32, 82]));
console.log(sortArrayMethods.merge_sort([22, 34, 3, 32, 82]));
