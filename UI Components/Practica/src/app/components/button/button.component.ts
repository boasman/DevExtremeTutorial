import { Component } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    DxButtonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent { 

  mostrarMensaje = () => {
    notify("The button was clicked by Elvis");
}

// mostrarMensaje = () => {
//   alert('Mensaje')
// }

}


