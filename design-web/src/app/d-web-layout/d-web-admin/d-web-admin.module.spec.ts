import { DwebAdminModule } from './d-web-admin.module';

describe('DwebAdminModule', () => {
  let dwebAdminModule: DwebAdminModule;

  beforeEach(() => {
    dwebAdminModule = new DwebAdminModule();
  });

  it('should create an instance', () => {
    expect(dwebAdminModule).toBeTruthy();
  });
});
