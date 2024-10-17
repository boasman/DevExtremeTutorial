import { Component, ViewChild, viewChild } from '@angular/core';
import { DxDropDownBoxModule, DxListComponent, DxListModule } from 'devextreme-angular';
import { DxiStripComponent } from 'devextreme-angular/ui/nested';


@Component({
  selector: 'app-drop-down-box',
  standalone: true,
  imports: [
    DxDropDownBoxModule,
    DxListModule
  ],
  templateUrl: './drop-down-box.component.html',
  styleUrl: './drop-down-box.component.css'
})
export class DropDownBoxComponent {

  @ViewChild(DxListComponent, { static: false }) list: DxListComponent | undefined

  fruits = ['Apples', 'Orange', 'Lemon', 'Pears','PineApples' ];
  dataSource = this.fruits;
 
}
