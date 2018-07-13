import { DwebCoreModule } from './d-web-core.module';

describe('DwebCoreModule', () => {
  let dwebCoreModule: DwebCoreModule;

  beforeEach(() => {
    dwebCoreModule = new DwebCoreModule();
  });

  it('should create an instance', () => {
    expect(dwebCoreModule).toBeTruthy();
  });
});
