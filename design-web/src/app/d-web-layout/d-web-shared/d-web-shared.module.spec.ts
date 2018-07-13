import { DwebSharedModule } from './d-web-shared.module';

describe('DwebSharedModule', () => {
  let dwebSharedModule: DwebSharedModule;

  beforeEach(() => {
    dwebSharedModule = new DwebSharedModule();
  });

  it('should create an instance', () => {
    expect(dwebSharedModule).toBeTruthy();
  });
});
