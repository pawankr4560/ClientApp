import {
  MatSnackBar,
  init_snack_bar
} from "./chunk-SJMTC4NJ.js";
import {
  MatFormFieldModule,
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-J2XS2NTZ.js";
import "./chunk-BLIHO745.js";
import {
  Auth,
  init_auth
} from "./chunk-R4CVKMPH.js";
import "./chunk-BLFB6EIC.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-EIIOESWS.js";
import "./chunk-2A73JQE2.js";
import {
  Router,
  init_router
} from "./chunk-K6HG4MF4.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-2JXHV6KY.js";
import {
  MatCardModule,
  init_card
} from "./chunk-56VWZNTU.js";
import "./chunk-UETOS5BU.js";
import "./chunk-YTSN7FMT.js";
import "./chunk-BSMWA6CC.js";
import "./chunk-5TAZUAVQ.js";
import "./chunk-S456UZES.js";
import "./chunk-JK4X75GU.js";
import "./chunk-RFYKPB5Y.js";
import "./chunk-M4UOQEVA.js";
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

// angular:jit:template:src\app\auth\login\login.html
var login_default;
var init_login = __esm({
  "angular:jit:template:src\\app\\auth\\login\\login.html"() {
    login_default = '<div class="login-container">\r\n  <mat-card class="login-card">\r\n\r\n    <mat-card-header>\r\n      <mat-card-title class="title">\r\n        <span class="icon">\u{1F3AC}</span>\r\n        Sign In\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n\r\n    <mat-card-content>\r\n      <form [formGroup]="loginForm" (ngSubmit)="login()">\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Email</mat-label>\r\n          <input matInput type="email" formControlName="email" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Password</mat-label>\r\n          <input matInput type="password" formControlName="password" required />\r\n        </mat-form-field>\r\n\r\n        <button\r\n          mat-raised-button\r\n          color="primary"\r\n          class="full-width"\r\n          type="submit"\r\n          [disabled]="loginForm.invalid"\r\n        >\r\n          Login\r\n        </button>\r\n        <button\r\n          mat-raised-button\r\n          color="primary"\r\n          class="full-width"\r\n          type="button"\r\n          [disabled]="!loginForm.invalid"\r\n        (click)="redirect()">\r\n          Signup\r\n        </button>\r\n      </form>\r\n    </mat-card-content>\r\n\r\n  </mat-card>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\auth\login\login.css
var login_default2;
var init_login2 = __esm({
  "angular:jit:style:src\\app\\auth\\login\\login.css"() {
    login_default2 = "/* src/app/auth/login/login.css */\n.login-container {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1f2933,\n      #111827);\n}\n.login-card {\n  width: 100%;\n  max-width: 400px;\n  padding: 24px;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n.title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #111827;\n}\n.icon {\n  margin-right: 8px;\n}\n.full-width {\n  width: 100%;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=login.css.map */\n";
  }
});

// src/app/auth/login/login.ts
var Login;
var init_login3 = __esm({
  "src/app/auth/login/login.ts"() {
    "use strict";
    init_tslib_es6();
    init_login();
    init_login2();
    init_core();
    init_forms();
    init_button();
    init_card();
    init_form_field();
    init_input();
    init_router();
    init_auth();
    init_snack_bar();
    Login = class Login2 {
      router;
      fb;
      authService;
      snackBar;
      loginForm;
      user = {
        email: "test1@gmail.com",
        password: "test@123",
        name: "Test 01",
        phone: "6541236578",
        isLogedIn: true
      };
      constructor(router, fb, authService, snackBar) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.loginForm = this.fb.group({
          email: ["", [Validators.required, Validators.email]],
          password: ["", Validators.required]
        });
      }
      login() {
        if (this.loginForm.invalid)
          return;
        const request = {
          email: this.loginForm.get("email")?.value,
          password: this.loginForm.get("password")?.value
        };
        debugger;
        this.authService.login(request).subscribe({
          next: (response) => {
            if (response.success) {
              const token = response.data;
              localStorage.setItem("jwt", token);
              this.snackBar.open("Login successful \u2705", "Close", {
                duration: 3e3,
                horizontalPosition: "right",
                verticalPosition: "top"
              });
              this.router.navigate(["/home"]);
            } else {
              this.snackBar.open("Invalid email or password \u274C", "Close", {
                duration: 3e3,
                panelClass: ["error-snackbar"]
              });
            }
          },
          error: (err) => {
            this.snackBar.open(err.error.errorMessage + "\u274C", "Close", {
              duration: 3e3,
              horizontalPosition: "right",
              verticalPosition: "top",
              panelClass: ["error-snackbar"]
            });
            console.error("Login failed", err);
          }
        });
      }
      redirect() {
        this.router.navigate(["/auth/signup"]);
      }
      static ctorParameters = () => [
        { type: Router },
        { type: FormBuilder },
        { type: Auth },
        { type: MatSnackBar }
      ];
    };
    Login = __decorate([
      Component({
        selector: "app-login",
        imports: [
          ReactiveFormsModule,
          MatCardModule,
          MatInputModule,
          MatButtonModule,
          MatFormFieldModule
        ],
        template: login_default,
        styles: [login_default2]
      })
    ], Login);
  }
});

// src/app/auth/login/login.spec.ts
var require_login_spec = __commonJS({
  "src/app/auth/login/login.spec.ts"(exports) {
    init_testing();
    init_login3();
    describe("Login", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Login]
        }).compileComponents();
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_spec();
//# sourceMappingURL=spec-login.spec.js.map
