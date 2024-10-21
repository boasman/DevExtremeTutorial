import { Component, OnInit } from '@angular/core';
import { DxTabsModule } from 'devextreme-angular/ui/tabs';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-tabs',
  standalone:true,
  imports:[
    DxTabsModule
  ],  
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {


  onItemClick(e: any) {
    this.showMessage(e.itemIndex + 1);
    } 


  constructor() { }

  ngOnInit() {
  }

  showMessage(id: number) {
    notify(
        {
            message: `Tab ${id} has been clicked!`,
            width: 250
        },
        'info',
        500
    );
  };

}
