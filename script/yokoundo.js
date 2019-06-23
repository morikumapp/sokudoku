//スムーズに画像を表示させるために先に画像を読み込む

var image = new Array();                    //カウントダウン用配列を宣言

image[0]=new Image();                       //配列［０］に画像を入れる
image[0].src="./images/yokoe/yoko-00.png"; //配列［０］の画像のパス

image[1]=new Image();
image[1].src="./images/yokoe/yoko-c03.png";

image[2]=new Image();
image[2].src="./images/yokoe/yoko-c02.png";

image[3]=new Image();
image[3].src="./images/yokoe/yoko-c01.png";


image[4]=new Image();
image[4].src="./images/yokoe/yoko-01.png";

image[5]=new Image();
image[5].src="./images/yokoe/yoko-02.png";

image[6]=new Image();
image[6].src="./images/yokoe/yoko-03.png";

image[7]=new Image();
image[7].src="./images/yokoe/yoko-04.png";

image[8]=new Image();
image[8].src="./images/yokoe/yoko-05.png";

image[9]=new Image();
image[9].src="./images/yokoe/yoko-06.png";

image[10]=new Image();
image[10].src="./images/yokoe/yoko-07.png";

image[11]=new Image();
image[11].src="./images/yokoe/yoko-08.png";

image[12]=new Image();
image[12].src="./images/yokoe/yoko-09.png";

image[13]=new Image();
image[13].src="./images/yokoe/yoko-10.png";

image[14]=new Image();
image[14].src="./images/yokoe/yoko-11.png";

image[15]=new Image();
image[15].src="./images/yokoe/yoko-12.png";

image[16]=new Image();
image[16].src="./images/yokoe/yoko-13.png";

image[17]=new Image();
image[17].src="./images/yokoe/yoko-14.png";

var cnt = 0;                              //カウンターを宣言
var msec = 440;                           //表示間隔を宣言し、600を代入
//関数slideswを宣言

function main(){


if(msec >= 200){

slidesw();
}
else{
msec = 440;
cnt = 0;
document.getElementById("sd").src  = "./images/yokoe/yoko-00.png";

}
}

function slidesw(){
  //getElementByIdが使える時のみ後の処理を実行
  document.slide.elements[0].disabled = true;

  if(document.getElementById){

    //id属性が［sd］の画像タグの画像パスを切り替える
    document.getElementById("sd").src=image[cnt].src;
    
    cnt ++;     //上の処理が終わったらカウンターに1を足す
    
    if(cnt <=17){
      //まだ表示されていなければ1秒ごとに画像を切り替える
      var timer1=setTimeout("slidesw()",msec);
      
    }
    else{
      
      cnt = 4;
      setTimeout("main()",msec);  //タイマーの終了
      msec -= 40;
      //全て表示されたらボタンを押せるようにする
      document.slide.elements[0].disabled = false;
      
    }
  }
}


