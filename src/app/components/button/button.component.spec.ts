import { ComponentFixture, TestBed } from '@angular/core/testing';

import ButtonComponent from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    expect(component).toBeDefined();
  });

  it('button label should contain input text', () => {
    expect(component.label).toEqual('Button');
  });

  it('should be a primary button when the class is `btn-primary`', () => {
    if (component.classes.includes('btn-primary')) {
      expect(component.primary).toBeTrue();
    }
  });

  it('raises the selected event when clicked', () => {
    component.onClick.subscribe((selected) => expect(selected).toBe(component.label));
  });

});
