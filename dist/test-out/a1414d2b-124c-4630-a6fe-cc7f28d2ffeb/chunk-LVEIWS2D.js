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
  Component,
  Inject,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-YVHSCJHQ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\users\edit-user-dialog-component\edit-user-dialog-component.html
var edit_user_dialog_component_default;
var init_edit_user_dialog_component = __esm({
  "angular:jit:template:src\\app\\users\\edit-user-dialog-component\\edit-user-dialog-component.html"() {
    edit_user_dialog_component_default = '<h2 mat-dialog-title class="dialog-title">Edit User</h2>\r\n\r\n<form [formGroup]="form" mat-dialog-content class="dialog-content">\r\n\r\n  <div class="form-grid">\r\n\r\n    <mat-form-field appearance="outline">\r\n      <mat-label>Name</mat-label>\r\n      <input matInput formControlName="name">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance="outline">\r\n      <mat-label>Gender</mat-label>\r\n      <mat-select formControlName="gender">\r\n        <mat-option value="Male">Male</mat-option>\r\n        <mat-option value="Female">Female</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance="outline">\r\n      <mat-label>Weight (kg)</mat-label>\r\n      <input matInput type="number" formControlName="weight">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance="outline">\r\n      <mat-label>Height (cm)</mat-label>\r\n      <input matInput type="number" formControlName="height">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance="outline" class="full-width">\r\n      <mat-label>Daily Calorie</mat-label>\r\n      <input matInput type="number" formControlName="calorie">\r\n    </mat-form-field>\r\n\r\n  </div>\r\n</form>\r\n\r\n<mat-dialog-actions align="end" class="dialog-actions">\r\n  <button mat-stroked-button (click)="cancel()">Cancel</button>\r\n  <button mat-raised-button color="primary" (click)="save()">Save</button>\r\n</mat-dialog-actions>\r\n';
  }
});

// angular:jit:style:src\app\users\edit-user-dialog-component\edit-user-dialog-component.css
var edit_user_dialog_component_default2;
var init_edit_user_dialog_component2 = __esm({
  "angular:jit:style:src\\app\\users\\edit-user-dialog-component\\edit-user-dialog-component.css"() {
    edit_user_dialog_component_default2 = "/* src/app/users/edit-user-dialog-component/edit-user-dialog-component.css */\n.dialog-title {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.dialog-content {\n  padding-top: 8px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n.full-width {\n  grid-column: span 2;\n}\nmat-form-field {\n  width: 100%;\n}\n.dialog-actions {\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n}\n/*# sourceMappingURL=edit-user-dialog-component.css.map */\n";
  }
});

// src/app/users/edit-user-dialog-component/edit-user-dialog-component.ts
var EditUserDialogComponent;
var init_edit_user_dialog_component3 = __esm({
  "src/app/users/edit-user-dialog-component/edit-user-dialog-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_edit_user_dialog_component();
    init_edit_user_dialog_component2();
    init_core();
    init_forms();
    init_dialog();
    init_form_field();
    init_input();
    init_button();
    init_select();
    EditUserDialogComponent = class EditUserDialogComponent2 {
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
          name: [data.name, Validators.required],
          gender: [data.gender, Validators.required],
          weight: [data.weight, Validators.required],
          height: [data.height, Validators.required],
          calorie: [data.calorie, Validators.required],
          isActive: [data.isActive]
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
    EditUserDialogComponent = __decorate([
      Component({
        selector: "app-edit-user-dialog-component",
        imports: [
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
          MatDialogActions,
          MatButtonModule,
          MatSelectModule
        ],
        template: edit_user_dialog_component_default,
        styles: [edit_user_dialog_component_default2]
      })
    ], EditUserDialogComponent);
  }
});

export {
  EditUserDialogComponent,
  init_edit_user_dialog_component3 as init_edit_user_dialog_component
};
//# sourceMappingURL=chunk-LVEIWS2D.js.map
