import { TestBed } from '@angular/core/testing';

import { NonAuthGuard } from './non-guard.guard';

describe('NonGuardGuard', () => {
  let guard: NonAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NonAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
