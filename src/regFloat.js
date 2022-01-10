import regBaseNum  from "./regBaseNum";
//浮点数，可以是0开头小数（p > 0），第二参数控制小数点后位数
export default function regFloat ( p , w ){
let n = w || '';
  p = regBaseNum(p);
  if(n){//限制小数点后的位数 
      let reg = new RegExp("(\\d+)(.\\d{0,"+n+"})(\\d*)$");
      p = p.replace(reg,"$1$2");    
  }
  return p;
}