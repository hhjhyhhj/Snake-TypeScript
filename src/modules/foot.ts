//定义类Foot
export default class Food{
  //定义一个属性表示食物所对应的元素
  element:HTMLElement;
  constructor(){
    //获取页面的foot元素并将其赋值给element ！表示不可能为空
    this.element = document.getElementById('foot')!;
  }
  //获取食物x轴坐标
  get X(){
    return this.element.offsetLeft;
  }
  //获取食物Y轴坐标
  get Y(){
    return this.element.offsetTop;
  }
  //修改食物位置的方法
  change(){
    //生成随机的位置
    //食物的位置最小是0，最大时290
    //蛇移动一次就是一格 一格大小就是10 所有要求就是整10 Math.random生成的是0-1的小数
    let left = Math.round(Math.random()*29) * 10
    let top = Math.round(Math.random()*29) * 10
    this.element.style.left=left + 'px'
    this.element.style.top=top + 'px'
  }
}
