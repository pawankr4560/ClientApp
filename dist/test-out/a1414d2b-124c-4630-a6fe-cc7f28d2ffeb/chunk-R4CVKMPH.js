import {
  init_jwt_decode_esm,
  jwt_decode_esm_default
} from "./chunk-5TAZUAVQ.js";
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
  init_tslib_es6
} from "./chunk-YVHSCJHQ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/auth/auth.ts
var Auth;
var init_auth = __esm({
  "src/app/auth/auth.ts"() {
    "use strict";
    init_tslib_es6();
    init_http();
    init_core();
    init_environment();
    init_jwt_decode_esm();
    Auth = class Auth2 {
      http;
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
      login(credentials) {
        return this.http.post(`${this.apiUrl}/api/Auth/login`, credentials, { headers: this.headers });
      }
      signup(request) {
        return this.http.post(`${this.apiUrl}/api/Auth/signup`, request, { headers: this.headers });
      }
      searchAddress(address) {
        return this.http.get(`${this.apiUrl}/api/Auth/GetAddress`, { params: { address } });
      }
      getRole() {
        var validToken = localStorage.getItem("jwt");
        if (validToken == null) {
          return false;
        }
        const decodeToken = jwt_decode_esm_default(validToken);
        return decodeToken["Role"].toLowerCase();
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    Auth = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], Auth);
  }
});

export {
  Auth,
  init_auth
};
//# sourceMappingURL=chunk-R4CVKMPH.js.map
