console.log(typeof 100);

console.error("Alert");

console.warn("warning");

console.table({ name: "brad", email: "brad@gmail.com" });

console.group("simple");
console.log(typeof 100);
console.error("Alert");
console.warn("warning");
console.groupEnd;

const styles = "padding: 10px; background-color: black; color: green";
console.log("%cHello World", styles);
