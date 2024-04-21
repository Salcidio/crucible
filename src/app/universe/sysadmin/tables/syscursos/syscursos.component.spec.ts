import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyscursosComponent } from './syscursos.component';

describe('SyscursosComponent', () => {
  let component: SyscursosComponent;
  let fixture: ComponentFixture<SyscursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyscursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SyscursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
