import { SecuritysRoutingModule } from './securitys-routing.module';

describe('SecuritysRoutingModule', () => {
  let securitysRoutingModule: SecuritysRoutingModule;

  beforeEach(() => {
    securitysRoutingModule = new SecuritysRoutingModule();
  });

  it('should create an instance', () => {
    expect(securitysRoutingModule).toBeTruthy();
  });
});
