import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer : Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = 'Buscar'

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter()

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(350) // lo que tarda el usuario en dejar de escribir (ms)
      )
      .subscribe(value => {
        this.onDebounce.emit(value )
      })
    }

    ngOnDestroy(): void {
      this.debouncerSuscription?.unsubscribe()
    }

  emitValue(value:string) :void{

    if(value === '') return;

    this.onValue.emit(value)
    }

    onKeyPress(searchTerm: string){
      this.debouncer.next(searchTerm)
    }

}
