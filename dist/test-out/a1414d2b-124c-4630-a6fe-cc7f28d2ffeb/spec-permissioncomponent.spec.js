import {
  MatTableModule,
  init_table
} from "./chunk-XWZB5OHW.js";
import "./chunk-22R4CKL2.js";
import {
  MatRipple,
  _StructuralStylesLoader,
  _animationsDisabled,
  init_animation,
  init_ripple,
  init_structural_styles
} from "./chunk-2A73JQE2.js";
import {
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  init_forms
} from "./chunk-2JXHV6KY.js";
import {
  MatCommonModule,
  init_a11y,
  init_common_module,
  init_private
} from "./chunk-UETOS5BU.js";
import {
  _CdkPrivateStyleLoader,
  _IdGenerator
} from "./chunk-S456UZES.js";
import {
  CommonModule,
  init_common
} from "./chunk-JK4X75GU.js";
import "./chunk-JIDJSTYV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  TestBed,
  ViewChild,
  ViewEncapsulation,
  __decorate,
  booleanAttribute,
  core_exports,
  forwardRef,
  init_core,
  init_testing,
  init_tslib_es6,
  inject,
  numberAttribute,
  signal,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-YVHSCJHQ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\Menu\permissioncomponent\permissioncomponent.html
var permissioncomponent_default;
var init_permissioncomponent = __esm({
  "angular:jit:template:src\\app\\Menu\\permissioncomponent\\permissioncomponent.html"() {
    permissioncomponent_default = '<table mat-table [dataSource]="menuPermissions" class="mat-elevation-z2">\r\n\r\n  <!-- Menu Column -->\r\n  <ng-container matColumnDef="menu">\r\n    <th mat-header-cell *matHeaderCellDef> Menu </th>\r\n    <td mat-cell *matCellDef="let row">\r\n      <span\r\n        [class.parent]="row.level === 0"\r\n        [class.child]="row.level === 1">\r\n        {{ row.name }}\r\n      </span>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <!-- Permission Columns -->\r\n  <ng-container\r\n    *ngFor="let col of permissionColumns"\r\n    [matColumnDef]="col">\r\n\r\n    <th mat-header-cell *matHeaderCellDef>\r\n      <mat-checkbox\r\n        (change)="toggleColumn(col, $event.checked)">\r\n        {{ col | titlecase }}\r\n      </mat-checkbox>\r\n    </th>\r\n\r\n    <td mat-cell *matCellDef="let row">\r\n      <mat-checkbox\r\n        *ngIf="row.level === 1"\r\n        [(ngModel)]="row.permissions[col]">\r\n      </mat-checkbox>\r\n    </td>\r\n\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n  <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r\n\r\n</table>\r\n';
  }
});

// angular:jit:style:src\app\Menu\permissioncomponent\permissioncomponent.css
var permissioncomponent_default2;
var init_permissioncomponent2 = __esm({
  "angular:jit:style:src\\app\\Menu\\permissioncomponent\\permissioncomponent.css"() {
    permissioncomponent_default2 = "/* src/app/Menu/permissioncomponent/permissioncomponent.css */\ntable {\n  width: 100%;\n}\n.parent {\n  font-weight: 600;\n  color: #1e293b;\n}\n.child {\n  padding-left: 28px;\n  color: #475569;\n}\nmat-checkbox {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=permissioncomponent.css.map */\n";
  }
});

