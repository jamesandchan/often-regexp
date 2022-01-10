# often-regexp

****

**介绍**

常用正则匹配，主要是限制input输入时，只能是浮点数（如0.1 / 1.01），整数（如123），通过第二个控制输入的位置。如果是小数，第二个参数则是控制小数点后的位数

## Features

  - 1去掉字符中所有空隔：**regRemoveAllS**
  - 2去掉首字符空隔：**regRemoveFS**
  - 3去掉首尾字符空隔：**regRemoveFES**
  - 4输入小数：**regBaseNum**
  - 5浮点数，可以是0开头小数（p > 0），第二参数控制小数点后位数：**regFloat**
  - 6整数/浮点数，非0开头小数（p > 1），第二参数控制小数点后位数：**regFloatGtZero**
  - 7可以是零开头整数，第二参数控制输入整数的位数：**regZeroInt**
  - 8非零开头整数，第二参数控制输入整数的位数：**regInt**

## Set up

The library is the single JavaScript file *often-regexp.js*.

Browser:

```html
<script src='path/to/often-regexp.js'></script>
```

[Node.js](http://nodejs.org):

```bash
$ npm install often-regexp
```

```bash
$ yarn add often-regexp
```

```javascript
const oftenRegExp = require('often-regexp.js');
```

ES6 module:

```javascript
import _ from 'often-regexp';
```
## Use

The library exports a single function, 
    
1.去掉字符中所有空隔：
>**regRemoveAllS**
```javascript
    let str = ' a b c ';
    console.log(regRemoveAllS(str))    // 'abc'
```

2.去掉首字符空隔：
>**regRemoveFS**
```javascript
    let str = ' a b c ';
    console.log(regRemoveFS(str))     // 'a b c '
```

3.去掉首尾字符空隔：
>**regRemoveFES**
```javascript
    let str = ' a b c ';
    console.log(regRemoveFES(str))    // 'a b c'
```

4.输入小数，过滤输入的内容保留小数，如：0.12abc,返回(0.12)：
>**regBaseNum**
```javascript
    let str = '0.12abc ';
    console.log(regBaseNum(str))    // '0.12'
```

5.浮点数，可以是0开头小数（p > 0），第二参数控制小数点后位数，如：0.12a,返回(0.12)：
>**regFloat**
```javascript
    let str = '0.12a ';
    console.log(regFloat(str,2))    // '0.12'
```

6.整数/浮点数，非0开头小数（p > 1），第二参数控制小数点后位数，如：1.2a,返回(1.2)：
>**regFloatGtZero**
```javascript
    let str = '1.21a ';
    console.log(regFloatGtZero(str,1))    // '1.2'
```

7.可以是零开头整数，第二参数控制输入整数的位数，如：'a012345',返回(012345)：
>**regZeroInt**
```javascript
    let str = 'a012345 ';
    console.log(regZeroInt(str,3))    // '012'
```

8.非零开头整数，第二参数控制输入整数的位数，如：'a012345',返回(12345)：
>**regInt**
```javascript
    let str = 'a012345 ';
    console.log(regInt(str,3))    // '12'
```

