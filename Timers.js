// Working with Node.js Asynchronously
// Using timer Functions : set Timeout, clear TimeOut, set interval, clear interval
// they are available globally and the work same way as the work in the browser.


//   create a constant for waiting time 
//   let's our wait time 3,000 milliseconds

const waitTime = 3000;

//   Now log a message in the console 
//   Using template literals/strings (using back tick characters)
//   Dividing waitTime by 1,000 will get the time we're waiting


console.log(`Setting a ${waitTime/1000} second delay`);

//   Now let's create a function to invoke
//   when the timer is finished
//   This will be an arrow function containing a message "done"

const timeFinished = () => console.log("done");

//   Now we are ready to use set timeout function
//   It'll take to arguments 
//   The first argument is the function to invoke 
//   when the timer is completed
//   The second argument is the time that we should wait for delay.

setTimeout(timeFinished, waitTime);

//   So, Now the process will run Asynchronously
//   After waiting 3 seconds it will log the message "done" and complete the process.