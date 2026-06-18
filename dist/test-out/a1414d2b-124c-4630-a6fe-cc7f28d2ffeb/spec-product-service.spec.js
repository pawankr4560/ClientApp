import {
  ProductService,
  init_product_service
} from "./chunk-YQKR3EC5.js";
import "./chunk-RFYKPB5Y.js";
import "./chunk-M4UOQEVA.js";
import "./chunk-JIDJSTYV.js";
import {
  TestBed,
  init_testing
} from "./chunk-YVHSCJHQ.js";
import "./chunk-TTULUY32.js";

// src/app/product/services/product-service.spec.ts
init_testing();
init_product_service();
describe("ProductService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-product-service.spec.js.map
