import { SpeciesModule } from './species.module';

describe('SpeciesModule', () => {
  let speciesModule: SpeciesModule;

  beforeEach(() => {
    speciesModule = new SpeciesModule();
  });

  it('should create an instance', () => {
    expect(speciesModule).toBeTruthy();
  });
});
