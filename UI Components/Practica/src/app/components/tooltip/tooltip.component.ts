import { Component, OnInit } from '@angular/core';
import { DxButtonComponent, DxButtonModule } from 'devextreme-angular';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';
import dxButton from 'devextreme/ui/button';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports:[
    DxTooltipModule,
    DxButtonModule
  ],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
