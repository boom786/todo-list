import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World';

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {

  }

  submitValue(newTitle:any){
    this.submit.emit(newTitle);
  }

}
