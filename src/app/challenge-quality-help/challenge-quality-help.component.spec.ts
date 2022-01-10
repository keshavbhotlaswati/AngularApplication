import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeQualityHelpComponent } from './challenge-quality-help.component';

describe('ChallengeQualityHelpComponent', () => {
  let component: ChallengeQualityHelpComponent;
  let fixture: ComponentFixture<ChallengeQualityHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeQualityHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeQualityHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
