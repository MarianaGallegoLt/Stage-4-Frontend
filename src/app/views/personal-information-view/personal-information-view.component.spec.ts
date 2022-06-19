import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationViewComponent } from './personal-information-view.component';

describe('PersonalInformationViewComponent', () => {
  let component: PersonalInformationViewComponent;
  let fixture: ComponentFixture<PersonalInformationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInformationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
