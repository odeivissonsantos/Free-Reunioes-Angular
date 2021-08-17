import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunioesCreateComponent } from './reunioes-create.component';

describe('ReunioesCreateComponent', () => {
  let component: ReunioesCreateComponent;
  let fixture: ComponentFixture<ReunioesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunioesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunioesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
