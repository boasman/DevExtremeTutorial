import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

  fontStyles = [{
    icon: "bold",
    style: "bold"
}, {
    icon: "italic",
    style: "italic"
}, {
    icon: "underline",
    style: "underline"
}, {
    icon: "strike",
    style: "strike"
}];

selectedNames: string[] = ['bold','italic']

logSelectionChanged(e:any) {
  if(e.addedItems[0]) {
      console.log("The following style is added: " + e.addedItems[0].style);
  }
  if(e.removedItems[0]) {
      console.log("The following style is removed: " + e.removedItems[0].style)
  }
}

}
