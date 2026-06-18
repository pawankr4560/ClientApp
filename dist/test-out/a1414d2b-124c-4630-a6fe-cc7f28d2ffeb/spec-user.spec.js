import {
  MatPaginator,
  MatPaginatorModule,
  init_paginator
} from "./chunk-LTP5SRWM.js";
import {
  MatTableDataSource,
  MatTableModule,
  init_table
} from "./chunk-XWZB5OHW.js";
import {
  ConfirmDialogComponent,
  init_confirm_dialog_component
} from "./chunk-NU27FLX4.js";
import {
  EditUserDialogComponent,
  init_edit_user_dialog_component
} from "./chunk-LVEIWS2D.js";
import "./chunk-E67MXLPM.js";
import "./chunk-J2XS2NTZ.js";
import {
  MatDialog,
  init_dialog
} from "./chunk-ZIOCYZU7.js";
import "./chunk-BLIHO745.js";
import "./chunk-GGBKV4JX.js";
import "./chunk-BLFB6EIC.js";
import "./chunk-22R4CKL2.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-EIIOESWS.js";
import "./chunk-2A73JQE2.js";
import "./chunk-2JXHV6KY.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-IIZ2VGPP.js";
import {
  BreakpointObserver,
  init_layout
} from "./chunk-UETOS5BU.js";
import "./chunk-YTSN7FMT.js";
import "./chunk-BSMWA6CC.js";
import "./chunk-S456UZES.js";
import "./chunk-JK4X75GU.js";
import "./chunk-M4UOQEVA.js";
import "./chunk-JIDJSTYV.js";
import {
  Component,
  TestBed,
  ViewChild,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-YVHSCJHQ.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\users\user\user.html
var user_default;
var init_user = __esm({
  "angular:jit:template:src\\app\\users\\user\\user.html"() {
    user_default = `<div class="mat-elevation-z8">\r
\r
  <table mat-table [dataSource]="dataSource" class="full-width-table">\r
\r
    <!-- ID -->\r
    <ng-container matColumnDef="id">\r
      <th mat-header-cell *matHeaderCellDef> ID </th>\r
      <td mat-cell *matCellDef="let user"> {{ user.id }} </td>\r
    </ng-container>\r
\r
    <!-- Name -->\r
    <ng-container matColumnDef="name">\r
      <th mat-header-cell *matHeaderCellDef> Name </th>\r
      <td mat-cell *matCellDef="let user"> {{ user.name }} </td>\r
    </ng-container>\r
\r
    <!-- Gender -->\r
    <ng-container matColumnDef="gender">\r
      <th mat-header-cell *matHeaderCellDef> Gender </th>\r
      <td mat-cell *matCellDef="let user"> {{ user.gender }} </td>\r
    </ng-container>\r
\r
    <!-- Weight -->\r
    <ng-container matColumnDef="weight">\r
      <th mat-header-cell *matHeaderCellDef> Weight (kg) </th>\r
      <td mat-cell *matCellDef="let user"> {{ user.weight }} </td>\r
    </ng-container>\r
\r
    <!-- Height -->\r
    <ng-container matColumnDef="height">\r
      <th mat-header-cell *matHeaderCellDef> Height (cm) </th>\r
      <td mat-cell *matCellDef="let user"> {{ user.height }} </td>\r
    </ng-container>\r
\r
    <!-- Calorie -->\r
    <ng-container matColumnDef="calorie">\r
      <th mat-header-cell *matHeaderCellDef> Calories </th>\r
      <td mat-cell *matCellDef="let user"> {{ user.calorie }} </td>\r
    </ng-container>\r
\r
    <!-- Status -->\r
    <ng-container matColumnDef="isActive">\r
      <th mat-header-cell *matHeaderCellDef> Status </th>\r
      <td mat-cell *matCellDef="let user">\r
        <span [class.active]="user.isActive"\r
              [class.inactive]="!user.isActive">\r
          {{ user.isActive ? 'Active' : 'Inactive' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
    \r
    <!-- Actions Column -->\r
    <ng-container matColumnDef="actions">\r
    <th mat-header-cell *matHeaderCellDef> Actions </th>\r
    <td mat-cell *matCellDef="let user">\r
\r
        <button mat-icon-button color="primary" \r
                (click)="editUser(user)">\r
          <mat-icon>edit</mat-icon>\r
        </button>\r
\r
        <button mat-icon-button color="warn"\r
                (click)="deleteUser(user)"\r
                aria-label="Delete">\r
        <mat-icon>delete</mat-icon>\r
        </button>\r
\r
    </td>\r
    </ng-container>\r
    \r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
\r
  </table>\r
\r
  <mat-paginator\r
    [pageSizeOptions]="[5, 10, 20]"\r
    showFirstLastButtons>\r
  </mat-paginator>\r
\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\users\user\user.css
var user_default2;
var init_user2 = __esm({
  "angular:jit:style:src\\app\\users\\user\\user.css"() {
    user_default2 = "/* src/app/users/user/user.css */\n.active {\n  color: green;\n  font-weight: 600;\n}\n.inactive {\n  color: red;\n  font-weight: 600;\n}\n/*# sourceMappingURL=user.css.map */\n";
  }
});

// src/app/users/user/user.ts
var User, USER_DATA;
var init_user3 = __esm({
  "src/app/users/user/user.ts"() {
    "use strict";
    init_tslib_es6();
    init_user();
    init_user2();
    init_core();
    init_table();
    init_paginator();
    init_icon();
    init_button();
    init_dialog();
    init_edit_user_dialog_component();
    init_confirm_dialog_component();
    init_layout();
    User = class User2 {
      dialog;
      breakpointObserver;
      isMobile = false;
      displayedColumns = [
        "name",
        "gender",
        "weight",
        "height",
        "calorie",
        "isActive",
        "actions"
      ];
      constructor(dialog, breakpointObserver) {
        this.dialog = dialog;
        this.breakpointObserver = breakpointObserver;
      }
      dataSource = new MatTableDataSource(USER_DATA);
      paginator;
      ngOnInit() {
        this.breakpointObserver.observe(["(max-width: 768px)"]).subscribe((result) => {
          this.isMobile = result.matches;
          this.displayedColumns = this.isMobile ? ["name", "calorie", "isActive", "actions"] : ["id", "name", "gender", "weight", "height", "calorie", "isActive", "actions"];
        });
      }
      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }
      editUser(user) {
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
          data: __spreadValues({}, user)
        });
        dialogRef.afterClosed().subscribe((updatedUser) => {
          if (updatedUser) {
            const index = this.dataSource.data.findIndex((u) => u.id === updatedUser.id);
            if (index !== -1) {
              this.dataSource.data[index] = updatedUser;
              this.dataSource._updateChangeSubscription();
            }
          }
        });
      }
      deleteUser(user) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: "380px",
          data: {
            title: "Delete User",
            message: `Are you sure you want to delete "${user.name}"?`
          }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
          if (confirmed) {
            this.dataSource.data = this.dataSource.data.filter((u) => u.id !== user.id);
          }
        });
      }
      static ctorParameters = () => [
        { type: MatDialog },
        { type: BreakpointObserver }
      ];
      static propDecorators = {
        paginator: [{ type: ViewChild, args: [MatPaginator] }]
      };
    };
    User = __decorate([
      Component({
        selector: "app-user",
        imports: [MatTableModule, MatPaginatorModule, MatIconModule, MatButtonModule],
        template: user_default,
        styles: [user_default2]
      })
    ], User);
    USER_DATA = [
      {
        id: 1,
        email: "test1@gmail.com",
        password: "Test@123",
        confirmPassword: "Test@123",
        name: "Rahul",
        gender: "Male",
        phone: 9829872397,
        weight: 72,
        height: 175,
        calorie: 2200,
        isActive: true
      },
      {
        id: 2,
        email: "test1@gmail.com",
        password: "Test@123",
        confirmPassword: "Test@123",
        name: "Sukhram",
        gender: "Male",
        phone: 7991829828,
        weight: 60,
        height: 162,
        calorie: 1900,
        isActive: true
      },
      {
        id: 3,
        email: "test1@gmail.com",
        password: "Test@123",
        confirmPassword: "Test@123",
        name: "Vikram",
        gender: "Male",
        phone: 7991829828,
        weight: 85,
        height: 180,
        calorie: 2600,
        isActive: false
      }
    ];
  }
});

// src/app/users/user/user.spec.ts
var require_user_spec = __commonJS({
  "src/app/users/user/user.spec.ts"(exports) {
    init_testing();
    init_user3();
    describe("User", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [User]
        }).compileComponents();
        fixture = TestBed.createComponent(User);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_user_spec();
//# sourceMappingURL=spec-user.spec.js.map
