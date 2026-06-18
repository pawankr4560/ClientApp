import {
  Menu,
  init_menu
} from "./chunk-WBWLLHYQ.js";
import "./chunk-RFYKPB5Y.js";
import "./chunk-M4UOQEVA.js";
import "./chunk-JIDJSTYV.js";
import {
  TestBed,
  init_testing
} from "./chunk-YVHSCJHQ.js";
import "./chunk-TTULUY32.js";

// src/app/Menu/menu.spec.ts
init_testing();
init_menu();
describe("Menu", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menu);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-menu.spec.js.map
