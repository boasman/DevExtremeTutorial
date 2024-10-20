import { Component, OnInit } from '@angular/core';
import { DxListModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-List',
  standalone: true,
  imports:[
    DxListModule
  ],
  templateUrl: './List.component.html',
  styleUrls: ['./List.component.css']
})
export class ListComponent implements OnInit {



  dataSource: DataSource;

  ngOnInit() {
  }

  products = [{
    ID: 1,
    Name: "HD Video Player",
    Category: "Video Players"
},
{
    ID: 3,
    Name: "SuperPlasma 50",
    Category: "Televisions"
},
{
    ID: 4,
    Name: "SuperLED 50",
    Category: "Televisions"
},
{
    ID: 5,
    Name: "SuperLED 42",
    Category: "Televisions"
},
{
    ID: 6,
    Name: "SuperLCD 55",
    Category: "Televisions"
},
{
    ID: 7,
    Name: "SuperLCD 42",
    Category: "Televisions"
},
{
    ID: 8,
    Name: "SuperPlasma 65",
    Category: "Televisions"
},
{
    ID: 9,
    Name: "SuperLCD 70",
    Category: "Televisions"
},
{
    ID: 10,
    Name: "DesktopLED 21",
    Category: "Monitors"
},
{
    ID: 12,
    Name: "DesktopLCD 21",
    Category: "Monitors"
},
{
    ID: 13,
    Name: "DesktopLCD 19",
    Category: "Monitors"
},
{
    ID: 14,
    Name: "Projector Plus",
    Category: "Projectors"
},
{
    ID: 15,
    Name: "Projector PlusHD",
    Category: "Projectors"
},
{
    ID: 17,
    Name: "ExcelRemote IR",
    Category: "Automation"
},
{
    ID: 18,
    Name: "ExcelRemote BT",
    Category: "Automation"
},
{
    ID: 19,
    Name: "ExcelRemote IP",
    Category: "Automation"
}];

constructor() { 

    this.dataSource = new DataSource({
        store: this.products,
        group: "Category"
    });

  }

}
