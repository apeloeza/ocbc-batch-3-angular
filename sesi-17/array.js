// array di JS -> Object yang iterable
const peserta =[
    'alex','dini','fira','natan','tevin'
//    0       1      2      3       4
]
// console.log(peserta[3]);

//mengubah item di dalam array
// peserta[1] = 'arif'
// console.log(peserta)

// peserta = [
//     'alex','arif','fira','natan','tevin'
// ] 
// jika menginputkan code diatas ini maak aakan menimbukkan error

// // const kumpulanReference = peserta
// kumpulanReference[0] = "nisa"
// crossOriginIsolated.log(peserta)

// 2 - ... value
const kumpulanValue = [... peserta]

kumpulanValue[4] = "kevin"
console.log(peserta)
//mengakses jumlah item pada array
// Array length
console.log(peserta.length)//5

//build-in methods pada array

// slice
// kita akan "potong" sebuah Array
// menjadi 2 array yang dimulai dari indexed
// yang kita tentukan

//array splice(relativeIndex, deleteCount?)
// console.log(peserta.splice(-2, 2))
// console.log(peserta)

// push (lawannya: pop)
// push --> kita akan mendorog 1item baru ke dalm array
peserta.push('farhan')
console.log('array setelah push', peserta)

// // pop -> kita "pentalkan" 1 item index terakhir
peserta.pop()
console.log('array setelah pop: ',peserta)

// shift (lawannya: unshift)

//shift -> menghapus data di index 0, lalu geser
// item di index 1 dn seterusnya ke kiri
peserta.shift()
console.log('array setelah shift:',peserta)

//unshift -> menghapus data di index 0, lalu geser
// item di index 1 dn seterusnya ke kiri
