import { Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {


  @Input()
  public placeholder: string = 'Buscar'

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter()


  emitValue(value:string) :void{

    if(value === '') return;

    this.onValue.emit(value)
    }

}
