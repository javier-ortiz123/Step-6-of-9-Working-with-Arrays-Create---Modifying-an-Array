var hobbies = [
  "dancing",
  "listening to music",
  "skating",
  "building keyboards",
  "watching Netflix",
  "playing Animal Crossing",
];

console.log(hobbies.length);

hobbies.push("cooking");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2, 0, "paragliding", "board games");

console.log(hobbies);

hobbies.shift();

hobbies.unshift("painting");

var goals = ["Run 5 miles", "Build a React App", "Learn Next.js"];
var allTheThings = hobbies.concat(goals);

console.log({ allTheThings });

console.log(allTheThings.indexOf("skating"));

allTheThings.splice(8, 1);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}!`;
});
console.log(plans);
