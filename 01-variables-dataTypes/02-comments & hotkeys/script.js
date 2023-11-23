// console.log(typeof 100);

/*
multi-line commenting

console.error("Alert");

console.warn("warning");

console.table({ name: "brad", email: "brad@gmail.com" });

shit up/down/left/right - highlights the code
cmd up/left/down/right - moves cursor by the whole line / bloke of code
option left/right - moves cursor by a word
option up/down - will move the line of code up or down
shift option left/right - will highlight the code horizontally
shift cmd left/right - will highlight the code from where you are over
shift option down - will duplicate the line of code
shift option down - will duplicate the line of code
cmd z - will undo
cmd d - will move cursor in multiple instance of the highlighted word (so first highlight the word and then cmd d)
cmd shift l - will highlight all instances of the highlighted word (instead of moving one by one with the cmd d)
option click will select multiple cursors

*/

console.group("simple");
console.log(typeof 100);
console.error("Alert");
console.warn("warning");
// console.groupEnd;

const styles = "padding: 10px; background-color: black; color: green";
console.log("%cHello World", styles);
