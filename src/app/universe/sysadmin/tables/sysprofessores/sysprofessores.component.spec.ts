import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysprofessoresComponent } from './sysprofessores.component';

describe('SysprofessoresComponent', () => {
  let component: SysprofessoresComponent;
  let fixture: ComponentFixture<SysprofessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysprofessoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysprofessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
