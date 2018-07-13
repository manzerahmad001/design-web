import { DWebLayoutModule } from './d-web-layout.module';

describe('DWebLayoutModule', () => {
  let dWebLayoutModule: DWebLayoutModule;

  beforeEach(() => {
    dWebLayoutModule = new DWebLayoutModule();
  });

  it('should create an instance', () => {
    expect(dWebLayoutModule).toBeTruthy();
  });
});
