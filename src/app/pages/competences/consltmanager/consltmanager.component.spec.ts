import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsltmanagerComponent } from './consltmanager.component';

describe('ConsltmanagerComponent', () => {
  let component: ConsltmanagerComponent;
  let fixture: ComponentFixture<ConsltmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsltmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsltmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
