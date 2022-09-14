/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const a1 = Array.from(num1);
    const a2 = Array.from(num2);

    const result = [];

    let i = 1;
    let prev = 0;

    while (true) {
        if (a1[a1.length - i] === undefined && a2[a2.length - i] === undefined) {
            break;
        }

        const a = a1[a1.length - i] || 0;
        const b = a2[a2.length - i] || 0;

        i++;
    }

    return result.join('');
};