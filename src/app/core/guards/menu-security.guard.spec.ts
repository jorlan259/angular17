/* eslint-disable quotes */
import { CanActivateFn } from "@angular/router";
import { menuSecurityGuard } from "./menu-security.guard";
import { TestBed } from '@angular/core/testing';

describe('menuSecurityGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => menuSecurityGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
