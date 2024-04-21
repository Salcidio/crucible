import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysrepositoriosComponent } from './sysrepositorios.component';

describe('SysrepositoriosComponent', () => {
  let component: SysrepositoriosComponent;
  let fixture: ComponentFixture<SysrepositoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysrepositoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysrepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
