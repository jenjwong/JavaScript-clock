const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const clockHands = document.querySelectorAll('.hand');

const moveHandCSS = (hand, timeDegree) => {
  hand.style.transform = `rotate(${timeDegree}deg)`;
};

const getDegree = (timeUnit, base) => {
  const degree = ((timeUnit / base) * 360) + 90;
  return degree;
};

const updateClock = (second, minute, hour) => {
  moveHandCSS(secondHand, getDegree(second, 60));
  moveHandCSS(minuteHand, getDegree(minute, 60));
  moveHandCSS(hourHand, getDegree(hour, 12));
};

const setTime = () => {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  updateClock(second, minute, hour);
};

setInterval(setTime, 1000);

(function(){
  setTime();
  clockHands.forEach((hand) => {
    hand.style.visibility = 'visible';
  });
}());
