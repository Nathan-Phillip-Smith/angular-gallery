import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCompComponent } from './photo-comp.component';

describe('PhotoCompComponent', () => {
  let component: PhotoCompComponent;
  let fixture: ComponentFixture<PhotoCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoCompComponent]
    });
    fixture = TestBed.createComponent(PhotoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
