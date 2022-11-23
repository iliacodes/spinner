// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|    ')
// }, 900);

let lines = ['\r|', '\r/', '\r-', '\r\\', '\r|'];
let delay = 100;
for(let line of lines) {
  setTimeout(() => {
    process.stdout.write(line)
  }, delay);
  delay += 200;
};

