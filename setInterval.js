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

// Test the method
customSetInterval(() => {console.log('message')}, 2000);
