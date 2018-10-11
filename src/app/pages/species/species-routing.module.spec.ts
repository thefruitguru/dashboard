import { SpeciesRoutingModule } from './species-routing.module';

describe('SpeciesRoutingModule', () => {
  let speciesRoutingModule: SpeciesRoutingModule;

  beforeEach(() => {
    speciesRoutingModule = new SpeciesRoutingModule();
  });

  it('should create an instance', () => {
    expect(speciesRoutingModule).toBeTruthy();
  });
});
