import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPublicProfileComponent } from './edit-public-profile.component';

describe('EditPublicProfileComponent', () => {
  let component: EditPublicProfileComponent;
  let fixture: ComponentFixture<EditPublicProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPublicProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPublicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
