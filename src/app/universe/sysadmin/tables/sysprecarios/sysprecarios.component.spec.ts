import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysprecariosComponent } from './sysprecarios.component';

describe('SysprecariosComponent', () => {
  let component: SysprecariosComponent;
  let fixture: ComponentFixture<SysprecariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysprecariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysprecariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
