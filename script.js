//idea
//building a random button ball selector game
//the selected random ball brightens up everytime
//after 20clicks, the selected ball returns the number.
//If the number is lesser than 5, the player loses

//logic
//first collect the balls using the js selectors
//loop through them
//place them in an array
//on click, add opacity to each ball
//the count of every click is posted on the screen
//after 12 clicks and the ball is lesser then 5
//Game over appears in h1 form

const balls = document.querySelectorAll(".parent div");
//console.log(balls);

const h1 = document.querySelector("h1");
//console.log(h1);

const btn = document.querySelector("button");
//console.log(btn);
let randomBallIndex = 0;
let emptyArr = [];

const loopingBalls = () => {
  //console.log(ball, index);

  for (let i = 0; i < balls.length; i++) {
    balls[i].classList.remove("opaque");
  }

  randomBallIndex = Math.floor(Math.random() * balls.length);
  balls[randomBallIndex].classList.add("opaque");
  //console.log(randomBallIndex);
  //console.log(randomBall);
  //ball.forEach((pallone) => {});

  if (!emptyArr.includes(randomBallIndex)) {
    emptyArr.push(randomBallIndex);
  }
};

btn.addEventListener("click", loopingBalls);

/* for (let i = 0; i < balls.length; i++) {
  console.log(balls[i]);
} */
//console.log(ballsIndex);

//btn.addEventListener("click");
