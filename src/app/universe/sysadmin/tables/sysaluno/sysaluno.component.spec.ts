import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysalunoComponent } from './sysaluno.component';

describe('SysalunoComponent', () => {
  let component: SysalunoComponent;
  let fixture: ComponentFixture<SysalunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysalunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
