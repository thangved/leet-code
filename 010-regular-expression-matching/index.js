/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    p = new RegExp(`^${p.replace('*', '.{0,}')}$`);

    return !!s.match(p);
};
