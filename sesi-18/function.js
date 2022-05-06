//function
// kurung kurawal kita masukkan Parameter
// kurung kumis untuk memasukkan kode

//-> tradisional -> function <namaFunction> () {}
// function sapa(nama){
//     console.log(`Halo ${nama}! apa kabar`)

// }
// sapa("kevin")

function sapa(nama="Dini"){
    console.log(`Halo ${nama}! apa kabar`)
}
//const sapa=function () {}
    sapa()
    sapa("Farhan")

//-> arrow    
//    -sebagai variabel ->coonst<namaFunction> +()=>{}
//     const<namaFunction> () => {}
//    -sebagai anonymous function
// anonymous kita akan pakai ketika loop

const sapaArrow = (nama = "fira") => {
    console.log(`halo ${nama}! sukses selalu yah!`)
} // scope less
sapaArrow()
sapaArrow("Nisa")