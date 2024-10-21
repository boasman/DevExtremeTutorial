import { Component, OnInit } from '@angular/core';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-TextBox',
  standalone: true,
  imports: [
    DxTextBoxModule
  ],
  templateUrl: './TextBox.component.html',
  styleUrls: ['./TextBox.component.css']
})
export class TextBoxComponent implements OnInit {


  value: string = "";
  onEnterKey(){
    console.log(this.value);
    notify("ha cambiado el valor")
  }
  constructor() { }

  ngOnInit() {
  }

}
