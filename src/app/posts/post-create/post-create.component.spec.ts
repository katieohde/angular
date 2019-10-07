import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostCreateComponent } from './post-create.component';

describe('PostCreateComponent', () => {
  let comp: PostCreateComponent;
  let fixture: ComponentFixture<PostCreateComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostCreateComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PostCreateComponent);

      comp = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it(`should have as enteredContent as ''`, async(() => {
    expect(comp.enteredTitle).toEqual('');
  }));

  it(`should have as enteredTitle as ''`, async(() => {
    expect(comp.enteredTitle).toEqual('');
  }));
});
