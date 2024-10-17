import { Component, OnInit } from '@angular/core';
import { DxDropDownButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-DropDownButton',
  standalone: true,
  imports:[
    DxDropDownButtonModule
  ],
  templateUrl: './DropDownButton.component.html',
  styleUrls: ['./DropDownButton.component.css']
})
export class DropDownButtonComponent implements OnInit {

  actions: Array<{id: Number, text: String, icon: String}> = [
    { id: 1, text: "My profile", icon: "user" },
    { id: 2, text: "Messages", icon: "email" },
    { id: 3, text: "Contacts", icon: "group" },
    { id: 4, text: "Log out", icon: "runner" }
];

  constructor() { }

  ngOnInit() {
  }

}
