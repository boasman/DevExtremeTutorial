import { Component, OnInit } from '@angular/core';
import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';

import { Item, TagService } from './tag.service';
import DataSource from 'devextreme/data/data_source';
import store from 'devextreme/data/odata/store';

@Component({
  selector: 'app-tagbox',
  standalone:true,
  imports:[
    DxTagBoxModule
  ],
  templateUrl: './tagbox.component.html',
  styleUrls: ['./tagbox.component.css']
})
export class TagboxComponent implements OnInit {

  data: Item[];
  dataSource: DataSource;

  constructor(service: TagService) {
    this.data = service.getItems();
    this.dataSource = new DataSource({
        store: {
            data: this.data,
            type: 'array',
            key: 'ID'
        },
        group: "Category"
    });
}

  ngOnInit() {
  }

  onValueChanged(e: any){
    console.log(e.previosValue);
    console.log(e.value);
  }

  dropDownOptions = {
    height: 100
  }

}
