//定义表示记分牌的类
export default class ScorePanel {
  //score 和level 表示分数和等级
  score=0;
  level=1;
  //分数和函数所在的元素，在构造函数中进行初始化
  scoreEle:HTMLElement;
  levelEle:HTMLElement;

  //设置一个变量限制等级
  maxLevel:number;
  
  //设置一个变量表示多少分的时候升级
  upScore:number;
  constructor(maxLevel = 10,upScore = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  //设置一个加分的方法
  addScore(){
    this.scoreEle.innerHTML =++this.score +''
    //判断分数是多少
    if(this.score % this.upScore === 0){
      //当分数满足upScore分的时候升一级
        this.levelUp();
    }
  }
  //提升等级的方法
  levelUp(){
    //当等级小于maxLevel的时候，设置最高的等级为maxLevel级的时候，等级不变
    if(this.level < this.maxLevel){
      //最后要转换成字符串
      this.levelEle.innerHTML =++this.level +''
    }
    
  }

}