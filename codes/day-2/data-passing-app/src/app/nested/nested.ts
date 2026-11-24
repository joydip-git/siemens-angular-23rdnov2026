import { Component, EventEmitter, input, Input, InputSignal, output, Output, OutputEmitterRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nested',
  styleUrl: './nested.css',
  templateUrl: './nested.html',
})
export class Nested {
  // @Input("parentInfo") parentData = 0
  // @Output("parentInfoChanged") parentDataChanged = new EventEmitter<number>()

  parentData: InputSignal<number> = input(0, { alias: "parentInfo" })
  parentDataChanged: OutputEmitterRef<number> = output<number>({ alias: "parentInfoChanged" })

  emitInputValue(val: number) {
    this.parentDataChanged.emit(val)
  }
}