// node_modules/@angular/material/fesm2022/internal-form-field.mjs
var _MatInternalFormField;
var init_internal_form_field = __esm({
  "node_modules/@angular/material/fesm2022/internal-form-field.mjs"() {
    "use strict";
    init_core();
    init_core();
    _MatInternalFormField = class __MatInternalFormField {
      /** Position of the label relative to the content. */
      labelPosition;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __MatInternalFormField, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __MatInternalFormField, isStandalone: true, selector: "div[mat-internal-form-field]", inputs: { labelPosition: "labelPosition" }, host: { properties: { "class.mdc-form-field--align-end": 'labelPosition === "before"' }, classAttribute: "mdc-form-field mat-internal-form-field" }, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatInternalFormField, decorators: [{
      type: Component,
      args: [{ selector: "div[mat-internal-form-field]", template: "<ng-content></ng-content>", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      }, styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}\n"] }]
    }], propDecorators: { labelPosition: [{
      type: Input,
      args: [{ required: true }]
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/checkbox.mjs
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
  };
}
var MAT_CHECKBOX_DEFAULT_OPTIONS, TransitionCheckState, MatCheckboxChange, defaults, MatCheckbox, MatCheckboxModule;
var init_checkbox = __esm({
  "node_modules/@angular/material/fesm2022/checkbox.mjs"() {
    "use strict";
    init_a11y();
    init_core();
    init_core();
    init_forms();
    init_private();
    init_internal_form_field();
    init_animation();
    init_structural_styles();
    init_ripple();
    init_common_module();
    MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
      providedIn: "root",
      factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
    });
    (function(TransitionCheckState2) {
      TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
      TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
      TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
      TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
    })(TransitionCheckState || (TransitionCheckState = {}));
    MatCheckboxChange = class {
      /** The source checkbox of the event. */
      source;
      /** The new `checked` value of the checkbox. */
      checked;
    };
    defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
    MatCheckbox = class _MatCheckbox {
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _ngZone = inject(NgZone);
      _animationsDisabled = _animationsDisabled();
      _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
        optional: true
      });
      /** Focuses the checkbox. */
      focus() {
        this._inputElement.nativeElement.focus();
      }
      /** Creates the change event that will be emitted by the checkbox. */
      _createChangeEvent(isChecked) {
        const event = new MatCheckboxChange();
        event.source = this;
        event.checked = isChecked;
        return event;
      }
      /** Gets the element on which to add the animation CSS classes. */
      _getAnimationTargetElement() {
        return this._inputElement?.nativeElement;
      }
      /** CSS classes to add when transitioning between the different checkbox states. */
      _animationClasses = {
        uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
        uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
        checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
        checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
        indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
        indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
      };
      /**
       * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
       * take precedence so this may be omitted.
       */
      ariaLabel = "";
      /**
       * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
       */
      ariaLabelledby = null;
      /** The 'aria-describedby' attribute is read after the element's label and field type. */
      ariaDescribedby;
      /**
       * Users can specify the `aria-expanded` attribute which will be forwarded to the input element
       */
      ariaExpanded;
      /**
       * Users can specify the `aria-controls` attribute which will be forwarded to the input element
       */
      ariaControls;
      /** Users can specify the `aria-owns` attribute which will be forwarded to the input element */
      ariaOwns;
      _uniqueId;
      /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
      id;
      /** Returns the unique id for the visual hidden input. */
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      /** Whether the checkbox is required. */
      required;
      /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
      labelPosition = "after";
      /** Name value will be applied to the input element if present */
      name = null;
      /** Event emitted when the checkbox's `checked` value changes. */
      change = new EventEmitter();
      /** Event emitted when the checkbox's `indeterminate` value changes. */
      indeterminateChange = new EventEmitter();
      /** The value attribute of the native input element */
      value;
      /** Whether the checkbox has a ripple. */
      disableRipple;
      /** The native `<input type="checkbox">` element */
      _inputElement;
      /** The native `<label>` element */
      _labelElement;
      /** Tabindex for the checkbox. */
      tabIndex;
      // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
      // the lack of type checking previously and assigning random strings.
      /**
       * Theme color of the checkbox. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/checkbox/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Whether the checkbox should remain interactive when it is disabled. */
      disabledInteractive;
      /**
       * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
       * @docs-private
       */
      _onTouched = () => {
      };
      _currentAnimationClass = "";
      _currentCheckState = TransitionCheckState.Init;
      _controlValueAccessorChangeFn = () => {
      };
      _validatorChangeFn = () => {
      };
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        this._options = this._options || defaults;
        this.color = this._options.color || defaults.color;
        this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
        this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
        this.disabledInteractive = this._options?.disabledInteractive ?? false;
      }
      ngOnChanges(changes) {
        if (changes["required"]) {
          this._validatorChangeFn();
        }
      }
      ngAfterViewInit() {
        this._syncIndeterminate(this.indeterminate);
      }
      /** Whether the checkbox is checked. */
      get checked() {
        return this._checked;
      }
      set checked(value) {
        if (value != this.checked) {
          this._checked = value;
          this._changeDetectorRef.markForCheck();
        }
      }
      _checked = false;
      /** Whether the checkbox is disabled. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        if (value !== this.disabled) {
          this._disabled = value;
          this._changeDetectorRef.markForCheck();
        }
      }
      _disabled = false;
      /**
       * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
       * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
       * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
       * set to false.
       */
      get indeterminate() {
        return this._indeterminate();
      }
      set indeterminate(value) {
        const changed = value != this._indeterminate();
        this._indeterminate.set(value);
        if (changed) {
          if (value) {
            this._transitionCheckState(TransitionCheckState.Indeterminate);
          } else {
            this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
          }
          this.indeterminateChange.emit(value);
        }
        this._syncIndeterminate(value);
      }
      _indeterminate = signal(false, ...ngDevMode ? [{ debugName: "_indeterminate" }] : []);
      _isRippleDisabled() {
        return this.disableRipple || this.disabled;
      }
      /** Method being called whenever the label text changes. */
      _onLabelTextChange() {
        this._changeDetectorRef.detectChanges();
      }
      // Implemented as part of ControlValueAccessor.
      writeValue(value) {
        this.checked = !!value;
      }
      // Implemented as part of ControlValueAccessor.
      registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
      }
      // Implemented as part of ControlValueAccessor.
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      // Implemented as part of ControlValueAccessor.
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
      }
      // Implemented as a part of Validator.
      validate(control) {
        return this.required && control.value !== true ? { "required": true } : null;
      }
      // Implemented as a part of Validator.
      registerOnValidatorChange(fn) {
        this._validatorChangeFn = fn;
      }
      _transitionCheckState(newState) {
        let oldState = this._currentCheckState;
        let element = this._getAnimationTargetElement();
        if (oldState === newState || !element) {
          return;
        }
        if (this._currentAnimationClass) {
          element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
          element.classList.add(this._currentAnimationClass);
          const animationClass = this._currentAnimationClass;
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              element.classList.remove(animationClass);
            }, 1e3);
          });
        }
      }
      _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(this._createChangeEvent(this.checked));
        if (this._inputElement) {
          this._inputElement.nativeElement.checked = this.checked;
        }
      }
      /** Toggles the `checked` state of the checkbox. */
      toggle() {
        this.checked = !this.checked;
        this._controlValueAccessorChangeFn(this.checked);
      }
      _handleInputClick() {
        const clickAction = this._options?.clickAction;
        if (!this.disabled && clickAction !== "noop") {
          if (this.indeterminate && clickAction !== "check") {
            Promise.resolve().then(() => {
              this._indeterminate.set(false);
              this.indeterminateChange.emit(false);
            });
          }
          this._checked = !this._checked;
          this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
          this._emitChangeEvent();
        } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
          this._inputElement.nativeElement.checked = this.checked;
          this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
      }
      _onInteractionEvent(event) {
        event.stopPropagation();
      }
      _onBlur() {
        Promise.resolve().then(() => {
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
      _getAnimationClassForCheckStateTransition(oldState, newState) {
        if (this._animationsDisabled) {
          return "";
        }
        switch (oldState) {
          case TransitionCheckState.Init:
            if (newState === TransitionCheckState.Checked) {
              return this._animationClasses.uncheckedToChecked;
            } else if (newState == TransitionCheckState.Indeterminate) {
              return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
            }
            break;
          case TransitionCheckState.Unchecked:
            return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
          case TransitionCheckState.Checked:
            return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
          case TransitionCheckState.Indeterminate:
            return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
        }
        return "";
      }
      /**
       * Syncs the indeterminate value with the checkbox DOM node.
       *
       * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
       * property is supported on an element boils down to `if (propName in element)`. Domino's
       * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
       * server-side rendering.
       */
      _syncIndeterminate(value) {
        const nativeCheckbox = this._inputElement;
        if (nativeCheckbox) {
          nativeCheckbox.nativeElement.indeterminate = value;
        }
      }
      _onInputClick() {
        this._handleInputClick();
      }
      _onTouchTargetClick() {
        this._handleInputClick();
        if (!this.disabled) {
          this._inputElement.nativeElement.focus();
        }
      }
      /**
       *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
       *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
       *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
       *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
       *  bubbles when the label is clicked.
       */
      _preventBubblingFromLabel(event) {
        if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
          event.stopPropagation();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCheckbox, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatCheckbox, isStandalone: true, selector: "mat-checkbox", inputs: { ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"], ariaExpanded: ["aria-expanded", "ariaExpanded", booleanAttribute], ariaControls: ["aria-controls", "ariaControls"], ariaOwns: ["aria-owns", "ariaOwns"], id: "id", required: ["required", "required", booleanAttribute], labelPosition: "labelPosition", name: "name", value: "value", disableRipple: ["disableRipple", "disableRipple", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)], color: "color", disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute], checked: ["checked", "checked", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], indeterminate: ["indeterminate", "indeterminate", booleanAttribute] }, outputs: { change: "change", indeterminateChange: "indeterminateChange" }, host: { properties: { "attr.tabindex": "null", "attr.aria-label": "null", "attr.aria-labelledby": "null", "class._mat-animation-noopable": "_animationsDisabled", "class.mdc-checkbox--disabled": "disabled", "id": "id", "class.mat-mdc-checkbox-disabled": "disabled", "class.mat-mdc-checkbox-checked": "checked", "class.mat-mdc-checkbox-disabled-interactive": "disabledInteractive", "class": 'color ? "mat-" + color : "mat-accent"' }, classAttribute: "mat-mdc-checkbox" }, providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => _MatCheckbox),
          multi: true
        },
        {
          provide: NG_VALIDATORS,
          useExisting: _MatCheckbox,
          multi: true
        }
      ], viewQueries: [{ propertyName: "_inputElement", first: true, predicate: ["input"], descendants: true }, { propertyName: "_labelElement", first: true, predicate: ["label"], descendants: true }], exportAs: ["matCheckbox"], usesOnChanges: true, ngImport: core_exports, template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`, styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:GrayText}}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'], dependencies: [{ kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "component", type: _MatInternalFormField, selector: "div[mat-internal-form-field]", inputs: ["labelPosition"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCheckbox, decorators: [{
      type: Component,
      args: [{ selector: "mat-checkbox", host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      }, providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => MatCheckbox),
          multi: true
        },
        {
          provide: NG_VALIDATORS,
          useExisting: MatCheckbox,
          multi: true
        }
      ], exportAs: "matCheckbox", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatRipple, _MatInternalFormField], template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`, styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:GrayText}}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'] }]
    }], ctorParameters: () => [], propDecorators: { ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }], ariaExpanded: [{
      type: Input,
      args: [{ alias: "aria-expanded", transform: booleanAttribute }]
    }], ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }], ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }], id: [{
      type: Input
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], labelPosition: [{
      type: Input
    }], name: [{
      type: Input
    }], change: [{
      type: Output
    }], indeterminateChange: [{
      type: Output
    }], value: [{
      type: Input
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }], _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }], tabIndex: [{
      type: Input,
      args: [{ transform: (value) => value == null ? void 0 : numberAttribute(value) }]
    }], color: [{
      type: Input
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], checked: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], indeterminate: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatCheckboxModule = class _MatCheckboxModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCheckboxModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCheckboxModule, imports: [MatCheckbox, MatCommonModule], exports: [MatCheckbox, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCheckboxModule, imports: [MatCheckbox, MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCheckboxModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCheckbox, MatCommonModule],
        exports: [MatCheckbox, MatCommonModule]
      }]
    }] });
  }
});

