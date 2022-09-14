/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	let left = 0;
	let right = nums.reduce((prev, curr, i) => (i === 0 ? 0 : prev + curr), 0);

	for (let i = 0; i < nums.length; i++) {
		if (left === right) {
			return i;
		}
		left += nums[i + 1];
		right -= nums[i];
	}

	return -1;
};

