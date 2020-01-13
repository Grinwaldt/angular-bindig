import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailesComponent } from './news-detailes.component';

describe('NewsDetailesComponent', () => {
  let component: NewsDetailesComponent;
  let fixture: ComponentFixture<NewsDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
