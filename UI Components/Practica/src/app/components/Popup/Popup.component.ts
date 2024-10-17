import { Component, OnInit } from '@angular/core';
import { DxButtonComponent, DxButtonModule } from 'devextreme-angular';
import { DxPopupModule } from 'devextreme-angular/ui/popup';

@Component({
  selector: 'app-Popup',
  standalone: true,
  imports:[
    DxPopupModule,
    DxButtonModule    
  ],
  templateUrl: './Popup.component.html',
  styleUrls: ['./Popup.component.css']
})
export class PopupComponent implements OnInit {

  isPopupVisible: boolean;
 
  constructor() {
      this.isPopupVisible = true;
  }
  ngOnInit(): void {
   
  }

  togglePopup(): void {
      this.isPopupVisible = !this.isPopupVisible;
  }

}
