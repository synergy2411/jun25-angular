import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDemoComponent } from './test-demo.component';
import { By } from '@angular/platform-browser';

describe('TestDemoComponent', () => {
  let component: TestDemoComponent;
  let fixture: ComponentFixture<TestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have title as 'demotest component'", () => {
    expect(component.title).toEqual('demotest component');
  });

  it('should render title on template', () => {
    const ele: HTMLElement = fixture.nativeElement;
    const headingEl = ele.querySelector('h1');
    expect(headingEl?.textContent).toEqual(component.title);
  });
});
