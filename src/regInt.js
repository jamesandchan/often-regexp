import regBaseNum from "./regBaseNum";
import regZeroInt from "./regZeroInt";

//非零开头整数，第二参数控制输入整数的位数
export default function regInt (p , w ){
let n = w || '';
  p = regZeroInt(p,n);
  p = p.replace(/^0*/,'');  //非0开头
  return p;
} 