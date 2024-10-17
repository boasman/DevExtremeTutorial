import { Component, OnInit } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DxFormModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
