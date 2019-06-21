import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvFeedComponent } from './tv-feed.component';

describe('TvFeedComponent', () => {
  let component: TvFeedComponent;
  let fixture: ComponentFixture<TvFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
