import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialInfoResumeComponent } from './residential-info-resume.component';

describe('ResidentialInfoResumeComponent', () => {
  let component: ResidentialInfoResumeComponent;
  let fixture: ComponentFixture<ResidentialInfoResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialInfoResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialInfoResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
