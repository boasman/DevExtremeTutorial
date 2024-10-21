import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxFormModule, DxTextAreaModule, DxRadioGroupModule } from 'devextreme-angular';
import { DxTabPanelModule } from 'devextreme-angular/ui/tab-panel';

@Component({
  selector: 'app-tab-panel',
  standalone: true,
  imports:[    
    DxTabPanelModule,
    DxFormModule,
    DxTextAreaModule,
    DxRadioGroupModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css']
})
export class TabPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  employeeData = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
    roles: ['Chief Officer', 'Administrator', 'Manager']
}
labelTemplates = [
    {name: 'name', icon: 'dx-icon-info'},
    {name: 'position', icon: 'dx-icon-group'},
    {name: 'officeNumber', icon: 'dx-icon-info'}
]

tabNames = ["Employee", "Notes", "Role"]
 
    selectedTabIndex = 0;
 
    onValueChanged(e: any){
        this.selectedTabIndex = this.tabNames.indexOf(e.value);
    }

}
