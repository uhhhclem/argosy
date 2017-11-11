import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { TopicService } from './topic.service';

describe('TopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicService, UserService]
    });
  });

  it('should be created', inject([TopicService], (service: TopicService) => {
    expect(service).toBeTruthy();
  }));
});
