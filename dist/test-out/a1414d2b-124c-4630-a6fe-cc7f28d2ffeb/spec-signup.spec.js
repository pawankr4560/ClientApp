import {
  MatSnackBar,
  init_snack_bar
} from "./chunk-SJMTC4NJ.js";
import {
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MatOption,
  MatOptionModule,
  MatOptionSelectionChange,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition,
  init_option,
  init_option_module,
  init_select
} from "./chunk-E67MXLPM.js";
import {
  MAT_FORM_FIELD,
  MatFormFieldModule,
  MatInputModule,
  init_form_field,
  init_form_field2,
  init_input
} from "./chunk-J2XS2NTZ.js";
import {
  OverlayConfig,
  OverlayModule,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  init_overlay
} from "./chunk-BLIHO745.js";
import {
  Auth,
  init_auth
} from "./chunk-R4CVKMPH.js";
import "./chunk-GGBKV4JX.js";
import "./chunk-BLFB6EIC.js";
import "./chunk-22R4CKL2.js";
import {
  MatButtonModule,
  TemplatePortal,
  init_button,
  init_portal
} from "./chunk-EIIOESWS.js";
import {
  _animationsDisabled,
  init_animation,
  init_platform
} from "./chunk-2A73JQE2.js";
import {
  Router,
  init_router
} from "./chunk-K6HG4MF4.js";
import {
  FormBuilder,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-2JXHV6KY.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  init_card
} from "./chunk-56VWZNTU.js";
import {
  ActiveDescendantKeyManager,
  BreakpointObserver,
  Breakpoints,
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  MatCommonModule,
  TAB,
  UP_ARROW,
  addAriaReferencedId,
  hasModifierKey,
  init_a11y,
  init_coercion,
  init_common_module,
  init_keycodes,
  init_layout,
  removeAriaReferencedId
} from "./chunk-UETOS5BU.js";
import "./chunk-YTSN7FMT.js";
import "./chunk-BSMWA6CC.js";
import "./chunk-5TAZUAVQ.js";
import {
  CdkScrollableModule,
  Directionality,
  Platform,
  ViewportRuler,
  _IdGenerator,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  coerceArray,
  init_bidi,
  init_scrolling
} from "./chunk-S456UZES.js";
import {
  CommonModule,
  init_common
} from "./chunk-JK4X75GU.js";
import "./chunk-RFYKPB5Y.js";
import "./chunk-M4UOQEVA.js";
import "./chunk-JIDJSTYV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FactoryTarget,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  TestBed,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __decorate,
  afterNextRender,
  booleanAttribute,
  core_exports,
  debounceTime,
  defer,
  delay,
  distinctUntilChanged,
  filter,
  forwardRef,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  map,
  merge,
  of,
  startWith,
  switchMap,
  take,
  tap,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-YVHSCJHQ.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\auth\signup\signup.html
var signup_default;
var init_signup = __esm({
  "angular:jit:template:src\\app\\auth\\signup\\signup.html"() {
    signup_default = '<div class="login-container">\r\n  <mat-card class="login-card">\r\n\r\n    <mat-card-header>\r\n      <mat-card-title class="title">\r\n        <span class="icon">\u{1F3AC}</span>\r\n        Sign Up\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n\r\n    <mat-card-content>\r\n      <form [formGroup]="signupForm" (ngSubmit)="signupUser()">\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Email</mat-label>\r\n          <input matInput type="email" formControlName="email" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Password</mat-label>\r\n          <input matInput type="password" formControlName="password" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>ConfirmPassword</mat-label>\r\n          <input matInput type="password" formControlName="confirmPassword" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>First Name</mat-label>\r\n          <input matInput type="text" formControlName="firstName" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Last Name</mat-label>\r\n          <input matInput type="text" formControlName="lastName" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Gender</mat-label>\r\n          <input matInput type="text" formControlName="gender" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Address</mat-label>\r\n\r\n          <input\r\n            matInput\r\n            formControlName="address"\r\n            [matAutocomplete]="auto"\r\n          />\r\n\r\n          <mat-autocomplete #auto="matAutocomplete">\r\n            <mat-option\r\n              *ngFor="let addr of addresses"\r\n              [value]="addr.description"\r\n            >\r\n              <div class="address-main">\r\n                {{ addr.structured_formatting.main_text }}\r\n              </div>\r\n              <small class="address-secondary">\r\n                {{ addr.structured_formatting.secondary_text }}\r\n              </small>\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n\r\n        <!-- <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Address</mat-label>\r\n          <input matInput type="text" formControlName="address" required />\r\n        </mat-form-field> -->\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Phone</mat-label>\r\n          <input matInput type="number" formControlName="phone" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Weight</mat-label>\r\n          <input matInput type="number" formControlName="weight" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Height</mat-label>\r\n          <input matInput type="number" formControlName="height" required />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance="outline" class="full-width">\r\n          <mat-label>Calorie</mat-label>\r\n          <input matInput type="number" formControlName="calorie" required />\r\n        </mat-form-field>\r\n        <button mat-raised-button color="primary" class="full-width" type="submit" [disabled]="signupForm.invalid">\r\n          Signup\r\n        </button>\r\n\r\n        <button mat-raised-button color="primary" class="full-width" type="button" (click)="redirect()">\r\n          Go To Login\r\n        </button>\r\n      </form>\r\n    </mat-card-content>\r\n\r\n  </mat-card>\r\n</div>';
  }
});

// angular:jit:style:src\app\auth\signup\signup.css
var signup_default2;
var init_signup2 = __esm({
  "angular:jit:style:src\\app\\auth\\signup\\signup.css"() {
    signup_default2 = "/* src/app/auth/signup/signup.css */\n.login-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #1f2933,\n      #111827);\n}\n.login-card {\n  width: 100%;\n  max-width: 500px;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);\n}\n.title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #111827;\n}\n.icon {\n  margin-right: 8px;\n}\n.full-width {\n  width: 100%;\n  margin-bottom: 16px;\n}\n.address-main {\n  font-weight: 500;\n}\n.address-secondary {\n  color: gray;\n  font-size: 12px;\n}\n/*# sourceMappingURL=signup.css.map */\n";
  }
});

