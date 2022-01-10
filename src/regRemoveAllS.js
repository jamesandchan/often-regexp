//去掉字符中所有空隔
export default function regRemoveAllS(p){ 
  p = p.toString();
  p = p.replace(/\s*/g,"");
  return p;
}