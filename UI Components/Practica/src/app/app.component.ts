import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { ButtonGroupComponent } from "./components/button-group/button-group.component";
import { CheckBoxComponent } from "./components/check-box/check-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, ButtonGroupComponent, CheckBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica';
}
