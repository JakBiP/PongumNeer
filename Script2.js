// JavaScript source code
for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i%5==0) console.log("BigBrother");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5==0) console.log("Buzz");
    else console.log(i);
}