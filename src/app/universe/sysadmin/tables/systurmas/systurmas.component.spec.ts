import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysturmasComponent } from './systurmas.component';

describe('SysturmasComponent', () => {
  let component: SysturmasComponent;
  let fixture: ComponentFixture<SysturmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysturmasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysturmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
