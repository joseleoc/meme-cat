import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikedMemesPage } from './liked-memes.page';

describe('LikedMemesPage', () => {
  let component: LikedMemesPage;
  let fixture: ComponentFixture<LikedMemesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedMemesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
