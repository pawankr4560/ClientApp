import {
  DynamicComponent,
  init_dynamic_component
} from "./chunk-LLSYRBPU.js";
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

// src/app/dynamic-component/dynamic-component.spec.ts
var require_dynamic_component_spec = __commonJS({
  "src/app/dynamic-component/dynamic-component.spec.ts"(exports) {
    init_testing();
    init_dynamic_component();
    describe("DynamicComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DynamicComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DynamicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dynamic_component_spec();
//# sourceMappingURL=spec-dynamic-component.spec.js.map
