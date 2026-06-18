import {
  Auth,
  init_auth
} from "./chunk-R4CVKMPH.js";
import "./chunk-5TAZUAVQ.js";
import "./chunk-RFYKPB5Y.js";
import "./chunk-M4UOQEVA.js";
import "./chunk-JIDJSTYV.js";
import {
  TestBed,
  init_testing
} from "./chunk-YVHSCJHQ.js";
import "./chunk-TTULUY32.js";

// src/app/auth/auth.spec.ts
init_testing();
init_auth();
describe("Auth", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-auth.spec.js.map
