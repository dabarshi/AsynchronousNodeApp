// Working with Node.js Asynchronously
// Using timer Functions : set Timeout, clear TimeOut, set interval, clear interval
// they are available globally and the work same way as the work in the browser.
//  ___________________________________________________________________________

//  Now, we are going to improve our Timers.js application
//  Using set interval function to run an interval
//  that intermittently reports on how long we've waited

//      First create a constant for waiting time
//      Let's our wait time be 3,000 milliseconds (3 seconds)

const waitTime = 3000;

//      now create a constant for wait interval
//      the wait interval will be half a second (500 millisecond)

const waitInterval = 500;

//      And create a variable for current time 
//      The initial value for current time be zero
//      Which will change with time

let currentTime = 0;

//   Now log a message in the console 
//   Using template literals/strings (using back tick characters)
//   Dividing waitTime by 1,000 will get the time we're waiting


console.log(`Setting a ${waitTime/1000} second delay`);

//  So, now declare a function incTime
//  which will increment current time by the wait interval
//  also log a message on the console
//  waiting current time divide by 1000 millisecond

const incTime = () => {
    currentTime += waitInterval;
    console.log(`waiting for ${currentTime/1000} second`)
};

//  Now declare the set Interval function 
//  it'll take two argument
//  first argument will be the function to invoke
//  second argument will be the interval time 
//  it will call the incTime function over and over 
//  again in every half second

const interval = setInterval(incTime, waitInterval);

//   Now let's create a function to invoke
//   when the timer is finished
//   This will be an arrow function containing a message "done"
//   And clear the set interval using clearInterval function

const timeFinished = () => {
    clearInterval(interval);
    console.log("done");
};

//   Now we are ready to use set timeout function
//   It'll take to arguments 
//   The first argument is the function to invoke 
//   when the timer is completed
//   The second argument is the time that we should wait for delay.

setTimeout(timeFinished, waitTime);

//   So, Now the process will run Asynchronously
//   And it will log the time that we're waiting to complete the process
//   in every half a second
//   After waiting 3 seconds it will log the message "done" and complete the process.