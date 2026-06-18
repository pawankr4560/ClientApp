import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-YVHSCJHQ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\setting\setting.html
var setting_default;
var init_setting = __esm({
  "angular:jit:template:src\\app\\setting\\setting.html"() {
    setting_default = "<p>setting works!</p>\r\n";
  }
});

// angular:jit:style:src\app\setting\setting.css
var setting_default2;
var init_setting2 = __esm({
  "angular:jit:style:src\\app\\setting\\setting.css"() {
    setting_default2 = "/* src/app/setting/setting.css */\n/*# sourceMappingURL=setting.css.map */\n";
  }
});

// src/app/setting/setting.ts
var Setting;
var init_setting3 = __esm({
  "src/app/setting/setting.ts"() {
    "use strict";
    init_tslib_es6();
    init_setting();
    init_setting2();
    init_core();
    Setting = class Setting2 {
    };
    Setting = __decorate([
      Component({
        selector: "app-setting",
        imports: [],
        template: setting_default,
        styles: [setting_default2]
      })
    ], Setting);
  }
});

// src/app/setting/setting.spec.ts
var require_setting_spec = __commonJS({
  "src/app/setting/setting.spec.ts"(exports) {
    init_testing();
    init_setting3();
    describe("Setting", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Setting]
        }).compileComponents();
        fixture = TestBed.createComponent(Setting);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_setting_spec();
//# sourceMappingURL=spec-setting.spec.js.map
