import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysfuncionariosComponent } from './sysfuncionarios.component';

describe('SysfuncionariosComponent', () => {
  let component: SysfuncionariosComponent;
  let fixture: ComponentFixture<SysfuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysfuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysfuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
