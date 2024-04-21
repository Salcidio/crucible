import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysusersComponent } from './sysusers.component';

describe('SysusersComponent', () => {
  let component: SysusersComponent;
  let fixture: ComponentFixture<SysusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
