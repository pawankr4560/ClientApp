import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  init_dialog
} from "./chunk-ZIOCYZU7.js";
import {
  MatButtonModule,
  init_button
} from "./chunk-EIIOESWS.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-IIZ2VGPP.js";
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

// angular:jit:template:src\app\users\confirm-dialog-component\confirm-dialog-component.html
var confirm_dialog_component_default;
var init_confirm_dialog_component = __esm({
  "angular:jit:template:src\\app\\users\\confirm-dialog-component\\confirm-dialog-component.html"() {
    confirm_dialog_component_default = '<h2 mat-dialog-title class="dialog-title">\r\n  <mat-icon color="warn">warning</mat-icon>\r\n  Delete User\r\n</h2>\r\n\r\n<mat-dialog-content class="dialog-content">\r\n  Are you sure you want to delete\r\n  <strong>"{{ data.message }}"</strong>?\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions align="end" class="dialog-actions">\r\n  <button mat-stroked-button (click)="cancel()">\r\n    Cancel\r\n  </button>\r\n\r\n  <button mat-raised-button color="warn" (click)="confirm()">\r\n    Delete\r\n  </button>\r\n</mat-dialog-actions>\r\n';
  }
});

// angular:jit:style:src\app\users\confirm-dialog-component\confirm-dialog-component.css
var confirm_dialog_component_default2;
var init_confirm_dialog_component2 = __esm({
  "angular:jit:style:src\\app\\users\\confirm-dialog-component\\confirm-dialog-component.css"() {
    confirm_dialog_component_default2 = "/* src/app/users/confirm-dialog-component/confirm-dialog-component.css */\n.dialog-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n}\n.dialog-content {\n  font-size: 14px;\n  color: #374151;\n  margin-top: 8px;\n}\n.dialog-actions {\n  padding: 16px 24px;\n}\n/*# sourceMappingURL=confirm-dialog-component.css.map */\n";
  }
});

// src/app/users/confirm-dialog-component/confirm-dialog-component.ts
var ConfirmDialogComponent;
var init_confirm_dialog_component3 = __esm({
  "src/app/users/confirm-dialog-component/confirm-dialog-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_confirm_dialog_component();
    init_confirm_dialog_component2();
    init_core();
    init_button();
    init_dialog();
    init_icon();
    ConfirmDialogComponent = class ConfirmDialogComponent2 {
      dialogRef;
      data;
      constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
      }
      confirm() {
        this.dialogRef.close(true);
      }
      cancel() {
        this.dialogRef.close(false);
      }
      static ctorParameters = () => [
        { type: MatDialogRef },
        { type: void 0, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA] }] }
      ];
    };
    ConfirmDialogComponent = __decorate([
      Component({
        selector: "app-confirm-dialog-component",
        imports: [MatButtonModule, MatIconModule, MatDialogContent, MatDialogActions],
        template: confirm_dialog_component_default,
        styles: [confirm_dialog_component_default2]
      })
    ], ConfirmDialogComponent);
  }
});

export {
  ConfirmDialogComponent,
  init_confirm_dialog_component3 as init_confirm_dialog_component
};
//# sourceMappingURL=chunk-NU27FLX4.js.map
