import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'isc';

  toAllCountry: boolean = false;

  handleToAllCountry(){
    if(!this.toAllCountry){
      this.toAllCountry = true;
    }
    else{
      this.toAllCountry = false;
    }
  }
}
