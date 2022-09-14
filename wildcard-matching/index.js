/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const strp = `^${p.replace(/\*/g, '.{0,}').replace(/\?/g, '.{1}')}$`.replace(/(\.\{0\,\})+/g, '.{0,}');
    p = new RegExp(strp);

    console.log(strp.length, s.length);

    return !!s.match(p);
};

console.log(
    isMatch(
        'abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb',
        '**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb')
);
