/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let max = 0;

	for (let i = 0; i < height.length - 1; i++) {
		for (let j = parseInt(i + max / height[i]); j < height.length; j++) {
			const v = Math.min(height[i], height[j]) * (j - i);
			if (max < v) {
				max = v;
			}
		}
	}

	return max;
};

