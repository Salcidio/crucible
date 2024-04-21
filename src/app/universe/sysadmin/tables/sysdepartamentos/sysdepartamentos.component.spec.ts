import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysdepartamentosComponent } from './sysdepartamentos.component';

describe('SysdepartamentosComponent', () => {
  let component: SysdepartamentosComponent;
  let fixture: ComponentFixture<SysdepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysdepartamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysdepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
