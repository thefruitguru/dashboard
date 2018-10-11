import { StyleMaterialModule } from './style-material.module';

describe('StyleMaterialModule', () => {
  let styleMaterialModule: StyleMaterialModule;

  beforeEach(() => {
    styleMaterialModule = new StyleMaterialModule();
  });

  it('should create an instance', () => {
    expect(styleMaterialModule).toBeTruthy();
  });
});
