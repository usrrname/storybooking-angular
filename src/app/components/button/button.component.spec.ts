import { ComponentFixture, TestBed } from '@angular/core/testing';

import ButtonComponent from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    expect(component).toBeDefined();
  });

  it('raises the selected event when clicked', () => {
    component = new ButtonComponent();
    component.label = fixture.nativeElement.value;
    component.onClick.subscribe((selected) => expect(selected).toBe(component.label));
});

});
