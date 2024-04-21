import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoEscolarEditComponent } from './historico-escolar-edit.component';

describe('HistoricoEscolarEditComponent', () => {
  let component: HistoricoEscolarEditComponent;
  let fixture: ComponentFixture<HistoricoEscolarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoEscolarEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoEscolarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