// src/app/Menu/permissioncomponent/permissioncomponent.ts
var PermissionComponent;
var init_permissioncomponent3 = __esm({
  "src/app/Menu/permissioncomponent/permissioncomponent.ts"() {
    "use strict";
    init_tslib_es6();
    init_permissioncomponent();
    init_permissioncomponent2();
    init_core();
    init_common();
    init_forms();
    init_table();
    init_checkbox();
    PermissionComponent = class PermissionComponent2 {
      permissionColumns = [
        "view",
        "create",
        "edit",
        "submit",
        "approve",
        "amend",
        "post",
        "print",
        "delete"
      ];
      displayedColumns = ["menu", ...this.permissionColumns];
      menuPermissions = [
        // ================= HOME =================
        {
          id: 1,
          name: "Home",
          level: 0,
          permissions: this.emptyPermissions()
        },
        {
          id: 2,
          name: "Dashboard",
          parentId: 1,
          level: 1,
          permissions: this.fullPermissions()
        },
        {
          id: 3,
          name: "KPI Overview",
          parentId: 1,
          level: 1,
          permissions: this.fullPermissions()
        },
        // ================= FINANCE =================
        {
          id: 10,
          name: "Finance",
          level: 0,
          permissions: this.emptyPermissions()
        },
        // ---- Finance > Master ----
        {
          id: 11,
          name: "Master",
          parentId: 10,
          level: 1,
          permissions: this.emptyPermissions()
        },
        {
          id: 12,
          name: "Accounts",
          parentId: 11,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 13,
          name: "Dimensions",
          parentId: 11,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 14,
          name: "Cost Centers",
          parentId: 11,
          level: 2,
          permissions: this.fullPermissions()
        },
        // ---- Finance > Transactions ----
        {
          id: 20,
          name: "Transactions",
          parentId: 10,
          level: 1,
          permissions: this.emptyPermissions()
        },
        {
          id: 21,
          name: "Journal Entry",
          parentId: 20,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 22,
          name: "Payment Voucher",
          parentId: 20,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 23,
          name: "Receipt Voucher",
          parentId: 20,
          level: 2,
          permissions: this.fullPermissions()
        },
        // ---- Finance > Reports ----
        {
          id: 30,
          name: "Reports",
          parentId: 10,
          level: 1,
          permissions: this.emptyPermissions()
        },
        {
          id: 31,
          name: "Trial Balance",
          parentId: 30,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 32,
          name: "Profit & Loss",
          parentId: 30,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 33,
          name: "Balance Sheet",
          parentId: 30,
          level: 2,
          permissions: this.fullPermissions()
        },
        // ================= INVENTORY =================
        {
          id: 40,
          name: "Inventory",
          level: 0,
          permissions: this.emptyPermissions()
        },
        // ---- Inventory > Master ----
        {
          id: 41,
          name: "Item Master",
          parentId: 40,
          level: 1,
          permissions: this.emptyPermissions()
        },
        {
          id: 42,
          name: "Products",
          parentId: 41,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 43,
          name: "Categories",
          parentId: 41,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 44,
          name: "UOM",
          parentId: 41,
          level: 2,
          permissions: this.fullPermissions()
        },
        // ---- Inventory > Transactions ----
        {
          id: 50,
          name: "Transactions",
          parentId: 40,
          level: 1,
          permissions: this.emptyPermissions()
        },
        {
          id: 51,
          name: "Goods Receipt Note",
          parentId: 50,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 52,
          name: "Stock Transfer",
          parentId: 50,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 53,
          name: "Stock Adjustment",
          parentId: 50,
          level: 2,
          permissions: this.fullPermissions()
        },
        // ---- Inventory > Reports ----
        {
          id: 60,
          name: "Reports",
          parentId: 40,
          level: 1,
          permissions: this.emptyPermissions()
        },
        {
          id: 61,
          name: "Stock Ledger",
          parentId: 60,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 62,
          name: "Stock Valuation",
          parentId: 60,
          level: 2,
          permissions: this.fullPermissions()
        },
        // ================= SYSTEM =================
        {
          id: 70,
          name: "System",
          level: 0,
          permissions: this.emptyPermissions()
        },
        {
          id: 71,
          name: "Security",
          parentId: 70,
          level: 1,
          permissions: this.emptyPermissions()
        },
        {
          id: 72,
          name: "User Management",
          parentId: 71,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 73,
          name: "Role Management",
          parentId: 71,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 74,
          name: "Settings",
          parentId: 70,
          level: 1,
          permissions: this.emptyPermissions()
        },
        {
          id: 75,
          name: "Company Setup",
          parentId: 74,
          level: 2,
          permissions: this.fullPermissions()
        },
        {
          id: 76,
          name: "Fiscal Year",
          parentId: 74,
          level: 2,
          permissions: this.fullPermissions()
        }
      ];
      toggleColumn(permission, checked) {
        this.menuPermissions.forEach((row) => {
          if (row.level === 1) {
            row.permissions[permission] = checked;
          }
        });
        console.log(this.menuPermissions);
      }
      emptyPermissions() {
        return {
          view: false,
          create: false,
          edit: false,
          submit: false,
          approve: false,
          amend: false,
          post: false,
          print: false,
          delete: false
        };
      }
      fullPermissions() {
        return {
          view: true,
          create: true,
          edit: true,
          submit: true,
          approve: true,
          amend: true,
          post: false,
          print: false,
          delete: true
        };
      }
    };
    PermissionComponent = __decorate([
      Component({
        selector: "app-permission-component",
        standalone: true,
        imports: [
          CommonModule,
          FormsModule,
          MatTableModule,
          MatCheckboxModule
        ],
        template: permissioncomponent_default,
        styles: [permissioncomponent_default2]
      })
    ], PermissionComponent);
  }
});

// src/app/Menu/permissioncomponent/permissioncomponent.spec.ts
var require_permissioncomponent_spec = __commonJS({
  "src/app/Menu/permissioncomponent/permissioncomponent.spec.ts"(exports) {
    init_testing();
    init_permissioncomponent3();
    describe("PermissionComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [PermissionComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PermissionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_permissioncomponent_spec();
//# sourceMappingURL=spec-permissioncomponent.spec.js.map
