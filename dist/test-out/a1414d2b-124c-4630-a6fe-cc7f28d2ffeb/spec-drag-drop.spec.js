import {
  CdkDrag,
  init_drag_drop
} from "./chunk-LCIFRZJ4.js";
import "./chunk-S456UZES.js";
import "./chunk-JK4X75GU.js";
import "./chunk-JIDJSTYV.js";
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

// angular:jit:template:src\app\drag-drop\drag-drop.html
var drag_drop_default;
var init_drag_drop2 = __esm({
  "angular:jit:template:src\\app\\drag-drop\\drag-drop.html"() {
    drag_drop_default = '<div class="example-box" cdkDrag>\r\n  Drag me around\r\n</div>';
  }
});

// angular:jit:style:src\app\drag-drop\drag-drop.css
var drag_drop_default2;
var init_drag_drop3 = __esm({
  "angular:jit:style:src\\app\\drag-drop\\drag-drop.css"() {
    drag_drop_default2 = "/* src/app/drag-drop/drag-drop.css */\n.example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow:\n    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.example-box:active {\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=drag-drop.css.map */\n";
  }
});

// src/app/drag-drop/drag-drop.ts
var DragDrop;
var init_drag_drop4 = __esm({
  "src/app/drag-drop/drag-drop.ts"() {
    "use strict";
    init_tslib_es6();
    init_drag_drop2();
    init_drag_drop3();
    init_drag_drop();
    init_core();
    DragDrop = class DragDrop2 {
    };
    DragDrop = __decorate([
      Component({
        selector: "app-drag-drop",
        imports: [CdkDrag],
        template: drag_drop_default,
        styles: [drag_drop_default2]
      })
    ], DragDrop);
  }
});

// src/app/drag-drop/drag-drop.spec.ts
var require_drag_drop_spec = __commonJS({
  "src/app/drag-drop/drag-drop.spec.ts"(exports) {
    init_testing();
    init_drag_drop4();
    describe("DragDrop", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DragDrop]
        }).compileComponents();
        fixture = TestBed.createComponent(DragDrop);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_drag_drop_spec();
//# sourceMappingURL=spec-drag-drop.spec.js.map
