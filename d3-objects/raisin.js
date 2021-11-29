//Pair Programming
const raisinAlarm = function(cookie) {
  // Put your solution here
  if (cookie.includes("🍇")) {
    return "Raisin Alert!";
  } else {
    return "All Good!";
  }
};

 console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
 console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
 console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// Stretch work 
const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let result = [];
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].includes("🍇")) {
      result.push("Raisin Alert!");
    } else {
      result.push("All Good!");
    }
  }
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));