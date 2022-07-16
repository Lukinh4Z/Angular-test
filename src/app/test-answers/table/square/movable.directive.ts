import { Directive, HostBinding, Input } from '@angular/core'

@Directive({
  selector: '[movableDirective]',
})
export class MovableDirective {
  //The intend with this directive was to toggle the highlight
  @HostBinding('class.is-movable') isMovable = true

  @Input() set movableDirective(value: any) {
    this.isMovable = value
  }
}
