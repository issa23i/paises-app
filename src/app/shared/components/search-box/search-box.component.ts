import { Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit{

  private debouncer : Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = 'Buscar'

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter()

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(350) // lo que tarda el usuario en dejar de escribir (ms)
    )
    .subscribe(value => {
      this.onDebounce.emit(value )
    })
  }

  emitValue(value:string) :void{

  //  if(value === '') return;

    this.onValue.emit(value)
    }

    onKeyPress(searchTerm: string){
      this.debouncer.next(searchTerm)
    }

}
