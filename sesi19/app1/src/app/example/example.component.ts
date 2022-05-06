import { Component, 
  //import untuk lempar data parent -> child
  Input, OnInit, 
  // ? import  untuk lempar data child -> parent 
  Output, EventEmitter 

} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  // * import untuk lempar data parent -> child

  @Input() name: string = '';

  // ? import untuk lempar data child -> arent
  @Output() onMessageClick = new EventEmitter<string>();

  // ? function untuk handle event
  handleClick =() => {
    console.log('Tombol diklik!')
    this.onMessageClick.emit("Hallo, komponen Bapakku! ini anakmu.");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
