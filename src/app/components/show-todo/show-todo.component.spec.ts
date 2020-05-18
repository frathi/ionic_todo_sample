import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowTodoComponent } from './show-todo.component';

describe('ShowTodoComponent', () => {
  let component: ShowTodoComponent;
  let fixture: ComponentFixture<ShowTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTodoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
