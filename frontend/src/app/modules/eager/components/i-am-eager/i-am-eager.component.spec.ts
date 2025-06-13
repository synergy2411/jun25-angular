import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmEagerComponent } from './i-am-eager.component';

describe('IAmEagerComponent', () => {
  let component: IAmEagerComponent;
  let fixture: ComponentFixture<IAmEagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IAmEagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IAmEagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
