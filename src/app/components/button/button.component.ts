import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export default class ButtonComponent {
  /**
   * Button with the principal call-to-action
   */
  @Input()
  primary = false;

  /**
   * Disabled property is by default false
   */
  @Input() disabled = false;
  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * Button size is subbed with Bootstrap sizes
   */
  @Input()
  size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Button text value
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'btn-primary' : 'btn-secondary';
    const isDisabled = this.disabled === false ? '' : 'disabled';
    return ['btn', `btn-${this.size}`, mode, isDisabled];
  }
}
