var randomNumber1=Math.random();   //0 - 0.9999999999999999
randomNumber1=randomNumber1*6;    //0 - 5.9999999999999999
randomNumber1=Math.floor(randomNumber1)+1; //1-6

var randomDiceImage="dice"+randomNumber1+".png";//dice1.png-dice6.png

var randomImageSource ="images/" + randomDiceImage;//images/dice1.png-images/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.random();   //0 - 0.9999999999999999
randomNumber2=randomNumber2*6;     //0 - 5.9999999999999999
randomNumber2=Math.floor(randomNumber2)+1;//1-6

var randomImageSource2="images/dice"+randomNumber2+".png";//images/dice1.png-images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🥳 Player First Wins";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="🥳 Player Second Wins";
}

else{
  document.querySelector("h1").innerHTML="😎 Match Tie";
}
