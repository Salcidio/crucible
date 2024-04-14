import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecariosComponent } from './precarios.component';

describe('PrecariosComponent', () => {
  let component: PrecariosComponent;
  let fixture: ComponentFixture<PrecariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrecariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrecariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
