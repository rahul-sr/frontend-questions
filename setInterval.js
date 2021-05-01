/**
 * customSetInterval is a custom implementation of SetInterval method
 * which executes a callback at a regular interval until its cleared
 * @param {*} cb - the callback to be executed at the specific interval
 * @param {*} waitMs - the interval in milliseconds
 * @returns - the timerId to clear the customSetInterval
 */

 const timer = (function () {
  let clearIntervalTimerMap = {};

  function customSetInterval(cb, waitMs) {
    let timerId;
    const helper = () => {
      if(!clearIntervalTimerMap[timerId]){
        timerId = setTimeout(() => {
          cb();
          helper();
        }, waitMs);
        return timerId;
      }
    };

    return helper();
  }

  function customClearInterval(timerId) {
    clearIntervalTimerMap[timerId] = true;
    clearTimeout(timerId);
  }

  return {
    customSetInterval,
    customClearInterval
  }

}());



// For testing the method
const timerID = timer.customSetInterval(() => { console.log('message') }, 2000);
//timer.customClearInterval(timerID);
