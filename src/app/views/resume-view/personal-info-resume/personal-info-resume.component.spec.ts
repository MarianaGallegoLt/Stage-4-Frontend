import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoResumeComponent } from './personal-info-resume.component';

describe('PersonalInfoResumeComponent', () => {
  let component: PersonalInfoResumeComponent;
  let fixture: ComponentFixture<PersonalInfoResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
