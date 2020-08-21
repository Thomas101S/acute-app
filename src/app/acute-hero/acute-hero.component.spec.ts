/*Don't worry about this file unless you're doing more advanced stuff. This pretty much runs the
modules and code against tests.*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuteHeroComponent } from './acute-hero.component';

describe('AcuteHeroComponent', () => {
  let component: AcuteHeroComponent;
  let fixture: ComponentFixture<AcuteHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuteHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuteHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
