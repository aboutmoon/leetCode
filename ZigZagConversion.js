/***
 The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

 P   A   H   N
 A P L S I I G
 Y   I   R
 And then read line by line: "PAHNAPLSIIGYIR"
 Write the code that will take a string and make this conversion given a number of rows:

 string convert(string text, int nRows);

 IF nRows = 4;

 P          I           N
 A      L   S       I   G
 Y  A       H   R
 P          I

 OUTPUT: PINALSIGPAHRPI

 IF nRows = 5
0 P              H
1 A          S   I
2 Y      I       R
3 P  L           I   G
4 A              N

 OUTPUT: PHASIYIRPLIGAN

 */


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length <= 1 || numRows == 1) {
        return s;
    }

    var arr = Array();
    for (let i = 0; i < numRows; i++) {
        arr[i] = Array();
    }

    for (let i = 0; i < s.length; i++) {
        let index = i % (2*numRows - 2);
        index = index < numRows? index: 2 *numRows - 2 - index;
        arr[index].push(s.charAt(i));
    }
    var str = '';
    for (let i = 0; i < numRows; i++) {
        str += arr[i].join('')
    }

    return str;
};

var str = 'PAYPALISHIRING';
convert(str, 4);