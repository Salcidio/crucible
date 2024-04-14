import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoEscolarComponent } from './historico-escolar.component';

describe('HistoricoEscolarComponent', () => {
  let component: HistoricoEscolarComponent;
  let fixture: ComponentFixture<HistoricoEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoEscolarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
