import { TestBed } from '@angular/core/testing';

import { LoginAppInterceptor } from './login-app.interceptor';

describe('LoginAppInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoginAppInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoginAppInterceptor = TestBed.inject(LoginAppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