// node_modules/@angular/material/fesm2022/autocomplete.mjs
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: false,
    autoSelectActiveOption: false,
    hideSingleSelectionIndicator: false,
    requireSelection: false,
    hasBackdrop: false
  };
}
function getMatAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MatAutocompleteSelectedEvent, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MatAutocomplete, MatAutocompleteOrigin, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER, MatAutocompleteTrigger, MatAutocompleteModule;
var init_autocomplete = __esm({
  "node_modules/@angular/material/fesm2022/autocomplete.mjs"() {
    "use strict";
    init_option();
    init_core();
    init_core();
    init_scrolling();
    init_overlay();
    init_a11y();
    init_platform();
    init_esm();
    init_animation();
    init_bidi();
    init_keycodes();
    init_layout();
    init_portal();
    init_coercion();
    init_forms();
    init_operators();
    init_form_field2();
    init_option_module();
    init_common_module();
    MatAutocompleteSelectedEvent = class {
      source;
      option;
      constructor(source, option) {
        this.source = source;
        this.option = option;
      }
    };
    MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken("mat-autocomplete-default-options", {
      providedIn: "root",
      factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
    });
    MatAutocomplete = class _MatAutocomplete {
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS);
      _animationsDisabled = _animationsDisabled();
      _activeOptionChanges = Subscription.EMPTY;
      /** Manages active item in option list based on key events. */
      _keyManager;
      /** Whether the autocomplete panel should be visible, depending on option length. */
      showPanel = false;
      /** Whether the autocomplete panel is open. */
      get isOpen() {
        return this._isOpen && this.showPanel;
      }
      _isOpen = false;
      /** Latest trigger that opened the autocomplete. */
      _latestOpeningTrigger;
      /** @docs-private Sets the theme color of the panel. */
      _setColor(value) {
        this._color = value;
        this._changeDetectorRef.markForCheck();
      }
      /** @docs-private theme color of the panel */
      _color;
      // The @ViewChild query for TemplateRef here needs to be static because some code paths
      // lead to the overlay being created before change detection has finished for this component.
      // Notably, another component may trigger `focus` on the autocomplete-trigger.
      /** @docs-private */
      template;
      /** Element for the panel containing the autocomplete options. */
      panel;
      /** Reference to all options within the autocomplete. */
      options;
      /** Reference to all option groups within the autocomplete. */
      optionGroups;
      /** Aria label of the autocomplete. */
      ariaLabel;
      /** Input that can be used to specify the `aria-labelledby` attribute. */
      ariaLabelledby;
      /** Function that maps an option's control value to its display value in the trigger. */
      displayWith = null;
      /**
       * Whether the first option should be highlighted when the autocomplete panel is opened.
       * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
       */
      autoActiveFirstOption;
      /** Whether the active option should be selected as the user is navigating. */
      autoSelectActiveOption;
      /**
       * Whether the user is required to make a selection when they're interacting with the
       * autocomplete. If the user moves away from the autocomplete without selecting an option from
       * the list, the value will be reset. If the user opens the panel and closes it without
       * interacting or selecting a value, the initial value will be kept.
       */
      requireSelection;
      /**
       * Specify the width of the autocomplete panel.  Can be any CSS sizing value, otherwise it will
       * match the width of its host.
       */
      panelWidth;
      /** Whether ripples are disabled within the autocomplete panel. */
      disableRipple;
      /** Event that is emitted whenever an option from the list is selected. */
      optionSelected = new EventEmitter();
      /** Event that is emitted when the autocomplete panel is opened. */
      opened = new EventEmitter();
      /** Event that is emitted when the autocomplete panel is closed. */
      closed = new EventEmitter();
      /** Emits whenever an option is activated. */
      optionActivated = new EventEmitter();
      /**
       * Takes classes set on the host mat-autocomplete element and applies them to the panel
       * inside the overlay container to allow for easy styling.
       */
      set classList(value) {
        this._classList = value;
        this._elementRef.nativeElement.className = "";
      }
      _classList;
      /** Whether checkmark indicator for single-selection options is hidden. */
      get hideSingleSelectionIndicator() {
        return this._hideSingleSelectionIndicator;
      }
      set hideSingleSelectionIndicator(value) {
        this._hideSingleSelectionIndicator = value;
        this._syncParentProperties();
      }
      _hideSingleSelectionIndicator;
      /** Syncs the parent state with the individual options. */
      _syncParentProperties() {
        if (this.options) {
          for (const option of this.options) {
            option._changeDetectorRef.markForCheck();
          }
        }
      }
      /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
      id = inject(_IdGenerator).getId("mat-autocomplete-");
      /**
       * Tells any descendant `mat-optgroup` to use the inert a11y pattern.
       * @docs-private
       */
      inertGroups;
      constructor() {
        const platform = inject(Platform);
        this.inertGroups = platform?.SAFARI || false;
        this.autoActiveFirstOption = !!this._defaults.autoActiveFirstOption;
        this.autoSelectActiveOption = !!this._defaults.autoSelectActiveOption;
        this.requireSelection = !!this._defaults.requireSelection;
        this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? false;
      }
      ngAfterContentInit() {
        this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap().skipPredicate(this._skipPredicate);
        this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
          if (this.isOpen) {
            this.optionActivated.emit({ source: this, option: this.options.toArray()[index] || null });
          }
        });
        this._setVisibility();
      }
      ngOnDestroy() {
        this._keyManager?.destroy();
        this._activeOptionChanges.unsubscribe();
      }
      /**
       * Sets the panel scrollTop. This allows us to manually scroll to display options
       * above or below the fold, as they are not actually being focused when active.
       */
      _setScrollTop(scrollTop) {
        if (this.panel) {
          this.panel.nativeElement.scrollTop = scrollTop;
        }
      }
      /** Returns the panel's scrollTop. */
      _getScrollTop() {
        return this.panel ? this.panel.nativeElement.scrollTop : 0;
      }
      /** Panel should hide itself when the option list is empty. */
      _setVisibility() {
        this.showPanel = !!this.options?.length;
        this._changeDetectorRef.markForCheck();
      }
      /** Emits the `select` event. */
      _emitSelectEvent(option) {
        const event = new MatAutocompleteSelectedEvent(this, option);
        this.optionSelected.emit(event);
      }
      /** Gets the aria-labelledby for the autocomplete panel. */
      _getPanelAriaLabelledby(labelId) {
        if (this.ariaLabel) {
          return null;
        }
        const labelExpression = labelId ? labelId + " " : "";
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
      }
      // `skipPredicate` determines if key manager should avoid putting a given option in the tab
      // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
      // recommendation.
      //
      // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
      // makes a few exceptions for compound widgets.
      //
      // From [Developing a Keyboard Interface](
      // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
      //   "For the following composite widget elements, keep them focusable when disabled: Options in a
      //   Listbox..."
      //
      // The user can focus disabled options using the keyboard, but the user cannot click disabled
      // options.
      _skipPredicate() {
        return false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatAutocomplete, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatAutocomplete, isStandalone: true, selector: "mat-autocomplete", inputs: { ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], displayWith: "displayWith", autoActiveFirstOption: ["autoActiveFirstOption", "autoActiveFirstOption", booleanAttribute], autoSelectActiveOption: ["autoSelectActiveOption", "autoSelectActiveOption", booleanAttribute], requireSelection: ["requireSelection", "requireSelection", booleanAttribute], panelWidth: "panelWidth", disableRipple: ["disableRipple", "disableRipple", booleanAttribute], classList: ["class", "classList"], hideSingleSelectionIndicator: ["hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute] }, outputs: { optionSelected: "optionSelected", opened: "opened", closed: "closed", optionActivated: "optionActivated" }, host: { classAttribute: "mat-mdc-autocomplete" }, providers: [{ provide: MAT_OPTION_PARENT_COMPONENT, useExisting: _MatAutocomplete }], queries: [{ propertyName: "options", predicate: MatOption, descendants: true }, { propertyName: "optionGroups", predicate: MAT_OPTGROUP, descendants: true }], viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true, static: true }, { propertyName: "panel", first: true, predicate: ["panel"], descendants: true }], exportAs: ["matAutocomplete"], ngImport: core_exports, template: `<ng-template let-formFieldId="id">
  <div
    class="mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open"
    role="listbox"
    [id]="id"
    [class]="_classList"
    [class.mat-mdc-autocomplete-visible]="showPanel"
    [class.mat-mdc-autocomplete-hidden]="!showPanel"
    [class.mat-autocomplete-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_color === 'primary'"
    [class.mat-accent]="_color === 'accent'"
    [class.mat-warn]="_color === 'warn'"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
    #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`, styles: ["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}@keyframes _mat-autocomplete-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}.mat-autocomplete-panel-animations-enabled{animation:_mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1)}mat-autocomplete{display:none}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatAutocomplete, decorators: [{
      type: Component,
      args: [{ selector: "mat-autocomplete", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, exportAs: "matAutocomplete", host: {
        "class": "mat-mdc-autocomplete"
      }, providers: [{ provide: MAT_OPTION_PARENT_COMPONENT, useExisting: MatAutocomplete }], template: `<ng-template let-formFieldId="id">
  <div
    class="mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open"
    role="listbox"
    [id]="id"
    [class]="_classList"
    [class.mat-mdc-autocomplete-visible]="showPanel"
    [class.mat-mdc-autocomplete-hidden]="!showPanel"
    [class.mat-autocomplete-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_color === 'primary'"
    [class.mat-accent]="_color === 'accent'"
    [class.mat-warn]="_color === 'warn'"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
    #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`, styles: ["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}@keyframes _mat-autocomplete-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}.mat-autocomplete-panel-animations-enabled{animation:_mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1)}mat-autocomplete{display:none}\n"] }]
    }], ctorParameters: () => [], propDecorators: { template: [{
      type: ViewChild,
      args: [TemplateRef, { static: true }]
    }], panel: [{
      type: ViewChild,
      args: ["panel"]
    }], options: [{
      type: ContentChildren,
      args: [MatOption, { descendants: true }]
    }], optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, { descendants: true }]
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], displayWith: [{
      type: Input
    }], autoActiveFirstOption: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], autoSelectActiveOption: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], requireSelection: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], panelWidth: [{
      type: Input
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], optionSelected: [{
      type: Output
    }], opened: [{
      type: Output
    }], closed: [{
      type: Output
    }], optionActivated: [{
      type: Output
    }], classList: [{
      type: Input,
      args: ["class"]
    }], hideSingleSelectionIndicator: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatAutocompleteOrigin = class _MatAutocompleteOrigin {
      elementRef = inject(ElementRef);
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatAutocompleteOrigin, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatAutocompleteOrigin, isStandalone: true, selector: "[matAutocompleteOrigin]", exportAs: ["matAutocompleteOrigin"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatAutocompleteOrigin, decorators: [{
      type: Directive,
      args: [{
        selector: "[matAutocompleteOrigin]",
        exportAs: "matAutocompleteOrigin"
      }]
    }], ctorParameters: () => [] });
    MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatAutocompleteTrigger),
      multi: true
    };
    MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new InjectionToken("mat-autocomplete-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
      }
    });
    MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
      deps: [],
      useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
    };
    MatAutocompleteTrigger = class _MatAutocompleteTrigger {
      _environmentInjector = inject(EnvironmentInjector);
      _element = inject(ElementRef);
      _injector = inject(Injector);
      _viewContainerRef = inject(ViewContainerRef);
      _zone = inject(NgZone);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _dir = inject(Directionality, { optional: true });
      _formField = inject(MAT_FORM_FIELD, { optional: true, host: true });
      _viewportRuler = inject(ViewportRuler);
      _scrollStrategy = inject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY);
      _renderer = inject(Renderer2);
      _animationsDisabled = _animationsDisabled();
      _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, { optional: true });
      _overlayRef;
      _portal;
      _componentDestroyed = false;
      _initialized = new Subject();
      _keydownSubscription;
      _outsideClickSubscription;
      _cleanupWindowBlur;
      /** Old value of the native input. Used to work around issues with the `input` event on IE. */
      _previousValue;
      /** Value of the input element when the panel was attached (even if there are no options). */
      _valueOnAttach;
      /** Value on the previous keydown event. */
      _valueOnLastKeydown;
      /** Strategy that is used to position the panel. */
      _positionStrategy;
      /** Whether or not the label state is being overridden. */
      _manuallyFloatingLabel = false;
      /** The subscription for closing actions (some are bound to document). */
      _closingActionsSubscription;
      /** Subscription to viewport size changes. */
      _viewportSubscription = Subscription.EMPTY;
      /** Implements BreakpointObserver to be used to detect handset landscape */
      _breakpointObserver = inject(BreakpointObserver);
      _handsetLandscapeSubscription = Subscription.EMPTY;
      /**
       * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
       * closed autocomplete from being reopened if the user switches to another browser tab and then
       * comes back.
       */
      _canOpenOnNextFocus = true;
      /** Value inside the input before we auto-selected an option. */
      _valueBeforeAutoSelection;
      /**
       * Current option that we have auto-selected as the user is navigating,
       * but which hasn't been propagated to the model value yet.
       */
      _pendingAutoselectedOption;
      /** Stream of keyboard events that can close the panel. */
      _closeKeyEventStream = new Subject();
      /** Classes to apply to the panel. Exposed as a public property for internal usage. */
      _overlayPanelClass = coerceArray(this._defaults?.overlayPanelClass || []);
      /**
       * Event handler for when the window is blurred. Needs to be an
       * arrow function in order to preserve the context.
       */
      _windowBlurHandler = () => {
        this._canOpenOnNextFocus = this.panelOpen || !this._hasFocus();
      };
      /** `View -> model callback called when value changes` */
      _onChange = () => {
      };
      /** `View -> model callback called when autocomplete has been touched` */
      _onTouched = () => {
      };
      /** The autocomplete panel to be attached to this trigger. */
      autocomplete;
      /**
       * Position of the autocomplete panel relative to the trigger element. A position of `auto`
       * will render the panel underneath the trigger if there is enough space for it to fit in
       * the viewport, otherwise the panel will be shown above it. If the position is set to
       * `above` or `below`, the panel will always be shown above or below the trigger. no matter
       * whether it fits completely in the viewport.
       */
      position = "auto";
      /**
       * Reference relative to which to position the autocomplete panel.
       * Defaults to the autocomplete trigger element.
       */
      connectedTo;
      /**
       * `autocomplete` attribute to be set on the input element.
       * @docs-private
       */
      autocompleteAttribute = "off";
      /**
       * Whether the autocomplete is disabled. When disabled, the element will
       * act as a regular input and the user won't be able to open the panel.
       */
      autocompleteDisabled;
      constructor() {
      }
      /** Class to apply to the panel when it's above the input. */
      _aboveClass = "mat-mdc-autocomplete-panel-above";
      ngAfterViewInit() {
        this._initialized.next();
        this._initialized.complete();
        this._cleanupWindowBlur = this._renderer.listen("window", "blur", this._windowBlurHandler);
      }
      ngOnChanges(changes) {
        if (changes["position"] && this._positionStrategy) {
          this._setStrategyPositions(this._positionStrategy);
          if (this.panelOpen) {
            this._overlayRef.updatePosition();
          }
        }
      }
      ngOnDestroy() {
        this._cleanupWindowBlur?.();
        this._handsetLandscapeSubscription.unsubscribe();
        this._viewportSubscription.unsubscribe();
        this._componentDestroyed = true;
        this._destroyPanel();
        this._closeKeyEventStream.complete();
        this._clearFromModal();
      }
      /** Whether or not the autocomplete panel is open. */
      get panelOpen() {
        return this._overlayAttached && this.autocomplete.showPanel;
      }
      _overlayAttached = false;
      /** Opens the autocomplete suggestion panel. */
      openPanel() {
        this._openPanelInternal();
      }
      /** Closes the autocomplete suggestion panel. */
      closePanel() {
        this._resetLabel();
        if (!this._overlayAttached) {
          return;
        }
        if (this.panelOpen) {
          this._zone.run(() => {
            this.autocomplete.closed.emit();
          });
        }
        if (this.autocomplete._latestOpeningTrigger === this) {
          this.autocomplete._isOpen = false;
          this.autocomplete._latestOpeningTrigger = null;
        }
        this._overlayAttached = false;
        this._pendingAutoselectedOption = null;
        if (this._overlayRef && this._overlayRef.hasAttached()) {
          this._overlayRef.detach();
          this._closingActionsSubscription.unsubscribe();
        }
        this._updatePanelState();
        if (!this._componentDestroyed) {
          this._changeDetectorRef.detectChanges();
        }
        if (this._trackedModal) {
          removeAriaReferencedId(this._trackedModal, "aria-owns", this.autocomplete.id);
        }
      }
      /**
       * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
       * within the viewport.
       */
      updatePosition() {
        if (this._overlayAttached) {
          this._overlayRef.updatePosition();
        }
      }
      /**
       * A stream of actions that should close the autocomplete panel, including
       * when an option is selected, on blur, and when TAB is pressed.
       */
      get panelClosingActions() {
        return merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(filter(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached)) : of()).pipe(
          // Normalize the output so we return a consistent type.
          map((event) => event instanceof MatOptionSelectionChange ? event : null)
        );
      }
      /** Stream of changes to the selection state of the autocomplete options. */
      optionSelections = defer(() => {
        const options = this.autocomplete ? this.autocomplete.options : null;
        if (options) {
          return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
        }
        return this._initialized.pipe(switchMap(() => this.optionSelections));
      });
      /** The currently active option, coerced to MatOption type. */
      get activeOption() {
        if (this.autocomplete && this.autocomplete._keyManager) {
          return this.autocomplete._keyManager.activeItem;
        }
        return null;
      }
      /** Stream of clicks outside of the autocomplete panel. */
      _getOutsideClickStream() {
        return new Observable((observer) => {
          const listener = (event) => {
            const clickTarget = _getEventTarget(event);
            const formField = this._formField ? this._formField.getConnectedOverlayOrigin().nativeElement : null;
            const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
            if (this._overlayAttached && clickTarget !== this._element.nativeElement && // Normally focus moves inside `mousedown` so this condition will almost always be
            // true. Its main purpose is to handle the case where the input is focused from an
            // outside click which propagates up to the `body` listener within the same sequence
            // and causes the panel to close immediately (see #3106).
            !this._hasFocus() && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget)) {
              observer.next(event);
            }
          };
          const cleanups = [
            this._renderer.listen("document", "click", listener),
            this._renderer.listen("document", "auxclick", listener),
            this._renderer.listen("document", "touchend", listener)
          ];
          return () => {
            cleanups.forEach((current) => current());
          };
        });
      }
      // Implemented as part of ControlValueAccessor.
      writeValue(value) {
        Promise.resolve(null).then(() => this._assignOptionValue(value));
      }
      // Implemented as part of ControlValueAccessor.
      registerOnChange(fn) {
        this._onChange = fn;
      }
      // Implemented as part of ControlValueAccessor.
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      // Implemented as part of ControlValueAccessor.
      setDisabledState(isDisabled) {
        this._element.nativeElement.disabled = isDisabled;
      }
      _handleKeydown(e) {
        const event = e;
        const keyCode = event.keyCode;
        const hasModifier = hasModifierKey(event);
        if (keyCode === ESCAPE && !hasModifier) {
          event.preventDefault();
        }
        this._valueOnLastKeydown = this._element.nativeElement.value;
        if (this.activeOption && keyCode === ENTER && this.panelOpen && !hasModifier) {
          this.activeOption._selectViaInteraction();
          this._resetActiveItem();
          event.preventDefault();
        } else if (this.autocomplete) {
          const prevActiveItem = this.autocomplete._keyManager.activeItem;
          const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
          if (keyCode === TAB || isArrowKey && !hasModifier && this.panelOpen) {
            this.autocomplete._keyManager.onKeydown(event);
          } else if (isArrowKey && this._canOpen()) {
            this._openPanelInternal(this._valueOnLastKeydown);
          }
          if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
            this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
            if (this.autocomplete.autoSelectActiveOption && this.activeOption) {
              if (!this._pendingAutoselectedOption) {
                this._valueBeforeAutoSelection = this._valueOnLastKeydown;
              }
              this._pendingAutoselectedOption = this.activeOption;
              this._assignOptionValue(this.activeOption.value);
            }
          }
        }
      }
      _handleInput(event) {
        let target = event.target;
        let value = target.value;
        if (target.type === "number") {
          value = value == "" ? null : parseFloat(value);
        }
        if (this._previousValue !== value) {
          this._previousValue = value;
          this._pendingAutoselectedOption = null;
          if (!this.autocomplete || !this.autocomplete.requireSelection) {
            this._onChange(value);
          }
          if (!value) {
            this._clearPreviousSelectedOption(null, false);
          } else if (this.panelOpen && !this.autocomplete.requireSelection) {
            const selectedOption = this.autocomplete.options?.find((option) => option.selected);
            if (selectedOption) {
              const display = this._getDisplayValue(selectedOption.value);
              if (value !== display) {
                selectedOption.deselect(false);
              }
            }
          }
          if (this._canOpen() && this._hasFocus()) {
            const valueOnAttach = this._valueOnLastKeydown ?? this._element.nativeElement.value;
            this._valueOnLastKeydown = null;
            this._openPanelInternal(valueOnAttach);
          }
        }
      }
      _handleFocus() {
        if (!this._canOpenOnNextFocus) {
          this._canOpenOnNextFocus = true;
        } else if (this._canOpen()) {
          this._previousValue = this._element.nativeElement.value;
          this._attachOverlay(this._previousValue);
          this._floatLabel(true);
        }
      }
      _handleClick() {
        if (this._canOpen() && !this.panelOpen) {
          this._openPanelInternal();
        }
      }
      /** Whether the input currently has focus. */
      _hasFocus() {
        return _getFocusedElementPierceShadowDom() === this._element.nativeElement;
      }
      /**
       * In "auto" mode, the label will animate down as soon as focus is lost.
       * This causes the value to jump when selecting an option with the mouse.
       * This method manually floats the label until the panel can be closed.
       * @param shouldAnimate Whether the label should be animated when it is floated.
       */
      _floatLabel(shouldAnimate = false) {
        if (this._formField && this._formField.floatLabel === "auto") {
          if (shouldAnimate) {
            this._formField._animateAndLockLabel();
          } else {
            this._formField.floatLabel = "always";
          }
          this._manuallyFloatingLabel = true;
        }
      }
      /** If the label has been manually elevated, return it to its normal state. */
      _resetLabel() {
        if (this._manuallyFloatingLabel) {
          if (this._formField) {
            this._formField.floatLabel = "auto";
          }
          this._manuallyFloatingLabel = false;
        }
      }
      /**
       * This method listens to a stream of panel closing actions and resets the
       * stream every time the option list changes.
       */
      _subscribeToClosingActions() {
        const initialRender = new Observable((subscriber) => {
          afterNextRender(() => {
            subscriber.next();
          }, { injector: this._environmentInjector });
        });
        const optionChanges = this.autocomplete.options?.changes.pipe(
          tap(() => this._positionStrategy.reapplyLastPosition()),
          // Defer emitting to the stream until the next tick, because changing
          // bindings in here will cause "changed after checked" errors.
          delay(0)
        ) ?? of();
        return merge(initialRender, optionChanges).pipe(
          // create a new stream of panelClosingActions, replacing any previous streams
          // that were created, and flatten it so our stream only emits closing events...
          switchMap(() => this._zone.run(() => {
            const wasOpen = this.panelOpen;
            this._resetActiveItem();
            this._updatePanelState();
            this._changeDetectorRef.detectChanges();
            if (this.panelOpen) {
              this._overlayRef.updatePosition();
            }
            if (wasOpen !== this.panelOpen) {
              if (this.panelOpen) {
                this._emitOpened();
              } else {
                this.autocomplete.closed.emit();
              }
            }
            return this.panelClosingActions;
          })),
          // when the first closing event occurs...
          take(1)
        ).subscribe((event) => this._setValueAndClose(event));
      }
      /**
       * Emits the opened event once it's known that the panel will be shown and stores
       * the state of the trigger right before the opening sequence was finished.
       */
      _emitOpened() {
        this.autocomplete.opened.emit();
      }
      /** Destroys the autocomplete suggestion panel. */
      _destroyPanel() {
        if (this._overlayRef) {
          this.closePanel();
          this._overlayRef.dispose();
          this._overlayRef = null;
        }
      }
      /** Given a value, returns the string that should be shown within the input. */
      _getDisplayValue(value) {
        const autocomplete = this.autocomplete;
        return autocomplete && autocomplete.displayWith ? autocomplete.displayWith(value) : value;
      }
      _assignOptionValue(value) {
        const toDisplay = this._getDisplayValue(value);
        if (value == null) {
          this._clearPreviousSelectedOption(null, false);
        }
        this._updateNativeInputValue(toDisplay != null ? toDisplay : "");
      }
      _updateNativeInputValue(value) {
        if (this._formField) {
          this._formField._control.value = value;
        } else {
          this._element.nativeElement.value = value;
        }
        this._previousValue = value;
      }
      /**
       * This method closes the panel, and if a value is specified, also sets the associated
       * control to that value. It will also mark the control as dirty if this interaction
       * stemmed from the user.
       */
      _setValueAndClose(event) {
        const panel = this.autocomplete;
        const toSelect = event ? event.source : this._pendingAutoselectedOption;
        if (toSelect) {
          this._clearPreviousSelectedOption(toSelect);
          this._assignOptionValue(toSelect.value);
          this._onChange(toSelect.value);
          panel._emitSelectEvent(toSelect);
          this._element.nativeElement.focus();
        } else if (panel.requireSelection && this._element.nativeElement.value !== this._valueOnAttach) {
          this._clearPreviousSelectedOption(null);
          this._assignOptionValue(null);
          this._onChange(null);
        }
        this.closePanel();
      }
      /**
       * Clear any previous selected option and emit a selection change event for this option
       */
      _clearPreviousSelectedOption(skip, emitEvent) {
        this.autocomplete?.options?.forEach((option) => {
          if (option !== skip && option.selected) {
            option.deselect(emitEvent);
          }
        });
      }
      _openPanelInternal(valueOnAttach = this._element.nativeElement.value) {
        this._attachOverlay(valueOnAttach);
        this._floatLabel();
        if (this._trackedModal) {
          const panelId = this.autocomplete.id;
          addAriaReferencedId(this._trackedModal, "aria-owns", panelId);
        }
      }
      _attachOverlay(valueOnAttach) {
        if (!this.autocomplete && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatAutocompleteMissingPanelError();
        }
        let overlayRef = this._overlayRef;
        if (!overlayRef) {
          this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
            id: this._formField?.getLabelId()
          });
          overlayRef = createOverlayRef(this._injector, this._getOverlayConfig());
          this._overlayRef = overlayRef;
          this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
            if (this.panelOpen && overlayRef) {
              overlayRef.updateSize({ width: this._getPanelWidth() });
            }
          });
          this._handsetLandscapeSubscription = this._breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe((result) => {
            const isHandsetLandscape = result.matches;
            if (isHandsetLandscape) {
              this._positionStrategy.withFlexibleDimensions(true).withGrowAfterOpen(true).withViewportMargin(8);
            } else {
              this._positionStrategy.withFlexibleDimensions(false).withGrowAfterOpen(false).withViewportMargin(0);
            }
          });
        } else {
          this._positionStrategy.setOrigin(this._getConnectedElement());
          overlayRef.updateSize({ width: this._getPanelWidth() });
        }
        if (overlayRef && !overlayRef.hasAttached()) {
          overlayRef.attach(this._portal);
          this._valueOnAttach = valueOnAttach;
          this._valueOnLastKeydown = null;
          this._closingActionsSubscription = this._subscribeToClosingActions();
        }
        const wasOpen = this.panelOpen;
        this.autocomplete._isOpen = this._overlayAttached = true;
        this.autocomplete._latestOpeningTrigger = this;
        this.autocomplete._setColor(this._formField?.color);
        this._updatePanelState();
        this._applyModalPanelOwnership();
        if (this.panelOpen && wasOpen !== this.panelOpen) {
          this._emitOpened();
        }
      }
      /** Handles keyboard events coming from the overlay panel. */
      _handlePanelKeydown = (event) => {
        if (event.keyCode === ESCAPE && !hasModifierKey(event) || event.keyCode === UP_ARROW && hasModifierKey(event, "altKey")) {
          if (this._pendingAutoselectedOption) {
            this._updateNativeInputValue(this._valueBeforeAutoSelection ?? "");
            this._pendingAutoselectedOption = null;
          }
          this._closeKeyEventStream.next();
          this._resetActiveItem();
          event.stopPropagation();
          event.preventDefault();
        }
      };
      /** Updates the panel's visibility state and any trigger state tied to id. */
      _updatePanelState() {
        this.autocomplete._setVisibility();
        if (this.panelOpen) {
          const overlayRef = this._overlayRef;
          if (!this._keydownSubscription) {
            this._keydownSubscription = overlayRef.keydownEvents().subscribe(this._handlePanelKeydown);
          }
          if (!this._outsideClickSubscription) {
            this._outsideClickSubscription = overlayRef.outsidePointerEvents().subscribe();
          }
        } else {
          this._keydownSubscription?.unsubscribe();
          this._outsideClickSubscription?.unsubscribe();
          this._keydownSubscription = this._outsideClickSubscription = null;
        }
      }
      _getOverlayConfig() {
        return new OverlayConfig({
          positionStrategy: this._getOverlayPosition(),
          scrollStrategy: this._scrollStrategy(),
          width: this._getPanelWidth(),
          direction: this._dir ?? void 0,
          hasBackdrop: this._defaults?.hasBackdrop,
          backdropClass: this._defaults?.backdropClass || "cdk-overlay-transparent-backdrop",
          panelClass: this._overlayPanelClass,
          disableAnimations: this._animationsDisabled
        });
      }
      _getOverlayPosition() {
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);
        this._setStrategyPositions(strategy);
        this._positionStrategy = strategy;
        return strategy;
      }
      /** Sets the positions on a position strategy based on the directive's input state. */
      _setStrategyPositions(positionStrategy) {
        const belowPositions = [
          { originX: "start", originY: "bottom", overlayX: "start", overlayY: "top" },
          { originX: "end", originY: "bottom", overlayX: "end", overlayY: "top" }
        ];
        const panelClass = this._aboveClass;
        const abovePositions = [
          { originX: "start", originY: "top", overlayX: "start", overlayY: "bottom", panelClass },
          { originX: "end", originY: "top", overlayX: "end", overlayY: "bottom", panelClass }
        ];
        let positions;
        if (this.position === "above") {
          positions = abovePositions;
        } else if (this.position === "below") {
          positions = belowPositions;
        } else {
          positions = [...belowPositions, ...abovePositions];
        }
        positionStrategy.withPositions(positions);
      }
      _getConnectedElement() {
        if (this.connectedTo) {
          return this.connectedTo.elementRef;
        }
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
      }
      _getPanelWidth() {
        return this.autocomplete.panelWidth || this._getHostWidth();
      }
      /** Returns the width of the input element, so the panel width can match it. */
      _getHostWidth() {
        return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
      }
      /**
       * Reset the active item to -1. This is so that pressing arrow keys will activate the correct
       * option.
       *
       * If the consumer opted-in to automatically activatating the first option, activate the first
       * *enabled* option.
       */
      _resetActiveItem() {
        const autocomplete = this.autocomplete;
        if (autocomplete.autoActiveFirstOption) {
          let firstEnabledOptionIndex = -1;
          for (let index = 0; index < autocomplete.options.length; index++) {
            const option = autocomplete.options.get(index);
            if (!option.disabled) {
              firstEnabledOptionIndex = index;
              break;
            }
          }
          autocomplete._keyManager.setActiveItem(firstEnabledOptionIndex);
        } else {
          autocomplete._keyManager.setActiveItem(-1);
        }
      }
      /** Determines whether the panel can be opened. */
      _canOpen() {
        const element = this._element.nativeElement;
        return !element.readOnly && !element.disabled && !this.autocompleteDisabled;
      }
      /** Scrolls to a particular option in the list. */
      _scrollToOption(index) {
        const autocomplete = this.autocomplete;
        const labelCount = _countGroupLabelsBeforeOption(index, autocomplete.options, autocomplete.optionGroups);
        if (index === 0 && labelCount === 1) {
          autocomplete._setScrollTop(0);
        } else if (autocomplete.panel) {
          const option = autocomplete.options.toArray()[index];
          if (option) {
            const element = option._getHostElement();
            const newScrollPosition = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
            autocomplete._setScrollTop(newScrollPosition);
          }
        }
      }
      /**
       * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
       * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
       * panel. Track the modal we have changed so we can undo the changes on destroy.
       */
      _trackedModal = null;
      /**
       * If the autocomplete trigger is inside of an `aria-modal` element, connect
       * that modal to the options panel with `aria-owns`.
       *
       * For some browser + screen reader combinations, when navigation is inside
       * of an `aria-modal` element, the screen reader treats everything outside
       * of that modal as hidden or invisible.
       *
       * This causes a problem when the combobox trigger is _inside_ of a modal, because the
       * options panel is rendered _outside_ of that modal, preventing screen reader navigation
       * from reaching the panel.
       *
       * We can work around this issue by applying `aria-owns` to the modal with the `id` of
       * the options panel. This effectively communicates to assistive technology that the
       * options panel is part of the same interaction as the modal.
       *
       * At time of this writing, this issue is present in VoiceOver.
       * See https://github.com/angular/components/issues/20694
       */
      _applyModalPanelOwnership() {
        const modal = this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
        if (!modal) {
          return;
        }
        const panelId = this.autocomplete.id;
        if (this._trackedModal) {
          removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
        }
        addAriaReferencedId(modal, "aria-owns", panelId);
        this._trackedModal = modal;
      }
      /** Clears the references to the listbox overlay element from the modal it was added to. */
      _clearFromModal() {
        if (this._trackedModal) {
          const panelId = this.autocomplete.id;
          removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
          this._trackedModal = null;
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatAutocompleteTrigger, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatAutocompleteTrigger, isStandalone: true, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: { autocomplete: ["matAutocomplete", "autocomplete"], position: ["matAutocompletePosition", "position"], connectedTo: ["matAutocompleteConnectedTo", "connectedTo"], autocompleteAttribute: ["autocomplete", "autocompleteAttribute"], autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled", booleanAttribute] }, host: { listeners: { "focusin": "_handleFocus()", "blur": "_onTouched()", "input": "_handleInput($event)", "keydown": "_handleKeydown($event)", "click": "_handleClick()" }, properties: { "attr.autocomplete": "autocompleteAttribute", "attr.role": 'autocompleteDisabled ? null : "combobox"', "attr.aria-autocomplete": 'autocompleteDisabled ? null : "list"', "attr.aria-activedescendant": "(panelOpen && activeOption) ? activeOption.id : null", "attr.aria-expanded": "autocompleteDisabled ? null : panelOpen.toString()", "attr.aria-controls": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id", "attr.aria-haspopup": 'autocompleteDisabled ? null : "listbox"' }, classAttribute: "mat-mdc-autocomplete-trigger" }, providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR], exportAs: ["matAutocompleteTrigger"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatAutocompleteTrigger, decorators: [{
      type: Directive,
      args: [{
        selector: `input[matAutocomplete], textarea[matAutocomplete]`,
        host: {
          "class": "mat-mdc-autocomplete-trigger",
          "[attr.autocomplete]": "autocompleteAttribute",
          "[attr.role]": 'autocompleteDisabled ? null : "combobox"',
          "[attr.aria-autocomplete]": 'autocompleteDisabled ? null : "list"',
          "[attr.aria-activedescendant]": "(panelOpen && activeOption) ? activeOption.id : null",
          "[attr.aria-expanded]": "autocompleteDisabled ? null : panelOpen.toString()",
          "[attr.aria-controls]": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id",
          "[attr.aria-haspopup]": 'autocompleteDisabled ? null : "listbox"',
          // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
          // a little earlier. This avoids issues where IE delays the focusing of the input.
          "(focusin)": "_handleFocus()",
          "(blur)": "_onTouched()",
          "(input)": "_handleInput($event)",
          "(keydown)": "_handleKeydown($event)",
          "(click)": "_handleClick()"
        },
        exportAs: "matAutocompleteTrigger",
        providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
      }]
    }], ctorParameters: () => [], propDecorators: { autocomplete: [{
      type: Input,
      args: ["matAutocomplete"]
    }], position: [{
      type: Input,
      args: ["matAutocompletePosition"]
    }], connectedTo: [{
      type: Input,
      args: ["matAutocompleteConnectedTo"]
    }], autocompleteAttribute: [{
      type: Input,
      args: ["autocomplete"]
    }], autocompleteDisabled: [{
      type: Input,
      args: [{ alias: "matAutocompleteDisabled", transform: booleanAttribute }]
    }] } });
    MatAutocompleteModule = class _MatAutocompleteModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatAutocompleteModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatAutocompleteModule, imports: [
        OverlayModule,
        MatOptionModule,
        MatCommonModule,
        MatAutocomplete,
        MatAutocompleteTrigger,
        MatAutocompleteOrigin
      ], exports: [
        CdkScrollableModule,
        MatAutocomplete,
        MatOptionModule,
        MatCommonModule,
        MatAutocompleteTrigger,
        MatAutocompleteOrigin
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatAutocompleteModule, providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [
        OverlayModule,
        MatOptionModule,
        MatCommonModule,
        CdkScrollableModule,
        MatOptionModule,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatAutocompleteModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          OverlayModule,
          MatOptionModule,
          MatCommonModule,
          MatAutocomplete,
          MatAutocompleteTrigger,
          MatAutocompleteOrigin
        ],
        exports: [
          CdkScrollableModule,
          MatAutocomplete,
          MatOptionModule,
          MatCommonModule,
          MatAutocompleteTrigger,
          MatAutocompleteOrigin
        ],
        providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
      }]
    }] });
  }
});

