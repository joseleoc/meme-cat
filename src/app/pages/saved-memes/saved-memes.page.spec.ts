import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedMemesPage } from './saved-memes.page';

describe('SavedMemesPage', () => {
  let component: SavedMemesPage;
  let fixture: ComponentFixture<SavedMemesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedMemesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
