import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesRegisterComponent } from './species-register.component';

describe('SpeciesRegisterComponent', () => {
  let component: SpeciesRegisterComponent;
  let fixture: ComponentFixture<SpeciesRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
