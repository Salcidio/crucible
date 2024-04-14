import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncarregadosComponent } from './encarregados.component';

describe('EncarregadosComponent', () => {
  let component: EncarregadosComponent;
  let fixture: ComponentFixture<EncarregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncarregadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncarregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
