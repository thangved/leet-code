/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const isNegative = x < 0;

    x = Math.abs(x);

    let result = Array.from(String(x)).reverse().join('');

    if (isNegative) {
        result = Number(`-${result}`);
    }
    else {
        result = Number(result);
    }

    if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
        return 0;
    }

    return result;

};