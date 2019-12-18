import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: []
})
export class AddComponent implements OnInit {

  showForm: boolean;

  @Output() addEvt = new EventEmitter();

  toggleAptDisplay(){
      this.showForm = !this.showForm;
  }

  handleAdd(formInfo: any){//different form fields types
      const tempItem: object = {
          petName: formInfo.petName,
          ownerName: formInfo.ownerName,
          aptName: formInfo.aptName,
          aptDate: formInfo.aptDate + ' ' + formInfo.aptTime,
          aptNotes: formInfo.aptNotes,
      };
      this.addEvt.emit(tempItem);
      this.toggleAptDisplay();
  }
  constructor() {
    this.showForm = true;
  }

  ngOnInit() {
  }

}
