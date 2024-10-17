import { Component, OnInit } from '@angular/core';
import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-NumberBox',
  standalone: true,
  imports:[
    DxNumberBoxModule
  ],
  templateUrl: './NumberBox.component.html',
  styleUrls: ['./NumberBox.component.css']
})
export class NumberBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onValueChanged(e:any) {
    if (e.value) {
        notify({
            message: "The sum is $" + e.value
        });
    }
    }

}
