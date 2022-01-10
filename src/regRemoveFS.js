//去掉首字符空隔
export default function regRemoveFS (p){ 
  p = p.toString();
  p = p.replace(/^\s*/,"");
  return p;
}