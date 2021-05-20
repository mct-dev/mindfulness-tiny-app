import './firebase.mjs';
import {ui} from './ui.mjs';

/**
 *
 * @param {string} value
 */
function output(value) {
  const timerElementId = 'timer';
  const targetElement = document.getElementById(timerElementId);

  targetElement.innerHTML = value;
}

/**
 *
 */
function initTimer() {
  const start = Date.now();

  setInterval(() => {
    const delta = Date.now() - start;
    const deltaInSeconds = Math.floor(delta / 1000);

    output(deltaInSeconds + ' seconds since ' + new Date(start).toISOString());
  }, 1000);
}


ui.getAllEntries();
initTimer();
