import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo.types';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item?: Todo;
  @Output() todoChanged: EventEmitter<void> = new EventEmitter<void>();

  public onValueChange(event: Event): void {
    // console.log(event)
    this.todoChanged.emit();
  }
}
