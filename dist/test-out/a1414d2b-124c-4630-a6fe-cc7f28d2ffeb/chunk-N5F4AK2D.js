import {
  MatSelectModule,
  init_select
} from "./chunk-E67MXLPM.js";
import {
  MatFormFieldModule,
  MatInputModule,
  init_form_field,
  init_input
} from "./chunk-J2XS2NTZ.js";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogRef,
  init_dialog
} from "./chunk-ZIOCYZU7.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-EIIOESWS.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-2JXHV6KY.js";
import {
  CommonModule,
  init_common
} from "./chunk-JK4X75GU.js";
import {
  Component,
  Inject,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-YVHSCJHQ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\product\edit-product-dialog-component.ts\edit-product-dialog-component.ts.html
var edit_product_dialog_component_ts_default;
var init_edit_product_dialog_component_ts = __esm({
  "angular:jit:template:src\\app\\product\\edit-product-dialog-component.ts\\edit-product-dialog-component.ts.html"() {
    edit_product_dialog_component_ts_default = '<h2 mat-dialog-title>Edit Product</h2>\r\n\r\n<form [formGroup]="form" mat-dialog-content class="form-grid">\r\n\r\n  <mat-form-field appearance="outline">\r\n    <mat-label>Code</mat-label>\r\n    <input matInput formControlName="code">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance="outline">\r\n    <mat-label>Name</mat-label>\r\n    <input matInput formControlName="name">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance="outline">\r\n    <mat-label>Category</mat-label>\r\n    <input matInput formControlName="categorie">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance="outline">\r\n    <mat-label>Unit Price</mat-label>\r\n    <input matInput type="number" formControlName="price">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance="outline">\r\n    <mat-label>Stock Qty</mat-label>\r\n    <input matInput type="number" formControlName="stockQty">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance="outline">\r\n    <mat-label>Status</mat-label>\r\n    <mat-select formControlName="isActive">\r\n      <mat-option [value]="true">Active</mat-option>\r\n      <mat-option [value]="false">Inactive</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n</form>\r\n\r\n<mat-dialog-actions align="end">\r\n  <button mat-stroked-button (click)="cancel()">Cancel</button>\r\n  <button mat-raised-button color="primary" (click)="save()" [disabled]="form.invalid">Save</button>\r\n</mat-dialog-actions>\r\n';
  }
});

// angular:jit:style:src\app\product\edit-product-dialog-component.ts\edit-product-dialog-component.ts.css
var edit_product_dialog_component_ts_default2;
var init_edit_product_dialog_component_ts2 = __esm({
  "angular:jit:style:src\\app\\product\\edit-product-dialog-component.ts\\edit-product-dialog-component.ts.css"() {
    edit_product_dialog_component_ts_default2 = "/* src/app/product/edit-product-dialog-component.ts/edit-product-dialog-component.ts.css */\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=edit-product-dialog-component.ts.css.map */\n";
  }
});

// src/app/product/edit-product-dialog-component.ts/edit-product-dialog-component.ts.ts
var EditProductDialogComponentTs;
var init_edit_product_dialog_component_ts3 = __esm({
  "src/app/product/edit-product-dialog-component.ts/edit-product-dialog-component.ts.ts"() {
    "use strict";
    init_tslib_es6();
    init_edit_product_dialog_component_ts();
    init_edit_product_dialog_component_ts2();
    init_common();
    init_core();
    init_forms();
    init_button();
    init_dialog();
    init_form_field();
    init_input();
    init_select();
    EditProductDialogComponentTs = class EditProductDialogComponentTs2 {
      fb;
      dialogRef;
      data;
      form;
      constructor(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = this.fb.group({
          id: [data.id],
          code: [data.code, Validators.required],
          name: [data.name, Validators.required],
          categorie: [data.categorie, Validators.required],
          price: [data.price, Validators.required],
          stockQty: [data.stockQty, Validators.required],
          isActive: [data.status]
        });
      }
      save() {
        if (this.form.valid) {
          this.dialogRef.close(this.form.value);
        }
      }
      cancel() {
        this.dialogRef.close();
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: MatDialogRef },
        { type: void 0, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA] }] }
      ];
    };
    EditProductDialogComponentTs = __decorate([
      Component({
        selector: "app-edit-product-dialog-component.ts",
        imports: [
          CommonModule,
          MatDialogActions,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
          MatButtonModule,
          MatSelectModule
        ],
        template: edit_product_dialog_component_ts_default,
        styles: [edit_product_dialog_component_ts_default2]
      })
    ], EditProductDialogComponentTs);
  }
});

export {
  EditProductDialogComponentTs,
  init_edit_product_dialog_component_ts3 as init_edit_product_dialog_component_ts
};
//# sourceMappingURL=chunk-N5F4AK2D.js.map
