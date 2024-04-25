import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonArticleComponent } from './boutton-article.component';

describe('BouttonArticleComponent', () => {
  let component: BouttonArticleComponent;
  let fixture: ComponentFixture<BouttonArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BouttonArticleComponent]
    });
    fixture = TestBed.createComponent(BouttonArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
