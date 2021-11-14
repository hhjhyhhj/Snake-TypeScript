//定义蛇
export default class Snake{
    //表示蛇头的元素
    head:HTMLElement;
    //蛇的身体（包括蛇头）
    bodies:HTMLCollection;
    //获取蛇的容器
    element:HTMLElement;
    constructor(){
      // 头
      this.head = document.querySelector('#snake')!;
      // 身体
      this.bodies = document.getElementById('snake')!.getElementsByTagName('div')!
      //蛇头
      this.element = document.getElementById('snake')!
    }

    //获取蛇的X坐标(主要是蛇头)
    get X(){
      return this.head.offsetLeft;
    }
    //获取蛇的Y坐标(主要是蛇头)
    get Y(){
      return this.head.offsetTop;
    }

    //设置蛇头的X轴坐标
    set X(value){
      this.head.style.left = value + 'px'
    }
    //设置蛇头的Y轴坐标
    set Y(value){
      this.head.style.top = value + 'px'
    }

    //蛇增加身体的方法
    addBody(){
      //向element中增加一个div
      // 将 <div></div> 这个元素添加到this.element这个元素的最后
      this.element.insertAdjacentHTML('beforeend','<div></div>')
    }
}