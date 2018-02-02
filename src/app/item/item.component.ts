import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  
  <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
  <input type="checkbox" (click)="completeItem()"/>
    {{ todoItem.title }}
    <button (click)="removeItem()">
    remove
  </button>
  </p>
   
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todoItem: any;

  @Output() remove:EventEmitter<any> = new EventEmitter();

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  isComplete: boolean = false;

  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
