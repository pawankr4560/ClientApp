import {
  MatPaginator,
  MatPaginatorModule,
  init_paginator
} from "./chunk-LTP5SRWM.js";
import {
  MatSnackBar,
  init_snack_bar
} from "./chunk-SJMTC4NJ.js";
import {
  MatTableDataSource,
  MatTableModule,
  init_table
} from "./chunk-XWZB5OHW.js";
import {
  EditProductDialogComponentTs,
  init_edit_product_dialog_component_ts
} from "./chunk-N5F4AK2D.js";
import {
  ProductService,
  init_product_service
} from "./chunk-YQKR3EC5.js";
import {
  ConfirmDialogComponent,
  init_confirm_dialog_component
} from "./chunk-NU27FLX4.js";
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
  MatIcon,
  init_icon
} from "./chunk-IIZ2VGPP.js";
import {
  BreakpointObserver,
  init_layout
} from "./chunk-UETOS5BU.js";
import "./chunk-YTSN7FMT.js";
import "./chunk-BSMWA6CC.js";
import "./chunk-S456UZES.js";
import {
  CommonModule,
  init_common
} from "./chunk-JK4X75GU.js";
import "./chunk-RFYKPB5Y.js";
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

// angular:jit:template:src\app\product\product\product.html
var product_default;
var init_product = __esm({
  "angular:jit:template:src\\app\\product\\product\\product.html"() {
    product_default = `<div class="mat-elevation-z8">\r
\r
  <table mat-table [dataSource]="dataSource" class="full-width-table">\r
\r
    <!-- Code -->\r
    <ng-container matColumnDef="code">\r
      <th mat-header-cell *matHeaderCellDef> Code </th>\r
      <td mat-cell *matCellDef="let product">{{ product.code }}</td>\r
    </ng-container>\r
\r
    <!-- Name -->\r
    <ng-container matColumnDef="name">\r
      <th mat-header-cell *matHeaderCellDef> Name </th>\r
      <td mat-cell *matCellDef="let product">{{ product.name }}</td>\r
    </ng-container>\r
\r
    <!-- Category -->\r
    <ng-container matColumnDef="category">\r
      <th mat-header-cell *matHeaderCellDef> Category </th>\r
      <td mat-cell *matCellDef="let product">{{ product.categorie }}</td>\r
    </ng-container>\r
\r
    <!-- Unit Price -->\r
    <ng-container matColumnDef="unitPrice">\r
      <th mat-header-cell *matHeaderCellDef> Price </th>\r
      <td mat-cell *matCellDef="let product">\r
        {{ product.price | currency:'INR' }}\r
      </td>\r
    </ng-container>\r
\r
    <!-- Stock -->\r
    <ng-container matColumnDef="stockQty">\r
      <th mat-header-cell *matHeaderCellDef> Stock </th>\r
      <td mat-cell *matCellDef="let product">{{ product.stockQty }}</td>\r
    </ng-container>\r
\r
    <!-- Status -->\r
    <ng-container matColumnDef="isActive">\r
      <th mat-header-cell *matHeaderCellDef> Status </th>\r
      <td mat-cell *matCellDef="let product">\r
        <span [class.active]="product.isActive"\r
              [class.inactive]="!product.isActive">\r
          {{ product.isActive ? 'Active' : 'Inactive' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Actions -->\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef> Actions </th>\r
      <td mat-cell *matCellDef="let product">\r
        <button mat-icon-button color="primary" (click)="editProduct(product)">\r
          <mat-icon>edit</mat-icon>\r
        </button>\r
\r
        <button mat-icon-button color="warn" (click)="deleteProduct(product)">\r
          <mat-icon>delete</mat-icon>\r
        </button>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
\r
  </table>\r
\r
  <mat-paginator\r
    [pageSizeOptions]="[5,10,20]"\r
    showFirstLastButtons>\r
  </mat-paginator>\r
\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\product\product\product.css
var product_default2;
var init_product2 = __esm({
  "angular:jit:style:src\\app\\product\\product\\product.css"() {
    product_default2 = "/* src/app/product/product/product.css */\n.full-width-table {\n  width: 100%;\n}\n.active {\n  color: green;\n  font-weight: 600;\n}\n.inactive {\n  color: red;\n  font-weight: 600;\n}\n/*# sourceMappingURL=product.css.map */\n";
  }
});

// src/app/product/product/product.ts
var Product;
var init_product3 = __esm({
  "src/app/product/product/product.ts"() {
    "use strict";
    init_tslib_es6();
    init_product();
    init_product2();
    init_common();
    init_core();
    init_table();
    init_paginator();
    init_dialog();
    init_snack_bar();
    init_layout();
    init_icon();
    init_button();
    init_product_service();
    init_confirm_dialog_component();
    init_edit_product_dialog_component_ts();
    Product = class Product2 {
      breakpointObserver;
      productService;
      dialog;
      snackBar;
      isMobile = false;
      displayedColumns = [
        "code",
        "name",
        "category",
        "unitPrice",
        "stockQty",
        "isActive",
        "actions"
      ];
      dataSource = new MatTableDataSource();
      paginator;
      constructor(breakpointObserver, productService, dialog, snackBar) {
        this.breakpointObserver = breakpointObserver;
        this.productService = productService;
        this.dialog = dialog;
        this.snackBar = snackBar;
      }
      ngOnInit() {
        this.breakpointObserver.observe(["(max-width: 768px)"]).subscribe((result) => {
          this.isMobile = result.matches;
          this.displayedColumns = this.isMobile ? ["code", "name", "category", "unitPrice"] : ["code", "name", "category", "unitPrice", "stockQty", "isActive", "actions"];
        });
        this.productService.products$.subscribe((data) => {
          this.dataSource.data = [...data];
          this.dataSource.paginator = this.paginator;
        });
        this.productService.loadProducts().subscribe();
      }
      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }
      /** Edit Product */
      editProduct(product) {
        const dialogRef = this.dialog.open(EditProductDialogComponentTs, {
          width: "450px",
          data: __spreadValues({}, product)
        });
        dialogRef.afterClosed().subscribe((updatedProduct) => {
          if (updatedProduct) {
            this.productService.updateProduct(updatedProduct).subscribe({
              next: () => {
                this.dataSource.paginator = this.paginator;
                this.snackBar.open("Product updated successfully \u2705", "Close", {
                  duration: 3e3,
                  horizontalPosition: "right",
                  verticalPosition: "top"
                });
              },
              error: (err) => {
                this.snackBar.open(err.error?.errorMessage || "Update failed \u274C", "Close", {
                  duration: 3e3,
                  horizontalPosition: "right",
                  verticalPosition: "top"
                });
              }
            });
          }
        });
      }
      /** Delete Product */
      deleteProduct(product) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: "380px",
          data: {
            title: "Delete Product",
            message: `Are you sure you want to delete "${product.name}"?`
          }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
          if (confirmed) {
            this.productService.deleteProduct(product.id).subscribe({
              next: (res) => {
                if (res?.success) {
                  this.paginator.firstPage();
                  this.snackBar.open(res.message + " \u2705", "Close", {
                    duration: 3e3,
                    horizontalPosition: "right",
                    verticalPosition: "top"
                  });
                }
              },
              error: (err) => {
                this.snackBar.open(err.error?.errorMessage || "Delete failed", "Close", {
                  duration: 3e3,
                  horizontalPosition: "right",
                  verticalPosition: "top"
                });
              }
            });
          }
        });
      }
      static ctorParameters = () => [
        { type: BreakpointObserver },
        { type: ProductService },
        { type: MatDialog },
        { type: MatSnackBar }
      ];
      static propDecorators = {
        paginator: [{ type: ViewChild, args: [MatPaginator] }]
      };
    };
    Product = __decorate([
      Component({
        selector: "app-product",
        standalone: true,
        imports: [
          CommonModule,
          MatTableModule,
          MatPaginatorModule,
          MatIcon,
          MatButtonModule
        ],
        template: product_default,
        styles: [product_default2]
      })
    ], Product);
  }
});

// src/app/product/product/product.spec.ts
var require_product_spec = __commonJS({
  "src/app/product/product/product.spec.ts"(exports) {
    init_testing();
    init_product3();
    describe("Product", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Product]
        }).compileComponents();
        fixture = TestBed.createComponent(Product);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_product_spec();
//# sourceMappingURL=spec-product.spec.js.map
