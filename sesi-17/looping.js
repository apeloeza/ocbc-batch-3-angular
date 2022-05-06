// while loop (do while loop)--> uncountable loop
// for loop -> counterable loop

// for loop
//for(let i=0 <10; i++){}
for(let i = 0; i < 10; i++) {
    //jalankan jika i < 10
    console.log(`looping ke-${i+1}`)
}

// whie loop
/**
 * while (kondisi){
 *  //jalankan perintah disini
 * }
 */

let count = 10

while (count > 0){

    console.log(count--)
}

//waspada infinite loop

//kasus 1 - for loop!

// for(let i=0; i<10; i+1){
//     console.log(i)
// }

//kasus 2 - while loop!
// while(true) {
//     console.log(ini looping)
// }