//去掉首尾字符空隔
export default function regRemoveFES (p){ 
  p = p.toString();
  p = p.replace(/^\s*|\s*$/g,"");
  return p;
}