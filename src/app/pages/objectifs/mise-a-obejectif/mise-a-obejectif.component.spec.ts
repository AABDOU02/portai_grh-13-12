import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseAObejectifComponent } from './mise-a-obejectif.component';

describe('MiseAObejectifComponent', () => {
  let component: MiseAObejectifComponent;
  let fixture: ComponentFixture<MiseAObejectifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiseAObejectifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseAObejectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
