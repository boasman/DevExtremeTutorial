import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { ButtonGroupComponent } from "./components/button-group/button-group.component";
import { CheckBoxComponent } from "./components/check-box/check-box.component";
import { DataGridComponent } from "./components/data-grid/data-grid.component";
import { DropDownBoxComponent } from "./components/drop-down-box/drop-down-box.component";
import { LinearChartComponent } from "./components/LinearChart/LinearChart.component";
import { DropDownButtonComponent } from "./components/DropDownButton/DropDownButton.component";
import { FormComponent } from "./components/form/form.component";
import { ListComponent } from "./components/List/List.component";
import { NumberBoxComponent } from "./components/NumberBox/NumberBox.component";
import { PopupComponent } from "./components/Popup/Popup.component";
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';
import { TabsComponent } from "./components/tabs/tabs.component";
import { TagboxComponent } from "./components/tagbox/tagbox.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    ButtonGroupComponent,
    CheckBoxComponent,
    DataGridComponent,
    DropDownBoxComponent,
    LinearChartComponent,
    DropDownButtonComponent,
    FormComponent,
    ListComponent,
    NumberBoxComponent,
    TabPanelComponent,
    PopupComponent,
    TabsComponent,
    TagboxComponent
],   
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica';
}
