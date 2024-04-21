import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysencarregadosComponent } from './sysencarregados.component';

describe('SysencarregadosComponent', () => {
  let component: SysencarregadosComponent;
  let fixture: ComponentFixture<SysencarregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysencarregadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysencarregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
