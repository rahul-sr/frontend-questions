/**
 * customSetInterval is a custom implementation of SetInterval method
 * which executes a callback at a regular interval until its cleared
 * @param {*} cb - the callback to be executed at the specific interval
 * @param {*} waitMs - the interval in milliseconds
 * @returns - the timerId to clear the customSetInterval
 */
function customSetInterval(cb, waitMs) {
  const helper = () => {
    const timerId = setTimeout(() => {
      cb();
      helper();
    }, waitMs);
    return timerId;
  };

  return helper();
}

// For testing the method
customSetInterval(() => {console.log('message')}, 2000);

