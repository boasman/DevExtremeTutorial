import { Component } from '@angular/core';
import { DxButtonGroupModule } from 'devextreme-angular';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [
      DxButtonGroupModule
  ],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css'
})
export class ButtonGroupComponent {

}
