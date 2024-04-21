import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyshistoricoEscolarComponent } from './syshistorico-escolar.component';

describe('SyshistoricoEscolarComponent', () => {
  let component: SyshistoricoEscolarComponent;
  let fixture: ComponentFixture<SyshistoricoEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyshistoricoEscolarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SyshistoricoEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
