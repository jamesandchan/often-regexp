import regBaseNum from "./regBaseNum";

//可以是零开头整数，第二参数控制输入整数的位数
export default function regZeroInt (p , w ){
let n = w || '';
  p = regBaseNum(p);
  p = p.replace(/(\d+)(\.\d*)/g,'$1'); //去除小数点及以后的数字
  if(n){
      let reg = new RegExp("^(.{0,"+n+"}).*$");
      p = p.replace(reg,"$1");  
  }
  return p;
}