// src/app/auth/signup/signup.ts
var Signup;
var init_signup3 = __esm({
  "src/app/auth/signup/signup.ts"() {
    "use strict";
    init_tslib_es6();
    init_signup();
    init_signup2();
    init_core();
    init_forms();
    init_button();
    init_card();
    init_form_field();
    init_input();
    init_router();
    init_auth();
    init_snack_bar();
    init_esm();
    init_select();
    init_autocomplete();
    init_common();
    Signup = class Signup2 {
      router;
      fb;
      snackBar;
      authService;
      signupForm;
      addresses = [];
      users = [];
      constructor(router, fb, snackBar, authService) {
        this.router = router;
        this.fb = fb;
        this.snackBar = snackBar;
        this.authService = authService;
        this.signupForm = this.fb.group({
          email: ["", [Validators.required, Validators.email]],
          password: ["", Validators.required],
          confirmPassword: ["", Validators.required],
          firstName: ["", Validators.required],
          lastName: ["", Validators.required],
          gender: ["", Validators.required],
          address: ["", Validators.required],
          phone: ["", [Validators.required, Validators.maxLength(10)]],
          weight: [null, [Validators.required, Validators.min(1)]],
          height: [null, [Validators.required, Validators.min(1)]],
          calorie: [null, [Validators.required, Validators.min(1)]],
          status: [true]
        });
      }
      ngOnInit() {
        this.signupForm.get("address").valueChanges.pipe(debounceTime(500), distinctUntilChanged(), filter((val) => val && val.length > 2), switchMap((value) => this.authService.searchAddress(value))).subscribe({
          next: (res) => {
            this.addresses = res?.data?.predictions ?? [];
          },
          error: (err) => {
            console.error(err);
            this.addresses = [];
          }
        });
      }
      signupUser() {
        if (this.signupForm.invalid)
          return;
        const formValue = this.signupForm.value;
        const user = {
          email: formValue.email,
          password: formValue.password,
          confirmPassword: formValue.password,
          firstName: formValue.firstName,
          lastName: formValue.lastName,
          gender: formValue.gender,
          address: formValue.address,
          phone: formValue.phone,
          weight: Number(formValue.weight),
          height: Number(formValue.height),
          calorie: Number(formValue.calorie)
        };
        this.authService.signup(user).pipe().subscribe({
          next: (res) => {
            if (res.success) {
              this.snackBar.open(res.message + "\u2705", "Close", {
                duration: 3e3,
                horizontalPosition: "right",
                verticalPosition: "top"
              });
            }
            console.log("Signup success", res);
            this.router.navigate(["/auth/login"]);
          },
          error: (err) => {
            this.snackBar.open(err.error.errorMessage + "\u274C", "Close", {
              duration: 3e3,
              horizontalPosition: "right",
              verticalPosition: "top"
            });
            console.error("Signup failed", err);
          }
        });
      }
      redirect() {
        this.router.navigate(["/auth/login"]);
      }
      static ctorParameters = () => [
        { type: Router },
        { type: FormBuilder },
        { type: MatSnackBar },
        { type: Auth }
      ];
    };
    Signup = __decorate([
      Component({
        selector: "app-signup",
        imports: [
          ReactiveFormsModule,
          CommonModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
          MatOption,
          MatCardContent,
          MatButtonModule,
          MatCardTitle,
          MatCardHeader,
          MatCard,
          MatAutocompleteModule
        ],
        template: signup_default,
        styles: [signup_default2]
      })
    ], Signup);
  }
});

// src/app/auth/signup/signup.spec.ts
var require_signup_spec = __commonJS({
  "src/app/auth/signup/signup.spec.ts"(exports) {
    init_testing();
    init_signup3();
    describe("Signup", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Signup]
        }).compileComponents();
        fixture = TestBed.createComponent(Signup);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_signup_spec();
//# sourceMappingURL=spec-signup.spec.js.map
