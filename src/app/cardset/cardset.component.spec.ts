import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CardsetComponent } from './cardset.component';
import { CardfilterPipe } from "../cardfilter.pipe";

describe('CardsetComponent', () => {
  let component: CardsetComponent;
  let fixture: ComponentFixture<CardsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsetComponent, CardfilterPipe ],
      imports: [ ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
