import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysmatriculasComponent } from './sysmatriculas.component';

describe('SysmatriculasComponent', () => {
  let component: SysmatriculasComponent;
  let fixture: ComponentFixture<SysmatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysmatriculasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysmatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
