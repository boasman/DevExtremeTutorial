import { Component, OnInit } from '@angular/core';
import { DxCheckBoxModule, DxFormModule } from 'devextreme-angular';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [DxFormModule,DxCheckBoxModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  employee = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    phone: '+1(213) 555-9392',
    skype: 'jheart_DX_skype',
    email: 'jheart@dx-email.com'
}

isFormReadOnly = false

//   employee = {
//     name: 'John Heart',
//     position: 'CEO',
//     hireDate: new Date(2012, 4, 13),
//     officeNumber: 901,
//     notes: 'John has been in the Audio/Video industry since 1990.'
// }

//   employee = {
//     name: 'John Heart',
//     officeNumber: 901,
//     hireDate: new Date(2012, 4, 13)
// }

// employee = {
//   name: 'John Heart',
//   officeNumber: 901,
//   hireDate: new Date(2012, 4, 13)
// }

// hireDateOptions = {
//   disabled: true
// }

}
