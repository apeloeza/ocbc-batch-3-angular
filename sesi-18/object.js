// object -> property + method/function
// notasi {}

//membuat variabel
const peserta ={
    //property -> ciri-ciri
    nama:"edward",
    pekerjaan:"full-stack Developer @ OCBC",
    age: 22,

// method ->kemampuan
//     bekerja() {
//         console.log(`${this.nama} sedang ngoding javascript`)
//     }
// }

// console.log(peserta)
// peserta.bekerja()

// dibawah ini adaah function
    bekerja() {
        rerturn `${this.name} sedang ngoding Javascript.`
    }
}
// // cara menambahkan key baru ke dalam object
// // cara 1
peserta.berkacamata = false

console.log(peserta)

//cara merubah value pada key pada objest
peserta.nama ='alex'
console.log(peserta)

//menghapus key dari object
// delete peserta.bekerja
// perbedaan delete menghapus semua
//dan undefined masih menyimpan key
peserta.bekerja = undefined
console.log(peserta)

// console.hasilObject

//coba looping objectnya
//1 ambil

//objek berhubungan dengan key