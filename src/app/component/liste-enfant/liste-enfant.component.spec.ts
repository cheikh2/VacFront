import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEnfantComponent } from './liste-enfant.component';

describe('ListeEnfantComponent', () => {
  let component: ListeEnfantComponent;
  let fixture: ComponentFixture<ListeEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
