import Food from './foot'
import ScorePanel from './scorePanel'
import Snake from './snake'

//游戏的控制器  控制其他的所有类
export default class GameControl{

  //定义三个属性
  //蛇
  snake:Snake;
  //食物
  food:Food;
  //记分牌
  scorePanel:ScorePanel;

  //创建一个属性来接收蛇饿方向(按键按下的方向)
  direction:string = '';

  //创建一个属性用来记录游戏是否结局
  isLive = true;

  constructor(){
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  //游戏初始化  调用则开始
  init(){
    //绑定键盘按下的事件
    document.addEventListener('keydown',this.keydownHandlder.bind(this))

    //调用run方法 使蛇运动起来
     this.run()
  }

  /*
   chrome:  ArrowUp     IE:     Up
            ArrowDown           Down
            ArrowLeft           Left
            ArrowRight          Right
  */
  //创建一个键盘按下的响应函数
  keydownHandlder(event:KeyboardEvent){
    //需要检测eveny.key的值是否合法(用户是否按了正确的案件)

    //修改direction的属性
    this.direction = event.key
  }

  //创建一个控制蛇移动的方法
  run(){
    /*
      根据this.direction来使蛇的位置改变
        向上  top减少
        向下  top增加
        向左  left减少
        向右  left减少
    */
   
      //获取蛇现在的坐标
      let X = this.snake.X;
      let Y = this.snake.Y;
      //根据按键的方向计算X，Y的值
      switch (this.direction) {
       
        case 'ArrowUp':
        case 'Up':
           //向上移动，Y减小
            Y -= 10;
            break;
        
        case 'ArrowDown':
        case 'Down':
          //向下移动,Y增加
            Y += 10;
            break;
       
        case 'ArrowLeft':
        case 'Left':
           //向左移动，X减小
              X -= 10;
              break;
        
        case 'ArrowRight':
        case 'Right':
            //向右移动，X增加
              X += 10;
              break;
      }
      //修改蛇的值
      this.snake.X = X
      this.snake.Y = Y

      //开启定时的调用
      this.isLive && setTimeout(() => {
        this.run.bind(this)
      }, 300 - (this.scorePanel.level-1)*30);
  }
}