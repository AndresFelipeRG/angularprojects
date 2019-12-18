import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent implements OnInit {

  @Input() aptList;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();

  handleUpdate(theApt: object, labelName: string, newValue: string) {
      this.updateEvt.emit({
        theApt : theApt,
        labelName:  labelName,
        newValue : newValue
      });
  }
  handleDelete(theApt: object){
    this.deleteEvt.emit(theApt);
  }
  constructor() { }

  ngOnInit() {
  }

}
