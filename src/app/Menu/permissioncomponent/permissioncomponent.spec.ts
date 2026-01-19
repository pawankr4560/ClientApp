import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Permissioncomponent } from './permissioncomponent';

describe('Permissioncomponent', () => {
  let component: Permissioncomponent;
  let fixture: ComponentFixture<Permissioncomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Permissioncomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Permissioncomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
