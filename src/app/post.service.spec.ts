import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';

import { PostService } from './post.service';

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostService,
        UserService
      ]
    });
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
  it('should return posts', inject([PostService], (service: PostService) => {
    let p = service.getPosts(1);
    expect(p.length).toBeGreaterThan(0);
  }));
  it('should resolve user ids', inject([PostService], (service: PostService) => {
    for (let p of service.getPosts(1)) {
      expect(p.createdBy).toBeTruthy();
    }
  }));
});
