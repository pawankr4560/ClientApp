import {
  environment,
  init_environment
} from "./chunk-RFYKPB5Y.js";
import {
  HttpClient,
  HttpHeaders,
  init_http
} from "./chunk-M4UOQEVA.js";
import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6,
  tap
} from "./chunk-YVHSCJHQ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/product/services/product-service.ts
var ProductService;
var init_product_service = __esm({
  "src/app/product/services/product-service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_environment();
    init_http();
    init_esm();
    ProductService = class ProductService2 {
      http;
      get apiUrl() {
        return environment.apiUrl;
      }
      get apiKey() {
        return environment.apiKey;
      }
      headers;
      productsSubject = new BehaviorSubject([]);
      products$ = this.productsSubject.asObservable();
      constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
          "Content-Type": "application/json; charset=utf-8",
          "api_key": this.apiKey
        });
      }
      /** Load products from API */
      loadProducts() {
        return this.http.get(`${this.apiUrl}/api/Product/ProductList`).pipe(tap((res) => {
          if (res?.data) {
            this.productsSubject.next(res.data);
          }
        }));
      }
      /** Delete product */
      deleteProduct(id) {
        return this.http.delete(`${this.apiUrl}/api/Product/RemoveProduct`, { params: { id } }).pipe(tap((res) => {
          if (res?.success) {
            const updated = this.productsSubject.value.filter((p) => p.id !== id);
            this.productsSubject.next(updated);
          }
        }));
      }
      /** Update product locally (after dialog save) */
      updateProduct(updatedProduct) {
        return this.http.put(`${this.apiUrl}/api/Product/UpdateProduct`, updatedProduct).pipe(tap((res) => {
          if (res?.success && res.data) {
            const current = this.productsSubject.value;
            const updatedList = current.map((p) => p.id === res.data.id ? res.data : p);
            this.productsSubject.next(updatedList);
          }
        }));
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    ProductService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], ProductService);
  }
});

export {
  ProductService,
  init_product_service
};
//# sourceMappingURL=chunk-YQKR3EC5.js.map
