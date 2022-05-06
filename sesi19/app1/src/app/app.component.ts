import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app1';
  bacthName = 'FSD OCBC Batch ke-3';

  //tambahkan 1 state untuk menampung data

  // * tambahkan 1 state untuk ngModel
  name = '';

  // ? tambahkan 1 state lagi untuk menerima pesan dari child coponen
  pesan='';

  // ? function untuh handle event dari child component
  handleChildEvent = (event:any) => {
    // console.log(event, 'Ini didapat dari parent component')

    // ? ubah state dengan value yang kita dapatkan dari child component
    this.pesan = event;

    //sesi 21

    //tambahkan 1 event handler untuk kirim email
    handleEmail = (email:string,ref:any) =>{
      console.log(`Email sudah terkirim ke:${email}`)
      console.log(ref.placeholder)
    }


    //tambahkan hook ngOnInit
    ngOnInit() {
      // ! ini masih bad practice
      fetch('https://jsonplaceholder.typecode.com/users')
      .then(res =>res.json())
      .then(data =>{
        console.log(data)
        this.users=data
      })
    }

  }
  
}
