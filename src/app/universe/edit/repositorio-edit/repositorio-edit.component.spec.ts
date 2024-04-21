import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioEditComponent } from './repositorio-edit.component';

describe('RepositorioEditComponent', () => {
  let component: RepositorioEditComponent;
  let fixture: ComponentFixture<RepositorioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositorioEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepositorioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
