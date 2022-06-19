import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialInformationViewComponent } from './residential-information-view.component';

describe('ResidentialInformationViewComponent', () => {
  let component: ResidentialInformationViewComponent;
  let fixture: ComponentFixture<ResidentialInformationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialInformationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
