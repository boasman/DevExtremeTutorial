/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumberBoxComponent } from './NumberBox.component';

describe('NumberBoxComponent', () => {
  let component: NumberBoxComponent;
  let fixture: ComponentFixture<NumberBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
