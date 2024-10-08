import { Component } from '@angular/core';
import { DxCheckBoxModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-check-box',
  standalone: true,
  imports: [
    DxCheckBoxModule
  ],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.css'
})
export class CheckBoxComponent {


  onValueChanged(e: any){
    if(e.value){
      notify("El checkbox esta seleccionado");
    }
  }

}
