var a = 10, b = 2;

console.log("nilai a = 10 & b = 2 ")
console.log("============== Hasil =================")
console.log("Sum : ", a+b)
console.log("Difference : ", a-b)
console.log("Product : ", a*b)
console.log("Quotient : ", a/b)
console.log("Remainder : ", a%b)
console.log("Value of num1 after increment : ", ++a)
console.log("Value of num2 after decrement : ", --b)

console.log("============== Improve =================")

const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,output: process.stdout
});

rl.question('masukkan nilai A : ', function(nilaiA) {
    rl.question('masukkan nilai B : ', function(nilaiB) {
        console.log("==================");
        console.log("Nilain A anda " + nilaiA);
        console.log("Nilain B anda " + nilaiB);
        console.log("==================");
        console.log("Sum : ", nilaiA+nilaiB)
        console.log("Difference : ", nilaiA-nilaiB)
        console.log("Product : ", nilaiA*nilaiB)
        console.log("Quotient : ", nilaiA/nilaiB)
        console.log("Remainder : ", nilaiA%nilaiB)
        console.log("Value of num1 after increment : ", ++nilaiA)
        console.log("Value of num2 after decrement : ", --nilaiB)
        rl.close();
    })
})
