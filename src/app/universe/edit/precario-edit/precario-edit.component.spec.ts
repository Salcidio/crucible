import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecarioEditComponent } from './precario-edit.component';

describe('PrecarioEditComponent', () => {
  let component: PrecarioEditComponent;
  let fixture: ComponentFixture<PrecarioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrecarioEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrecarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
