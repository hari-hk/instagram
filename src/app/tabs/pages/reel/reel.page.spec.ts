import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReelPage } from './reel.page';

describe('ReelPage', () => {
  let component: ReelPage;
  let fixture: ComponentFixture<ReelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
