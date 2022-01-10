import regBaseNum from "./regBaseNum";
import regFloat from "./regFloat";

//整数/浮点数，非0开头小数（p > 1），第二参数控制小数点后位数
export default function regFloatGtZero ( p , w ){
let n = w || '';
  p = regFloat(p,n);
  p = p.replace(/^0*/,'');   //非0开头
  return p;
}