// 1.create a random number
var randomNumber1 = Math.random()*6;
randomNumber1 = Math.ceil(randomNumber1);

var randomNumber2 = Math.random()*6;
randomNumber2 = Math.ceil(randomNumber2);

// 2.change the player1 dice
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

// 3.change the player2 dice
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

// 4.display winner
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").textContent="✨Player 1 wins!"
}else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").textContent="Player 2 wins!✨"
}else{
  document.querySelector("h1").textContent="Draw!"
}
// 5.add refresh button
document.querySelector(".myButton").onclick = function fresh()
{
  location.reload();
}
