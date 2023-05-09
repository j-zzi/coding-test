function solution(s) {
    numList = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];

    for (let index = 0; index < numList.length; index++) {
        s = s.replaceAll(numList[index], index);
    }

    return parseInt(s);
}