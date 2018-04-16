/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 */
/**
 *
 * 1.遍历每一个字符。
 * 2.字符从向两边查找。（分两种情况："aba"; "abba"）;
 * L: 左字符串index
 * R: 右字符串index
 * maxLength：最大长度
 * 根据最大长度和当前位置计算L和R
 * L = i - (maxLength - 1) / 2; 这里之所以减一，是因为在最大长度为偶数位的时候，在计算左index和最大长度的关系需要注意。
 * R = i + (maxLength - 1) / 2;
 *
 * s.charAt(left) == s.charAt(right) && left >= 0 && right < s.length
 * 至于计算长度的判断条件，由于是先成立在加加，所以left >= 0
 * @param s
 */

var longestPalindrome = function (s) {
    var maxLength = 0;
    var L = 0;
    var R = 0;
    for (var i = 0; i < s.length; i++) {
        var L1 = findPalindrome(s, i, i + 1);
        var L2 = findPalindrome(s, i, i);
        console.log(L1,L2);
        maxLength = Math.max(L1, L2);
        if (maxLength > R - L) {
            R = i + maxLength / 2;
            L = i - parseInt((maxLength - 1) / 2); //这里为什么要maxLength - 1？？ :这里是为了统一处理L1和L2的情况，如果是L2的时候，就需要-1.
        }
    }
    console.log(s.substr(L, R - L + 1))

};

function findPalindrome(s, left, right) {
    while (s.charAt(left) == s.charAt(right) && left > 0 && right < s.length) { //这里为什么要写left >= 0 而不是left > 0？？
        left--;
        right++;
    }
    return right - left + 1;
}

var s = 'abccba';
longestPalindrome(s);