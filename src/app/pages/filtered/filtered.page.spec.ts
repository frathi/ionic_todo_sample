import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilteredPage } from './filtered.page';

describe('FilteredPage', () => {
  let component: FilteredPage;
  let fixture: ComponentFixture<FilteredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilteredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
