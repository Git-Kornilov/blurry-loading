'use strict';

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const blurring = function () {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;

  // scale fade out
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  //   // simple fade out (opacity)
  //   loadText.style.opacity = load < 99 ? 1 : 0;
  //   bg.style.filter = `blur(${100 - load}px)`;
};

let int = setInterval(blurring, 30);
