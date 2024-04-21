import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncarrgadoEditComponent } from './encarrgado-edit.component';

describe('EncarrgadoEditComponent', () => {
  let component: EncarrgadoEditComponent;
  let fixture: ComponentFixture<EncarrgadoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncarrgadoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncarrgadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
