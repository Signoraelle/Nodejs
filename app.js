process.stdin.resume();
process.stdin.setEncoding("utf8");

const now = new Date();
const year = now.getFullYear();

console.log(`What's your age ?`);

process.stdin.on("data", number => {
  if (number > 99) {
    console.log(
      `wow you're very old, you were born in ` + Math.round(year - number)
    );
    console.log(`What's your age ?`);
  } else if (number < 0) {
    console.log(`Oh my god, you're not human`);
  } else if (isNaN(number) == false) {
    console.log(`you are born in ` + Math.round(year - number));
  } else console.log("put a number");

  process.exit();
});
