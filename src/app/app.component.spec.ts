import { TestBed, async } from '@angular/core/testing';
import { MaterialModule} from './material/material.module';
import { TopicListComponent } from './topic-list/topic-list.component';
import { UserService } from './user.service';
import { AppComponent } from './app.component';
 
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [UserService],
      declarations: [
        AppComponent,
        TopicListComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
