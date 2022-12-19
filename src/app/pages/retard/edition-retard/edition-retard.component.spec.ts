import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionRetardComponent } from './edition-retard.component';

describe('EditionRetardComponent', () => {
  let component: EditionRetardComponent;
  let fixture: ComponentFixture<EditionRetardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionRetardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionRetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
