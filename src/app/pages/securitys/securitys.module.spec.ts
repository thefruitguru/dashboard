import { SecuritysModule } from './securitys.module';

describe('SecuritysModule', () => {
  let securitysModule: SecuritysModule;

  beforeEach(() => {
    securitysModule = new SecuritysModule();
  });

  it('should create an instance', () => {
    expect(securitysModule).toBeTruthy();
  });
});
