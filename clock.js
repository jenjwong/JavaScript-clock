const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const clockHand = document.querySelector('.hand');

const moveHandCSS = (hand, timeDegree) => {
  hand.style.transform = `rotate(${timeDegree}deg)`;
};

const getDegree = (timeUnit, base) => {
  const degree = ((timeUnit / base) * 360) + 90;
  return degree;
};

const updateClock = (second, minute, hour) => {
  const degreeSecond = getDegree(second, 60);
  const degreeMinute = getDegree(minute, 60);
  const degreeHour = getDegree(hour, 12);

  moveHandCSS(secondHand, degreeSecond);
  moveHandCSS(minuteHand, degreeMinute);
  moveHandCSS(hourHand, degreeHour);
};

const setTime = () => {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  updateClock(second, minute, hour);
};

setInterval(setTime, 1000);
