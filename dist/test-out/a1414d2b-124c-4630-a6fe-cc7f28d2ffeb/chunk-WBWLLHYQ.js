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
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6,
  map
} from "./chunk-YVHSCJHQ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/Menu/menu.ts
var Menu;
var init_menu = __esm({
  "src/app/Menu/menu.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_environment();
    init_http();
    init_esm();
    Menu = class Menu2 {
      http;
      STORAGE_KEY = "app_menus";
      get apiUrl() {
        return environment.apiUrl;
      }
      get apiKey() {
        return environment.apiKey;
      }
      headers;
      constructor(http) {
        this.http = http;
        this.headers = new HttpHeaders({
          "Content-Type": "application/json; charset=utf-8",
          "api_key": this.apiKey
        });
      }
      getMenus() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : [];
      }
      initmenus() {
        return this.http.get(`${this.apiUrl}/api/Menu`).pipe(map((res) => res?.data ?? res));
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Menu = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], Menu);
  }
});

export {
  Menu,
  init_menu
};
//# sourceMappingURL=chunk-WBWLLHYQ.js.map
