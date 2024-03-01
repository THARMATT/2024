# 2864. Maximum Odd Binary Number
You are given a `binary` string `s` that contains at least one `'1'`.

You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

Return a string `representing the maximum odd binary number that can be created from the given combination.`

Note that the resulting string can have leading `zeros`.

```js
var maximumOddBinaryNumber = function(s) {
    let chars = s.split('').sort().reverse();
    for (let i = chars.length - 1; i >= 0; i--) {
        if (chars[i] === '1') {
            [chars[i], chars[chars.length - 1]] = [chars[chars.length - 1], chars[i]];
            break;
        }
    }
    return chars.join('');
};
```