import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantaTeamComponent } from './fanta-team.component';

describe('FantaTeamComponent', () => {
  let component: FantaTeamComponent;
  let fixture: ComponentFixture<FantaTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantaTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FantaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
