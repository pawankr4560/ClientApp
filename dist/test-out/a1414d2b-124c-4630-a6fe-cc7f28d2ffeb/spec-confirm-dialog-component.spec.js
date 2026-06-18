import {
  ConfirmDialogComponent,
  init_confirm_dialog_component
} from "./chunk-NU27FLX4.js";
import "./chunk-ZIOCYZU7.js";
import "./chunk-BLIHO745.js";
import "./chunk-EIIOESWS.js";
import "./chunk-2A73JQE2.js";
import "./chunk-IIZ2VGPP.js";
import "./chunk-UETOS5BU.js";
import "./chunk-YTSN7FMT.js";
import "./chunk-BSMWA6CC.js";
import "./chunk-S456UZES.js";
import "./chunk-JK4X75GU.js";
import "./chunk-M4UOQEVA.js";
import "./chunk-JIDJSTYV.js";
import {
  TestBed,
  init_testing
} from "./chunk-YVHSCJHQ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/users/confirm-dialog-component/confirm-dialog-component.spec.ts
var require_confirm_dialog_component_spec = __commonJS({
  "src/app/users/confirm-dialog-component/confirm-dialog-component.spec.ts"(exports) {
    init_testing();
    init_confirm_dialog_component();
    describe("ConfirmDialogComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ConfirmDialogComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ConfirmDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_confirm_dialog_component_spec();
//# sourceMappingURL=spec-confirm-dialog-component.spec.js.map
