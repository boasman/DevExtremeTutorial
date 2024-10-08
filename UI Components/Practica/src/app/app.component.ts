import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { ButtonGroupComponent } from "./components/button-group/button-group.component";
import { CheckBoxComponent } from "./components/check-box/check-box.component";
import { DataGridComponent } from "./components/data-grid/data-grid.component";
import { DropDownBoxComponent } from "./components/drop-down-box/drop-down-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, ButtonGroupComponent, CheckBoxComponent, DataGridComponent, DropDownBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica';
}
