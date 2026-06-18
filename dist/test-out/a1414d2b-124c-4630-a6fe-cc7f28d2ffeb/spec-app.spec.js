import {
  DynamicComponent,
  init_dynamic_component
} from "./chunk-LLSYRBPU.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-K6HG4MF4.js";
import {
  ReactiveFormsModule,
  init_forms
} from "./chunk-2JXHV6KY.js";
import "./chunk-YTSN7FMT.js";
import "./chunk-BSMWA6CC.js";
import {
  CommonModule,
  init_common
} from "./chunk-JK4X75GU.js";
import {
  HttpClient,
  HttpClientModule,
  init_http
} from "./chunk-M4UOQEVA.js";
import "./chunk-JIDJSTYV.js";
import {
  Component,
  TestBed,
  ViewChild,
  ViewContainerRef,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  signal
} from "./chunk-YVHSCJHQ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = '<!-- <h2>App Component</h2>\r\n\r\n<button (click)="loadComponent()">Load Dynamic Component</button>\r\n<button (click)="clearComponent()">Clear</button>\r\n\r\n<hr>\r\n\r\nThis is the placeholder \r\n<ng-container #container></ng-container> -->\r\n\r\n<router-outlet></router-outlet>';
  }
});

// angular:jit:style:src\app\app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_common();
    init_http();
    init_core();
    init_forms();
    init_router();
    init_dynamic_component();
    App = class App2 {
      http;
      title = signal("MyAngularApp");
      /**
       *
       */
      constructor(http) {
        this.http = http;
      }
      container;
      // STEP 3.2: Load component dynamically
      loadComponent() {
        this.container.clear();
        const componentRef = this.container.createComponent(DynamicComponent);
        componentRef.instance.title = "Loaded from AppComponent";
        console.log(componentRef.instance.title);
      }
      // STEP 3.5: Remove dynamic component
      clearComponent() {
        this.container.clear();
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
      static propDecorators = {
        container: [{ type: ViewChild, args: ["container", { read: ViewContainerRef }] }]
      };
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, CommonModule, ReactiveFormsModule, HttpClientModule],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, MyAngularApp");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
