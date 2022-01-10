//限制只能输入小数
export default function regBaseNum ( p ) {
  p = p.toString(); 
  p = p.replace(/[^\d.]/g,'');                    //去除非数字，只留下数字和'.' 
  p = p.replace(/^\./,'');                        //不能以点开头
  p = p.replace(/(^0)(0)(\.*\d*)/,'$1$3');      //0开头后面不能再是0
  p = p.replace(/\.{2,}/g,'.');                   //1..连续输入，点只能输入一个
  p = p.replace(/(\d+)(\.)(\d+)(\.)/g,'$1$2$3');  //1.2.3 去除隔断输入‘.’
  return p;
}