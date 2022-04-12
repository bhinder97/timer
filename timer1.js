// setTimeout(() => {process.stdout.write('\x07')}, 3000);

let newArr = process.argv.slice(2);

const timer = function(timerArr) {
  for (let i = 0; i < timerArr.length; i++) {
    if (timerArr[i] < 0 || (typeof timerArr[i] !== "number")) {
      console.log('err');
    } else {
      setTimeout(() => {
        process.stdout.write('.');
      }, timerArr[i] * 1000);
      setTimeout(() => {
        process.stdout.write(`\n`);
      }, timerArr[i] * 1000);
    }
  }
};

timer(newArr);