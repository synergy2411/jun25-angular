import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmStandaloneComponent } from './i-am-standalone.component';

describe('IAmStandaloneComponent', () => {
  let component: IAmStandaloneComponent;
  let fixture: ComponentFixture<IAmStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IAmStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IAmStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
