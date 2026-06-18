import {
  EditUserDialogComponent,
  init_edit_user_dialog_component
} from "./chunk-LVEIWS2D.js";
import "./chunk-E67MXLPM.js";
import "./chunk-J2XS2NTZ.js";
import "./chunk-ZIOCYZU7.js";
import "./chunk-BLIHO745.js";
import "./chunk-GGBKV4JX.js";
import "./chunk-BLFB6EIC.js";
import "./chunk-22R4CKL2.js";
import "./chunk-EIIOESWS.js";
import "./chunk-2A73JQE2.js";
import "./chunk-2JXHV6KY.js";
import "./chunk-UETOS5BU.js";
import "./chunk-S456UZES.js";
import "./chunk-JK4X75GU.js";
import "./chunk-JIDJSTYV.js";
import {
  TestBed,
  init_testing
} from "./chunk-YVHSCJHQ.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/users/edit-user-dialog-component/edit-user-dialog-component.spec.ts
var require_edit_user_dialog_component_spec = __commonJS({
  "src/app/users/edit-user-dialog-component/edit-user-dialog-component.spec.ts"(exports) {
    init_testing();
    init_edit_user_dialog_component();
    describe("EditUserDialogComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [EditUserDialogComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(EditUserDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_edit_user_dialog_component_spec();
//# sourceMappingURL=spec-edit-user-dialog-component.spec.js.map
