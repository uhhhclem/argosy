import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../material/material.module';
import { UserService } from '../user.service';
import { TopicService } from '../topic.service';

import { TopicListComponent } from './topic-list.component';

describe('TopicListComponent', () => {
  let component: TopicListComponent;
  let fixture: ComponentFixture<TopicListComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [UserService, TopicService],
      declarations: [ TopicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
