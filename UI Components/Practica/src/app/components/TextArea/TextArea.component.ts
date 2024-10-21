import { Component, OnInit } from '@angular/core';
import { DxTextAreaModule } from 'devextreme-angular/ui/text-area';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-TextArea',
  standalone: true,
  imports:[
    DxTextAreaModule
  ],
  templateUrl: './TextArea.component.html',
  styleUrls: ['./TextArea.component.css']
})
export class TextAreaComponent implements OnInit {

  longText = "Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The Greater Tokyo Area is the most populous metropolitan area in the world.";
  constructor() { }

  ngOnInit() {
  }

  onValueChanged(){
    notify("the value has been changed");
  }

}
