/**
 * Timer is a custom implementation of SetInterval and ClearInterval method
 * which executes a callback at a regular interval using customSetInterval
 * until its cleared using customClearInterval
 */

 const timer = (function () {
  let clearIntervalTimerMap = {};

  /**
   * customSetInterval is a custom implementation of SetInterval
   * @param {*} cb - the callback to be executed at the specific interval
   * @param {*} waitMs - the interval in milliseconds
   * @returns - the timerId to clear the customSetInterval
   */
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

  /**
   * customClearInterval is a custom implementation of clearInterval
   * @param {*} timerId - to clear the existing setInterval method using its timerID returned
   */

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
