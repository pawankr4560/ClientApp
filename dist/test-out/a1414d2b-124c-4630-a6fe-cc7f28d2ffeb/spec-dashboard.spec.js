import {
  CdkDrag,
  CdkDropList,
  init_drag_drop,
  moveItemInArray
} from "./chunk-LCIFRZJ4.js";
import {
  MatCardModule,
  init_card
} from "./chunk-56VWZNTU.js";
import {
  MatIconModule,
  init_icon
} from "./chunk-IIZ2VGPP.js";
import {
  BreakpointObserver,
  MatCommonModule,
  init_coercion,
  init_common_module,
  init_layout
} from "./chunk-UETOS5BU.js";
import "./chunk-YTSN7FMT.js";
import "./chunk-BSMWA6CC.js";
import {
  Directionality,
  coerceNumberProperty,
  init_bidi
} from "./chunk-S456UZES.js";
import {
  CommonModule,
  init_common
} from "./chunk-JK4X75GU.js";
import "./chunk-M4UOQEVA.js";
import "./chunk-JIDJSTYV.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  FactoryTarget,
  InjectionToken,
  Input,
  NgModule,
  TestBed,
  ViewEncapsulation,
  __decorate,
  core_exports,
  init_core,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  startWith,
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

// angular:jit:template:src\app\dashboard\dashboard.html
var dashboard_default;
var init_dashboard = __esm({
  "angular:jit:template:src\\app\\dashboard\\dashboard.html"() {
    dashboard_default = '<div class="dashboard">\r\n\r\n  <!-- KPI SECTION -->\r\n <div class="kpi-grid" cdkDropList (cdkDropListDropped)="drop($event)">\r\n  <mat-card class="kpi-card" cdkDropListOrientation="mixed" *ngFor="let kpi of kpis" cdkDrag>\r\n    <div class="kpi-icon" [ngClass]="kpi.bg">\r\n      <mat-icon>{{ kpi.icon }}</mat-icon>\r\n    </div>\r\n    <div class="kpi-content">\r\n      <span class="kpi-title">{{ kpi.title }}</span>\r\n      <span class="kpi-value">{{ kpi.value }}</span>\r\n      <span class="kpi-trend" [ngClass]="kpi.trendClass">{{ kpi.trend }}</span>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n\r\n  <!-- CHART SECTION -->\r\n <!-- CHART GRID -->\r\n<div class="chart-grid" cdkDropList (cdkDropListDropped)="dropChart($event)">\r\n  <mat-card class="chart-card" *ngFor="let chart of charts" cdkDrag>\r\n    <div class="chart-header">\r\n      <h3>{{ chart.title }}</h3>\r\n      <button mat-icon-button>\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n    </div>\r\n    <div class="chart-body">\r\n      {{ chart.body }}\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\dashboard\dashboard.css
var dashboard_default2;
var init_dashboard2 = __esm({
  "angular:jit:style:src\\app\\dashboard\\dashboard.css"() {
    dashboard_default2 = "/* src/app/dashboard/dashboard.css */\n.dashboard {\n  padding: 24px;\n  background: #f8fafc;\n  min-height: 100vh;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  margin-bottom: 28px;\n}\n.kpi-card {\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  border-radius: 16px;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.kpi-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);\n}\n.kpi-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 16px;\n}\n.kpi-icon mat-icon {\n  color: #fff;\n  font-size: 26px;\n}\n.bg-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #2563eb);\n}\n.bg-accent {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n}\n.bg-warn {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n}\n.bg-success {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n}\n.kpi-content {\n  display: flex;\n  flex-direction: column;\n}\n.kpi-title {\n  font-size: 14px;\n  color: #64748b;\n}\n.kpi-value {\n  font-size: 26px;\n  font-weight: 700;\n  color: #0f172a;\n}\n.kpi-trend {\n  font-size: 13px;\n  margin-top: 4px;\n}\n.kpi-trend.up {\n  color: #16a34a;\n}\n.kpi-trend.down {\n  color: #dc2626;\n}\n.chart-grid {\n  display: grid;\n  grid-template-columns: 2fr 1.2fr;\n  gap: 20px;\n}\n.chart-card {\n  padding: 20px;\n  border-radius: 16px;\n}\n.chart-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.chart-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\n.chart-body {\n  height: 260px;\n  border-radius: 12px;\n  background:\n    repeating-linear-gradient(\n      45deg,\n      #f1f5f9,\n      #f1f5f9 10px,\n      #e2e8f0 10px,\n      #e2e8f0 20px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #64748b;\n  font-size: 16px;\n}\n@media (max-width: 1024px) {\n  .kpi-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .chart-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .kpi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n";
  }
});

// node_modules/@angular/material/fesm2022/public-api.mjs
var TileCoordinator, TilePosition;
var init_public_api = __esm({
  "node_modules/@angular/material/fesm2022/public-api.mjs"() {
    "use strict";
    TileCoordinator = class {
      /** Tracking array (see class description). */
      tracker;
      /** Index at which the search for the next gap will start. */
      columnIndex = 0;
      /** The current row index. */
      rowIndex = 0;
      /** Gets the total number of rows occupied by tiles */
      get rowCount() {
        return this.rowIndex + 1;
      }
      /**
       * Gets the total span of rows occupied by tiles.
       * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
       */
      get rowspan() {
        const lastRowMax = Math.max(...this.tracker);
        return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
      }
      /** The computed (row, col) position of each tile (the output). */
      positions;
      /**
       * Updates the tile positions.
       * @param numColumns Amount of columns in the grid.
       * @param tiles Tiles to be positioned.
       */
      update(numColumns, tiles) {
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map((tile) => this._trackTile(tile));
      }
      /** Calculates the row and col position of a tile. */
      _trackTile(tile) {
        const gapStartIndex = this._findMatchingGap(tile.colspan);
        this._markTilePosition(gapStartIndex, tile);
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
      }
      /** Finds the next available space large enough to fit the tile. */
      _findMatchingGap(tileCols) {
        if (tileCols > this.tracker.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than grid with cols="${this.tracker.length}".`);
        }
        let gapStartIndex = -1;
        let gapEndIndex = -1;
        do {
          if (this.columnIndex + tileCols > this.tracker.length) {
            this._nextRow();
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            continue;
          }
          gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
          if (gapStartIndex == -1) {
            this._nextRow();
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            continue;
          }
          gapEndIndex = this._findGapEndIndex(gapStartIndex);
          this.columnIndex = gapStartIndex + 1;
        } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0);
        return Math.max(gapStartIndex, 0);
      }
      /** Move "down" to the next row. */
      _nextRow() {
        this.columnIndex = 0;
        this.rowIndex++;
        for (let i = 0; i < this.tracker.length; i++) {
          this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
      }
      /**
       * Finds the end index (exclusive) of a gap given the index from which to start looking.
       * The gap ends when a non-zero value is found.
       */
      _findGapEndIndex(gapStartIndex) {
        for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
          if (this.tracker[i] != 0) {
            return i;
          }
        }
        return this.tracker.length;
      }
      /** Update the tile tracker to account for the given tile in the given space. */
      _markTilePosition(start, tile) {
        for (let i = 0; i < tile.colspan; i++) {
          this.tracker[start + i] = tile.rowspan;
        }
      }
    };
    TilePosition = class {
      row;
      col;
      constructor(row, col) {
        this.row = row;
        this.col = col;
      }
    };
  }
});

// node_modules/@angular/material/fesm2022/line.mjs
function setLines(lines, element, prefix = "mat") {
  lines.changes.pipe(startWith(lines)).subscribe(({ length }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);
    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}
var MatLine, MatLineModule;
var init_line = __esm({
  "node_modules/@angular/material/fesm2022/line.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_operators();
    init_common_module();
    MatLine = class _MatLine {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatLine, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatLine, isStandalone: true, selector: "[mat-line], [matLine]", host: { classAttribute: "mat-line" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatLine, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-line], [matLine]",
        host: { "class": "mat-line" }
      }]
    }] });
    MatLineModule = class _MatLineModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatLineModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatLineModule, imports: [MatCommonModule, MatLine], exports: [MatLine, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatLineModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatLineModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatLine],
        exports: [MatLine, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/grid-list.mjs
function calc(exp) {
  return `calc(${exp})`;
}
function normalizeUnits(value) {
  return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}
var MAT_GRID_LIST, MatGridTile, MatGridTileText, MatGridAvatarCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, cssCalcAllowedValue, TileStyler, FixedTileStyler, RatioTileStyler, FitTileStyler, MAT_FIT_MODE, MatGridList, MatGridListModule;
var init_grid_list = __esm({
  "node_modules/@angular/material/fesm2022/grid-list.mjs"() {
    "use strict";
    init_public_api();
    init_line();
    init_core();
    init_core();
    init_coercion();
    init_bidi();
    init_common_module();
    MAT_GRID_LIST = new InjectionToken("MAT_GRID_LIST");
    MatGridTile = class _MatGridTile {
      _element = inject(ElementRef);
      _gridList = inject(MAT_GRID_LIST, { optional: true });
      _rowspan = 1;
      _colspan = 1;
      constructor() {
      }
      /** Amount of rows that the grid tile takes up. */
      get rowspan() {
        return this._rowspan;
      }
      set rowspan(value) {
        this._rowspan = Math.round(coerceNumberProperty(value));
      }
      /** Amount of columns that the grid tile takes up. */
      get colspan() {
        return this._colspan;
      }
      set colspan(value) {
        this._colspan = Math.round(coerceNumberProperty(value));
      }
      /**
       * Sets the style of the grid-tile element.  Needs to be set manually to avoid
       * "Changed after checked" errors that would occur with HostBinding.
       */
      _setStyle(property, value) {
        this._element.nativeElement.style[property] = value;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatGridTile, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatGridTile, isStandalone: true, selector: "mat-grid-tile", inputs: { rowspan: "rowspan", colspan: "colspan" }, host: { properties: { "attr.rowspan": "rowspan", "attr.colspan": "colspan" }, classAttribute: "mat-grid-tile" }, exportAs: ["matGridTile"], ngImport: core_exports, template: '<div class="mat-grid-tile-content">\n  <ng-content></ng-content>\n</div>\n', styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatGridTile, decorators: [{
      type: Component,
      args: [{ selector: "mat-grid-tile", exportAs: "matGridTile", host: {
        "class": "mat-grid-tile",
        // Ensures that the "rowspan" and "colspan" input value is reflected in
        // the DOM. This is needed for the grid-tile harness.
        "[attr.rowspan]": "rowspan",
        "[attr.colspan]": "colspan"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="mat-grid-tile-content">\n  <ng-content></ng-content>\n</div>\n', styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { rowspan: [{
      type: Input
    }], colspan: [{
      type: Input
    }] } });
    MatGridTileText = class _MatGridTileText {
      _element = inject(ElementRef);
      _lines;
      constructor() {
      }
      ngAfterContentInit() {
        setLines(this._lines, this._element);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatGridTileText, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatGridTileText, isStandalone: true, selector: "mat-grid-tile-header, mat-grid-tile-footer", queries: [{ propertyName: "_lines", predicate: MatLine, descendants: true }], ngImport: core_exports, template: '<ng-content select="[mat-grid-avatar], [matGridAvatar]"></ng-content>\n<div class="mat-grid-list-text"><ng-content select="[mat-line], [matLine]"></ng-content></div>\n<ng-content></ng-content>\n', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatGridTileText, decorators: [{
      type: Component,
      args: [{ selector: "mat-grid-tile-header, mat-grid-tile-footer", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: '<ng-content select="[mat-grid-avatar], [matGridAvatar]"></ng-content>\n<div class="mat-grid-list-text"><ng-content select="[mat-line], [matLine]"></ng-content></div>\n<ng-content></ng-content>\n' }]
    }], ctorParameters: () => [], propDecorators: { _lines: [{
      type: ContentChildren,
      args: [MatLine, { descendants: true }]
    }] } });
    MatGridAvatarCssMatStyler = class _MatGridAvatarCssMatStyler {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatGridAvatarCssMatStyler, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatGridAvatarCssMatStyler, isStandalone: true, selector: "[mat-grid-avatar], [matGridAvatar]", host: { classAttribute: "mat-grid-avatar" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatGridAvatarCssMatStyler, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-grid-avatar], [matGridAvatar]",
        host: { "class": "mat-grid-avatar" }
      }]
    }] });
    MatGridTileHeaderCssMatStyler = class _MatGridTileHeaderCssMatStyler {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatGridTileHeaderCssMatStyler, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatGridTileHeaderCssMatStyler, isStandalone: true, selector: "mat-grid-tile-header", host: { classAttribute: "mat-grid-tile-header" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatGridTileHeaderCssMatStyler, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-grid-tile-header",
        host: { "class": "mat-grid-tile-header" }
      }]
    }] });
    MatGridTileFooterCssMatStyler = class _MatGridTileFooterCssMatStyler {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatGridTileFooterCssMatStyler, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatGridTileFooterCssMatStyler, isStandalone: true, selector: "mat-grid-tile-footer", host: { classAttribute: "mat-grid-tile-footer" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatGridTileFooterCssMatStyler, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-grid-tile-footer",
        host: { "class": "mat-grid-tile-footer" }
      }]
    }] });
    cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    TileStyler = class {
      _gutterSize;
      _rows = 0;
      _rowspan = 0;
      _cols;
      _direction;
      /**
       * Adds grid-list layout info once it is available. Cannot be processed in the constructor
       * because these properties haven't been calculated by that point.
       *
       * @param gutterSize Size of the grid's gutter.
       * @param tracker Instance of the TileCoordinator.
       * @param cols Amount of columns in the grid.
       * @param direction Layout direction of the grid.
       */
      init(gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
      }
      /**
       * Computes the amount of space a single 1x1 tile would take up (width or height).
       * Used as a basis for other calculations.
       * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
       * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
       * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
       */
      getBaseTileSize(sizePercent, gutterFraction) {
        return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
      }
      /**
       * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
       * @param offset Number of tiles that have already been rendered in the row/column.
       * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
       * @return Position of the tile as a CSS calc() expression.
       */
      getTilePosition(baseSize, offset) {
        return offset === 0 ? "0" : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
      }
      /**
       * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
       * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
       * @param span The tile's rowspan or colspan.
       * @return Size of the tile as a CSS calc() expression.
       */
      getTileSize(baseSize, span) {
        return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
      }
      /**
       * Sets the style properties to be applied to a tile for the given row and column index.
       * @param tile Tile to which to apply the styling.
       * @param rowIndex Index of the tile's row.
       * @param colIndex Index of the tile's column.
       */
      setStyle(tile, rowIndex, colIndex) {
        let percentWidthPerTile = 100 / this._cols;
        let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
      }
      /** Sets the horizontal placement of the tile in the list. */
      setColStyles(tile, colIndex, percentWidth, gutterWidth) {
        let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        let side = this._direction === "rtl" ? "right" : "left";
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle("width", calc(this.getTileSize(baseTileWidth, tile.colspan)));
      }
      /**
       * Calculates the total size taken up by gutters across one axis of a list.
       */
      getGutterSpan() {
        return `${this._gutterSize} * (${this._rowspan} - 1)`;
      }
      /**
       * Calculates the total size taken up by tiles across one axis of a list.
       * @param tileHeight Height of the tile.
       */
      getTileSpan(tileHeight) {
        return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
      }
      /**
       * Calculates the computed height and returns the correct style property to set.
       * This method can be implemented by each type of TileStyler.
       * @docs-private
       */
      getComputedHeight() {
        return null;
      }
    };
    FixedTileStyler = class extends TileStyler {
      fixedRowHeight;
      constructor(fixedRowHeight) {
        super();
        this.fixedRowHeight = fixedRowHeight;
      }
      init(gutterSize, tracker, cols, direction) {
        super.init(gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
        if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
        }
      }
      setRowStyles(tile, rowIndex) {
        tile._setStyle("top", this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle("height", calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
      }
      getComputedHeight() {
        return ["height", calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)];
      }
      reset(list) {
        list._setListStyle(["height", null]);
        if (list._tiles) {
          list._tiles.forEach((tile) => {
            tile._setStyle("top", null);
            tile._setStyle("height", null);
          });
        }
      }
    };
    RatioTileStyler = class extends TileStyler {
      /** Ratio width:height given by user to determine row height. */
      rowHeightRatio;
      baseTileHeight;
      constructor(value) {
        super();
        this._parseRatio(value);
      }
      setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        let percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        tile._setStyle("marginTop", this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle("paddingTop", calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
      }
      getComputedHeight() {
        return [
          "paddingBottom",
          calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)
        ];
      }
      reset(list) {
        list._setListStyle(["paddingBottom", null]);
        list._tiles.forEach((tile) => {
          tile._setStyle("marginTop", null);
          tile._setStyle("paddingTop", null);
        });
      }
      _parseRatio(value) {
        const ratioParts = value.split(":");
        if (ratioParts.length !== 2 && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
      }
    };
    FitTileStyler = class extends TileStyler {
      setRowStyles(tile, rowIndex) {
        let percentHeightPerTile = 100 / this._rowspan;
        let gutterHeightPerTile = (this._rows - 1) / this._rows;
        let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle("top", this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle("height", calc(this.getTileSize(baseTileHeight, tile.rowspan)));
      }
      reset(list) {
        if (list._tiles) {
          list._tiles.forEach((tile) => {
            tile._setStyle("top", null);
            tile._setStyle("height", null);
          });
        }
      }
    };
    MAT_FIT_MODE = "fit";
    MatGridList = class _MatGridList {
      _element = inject(ElementRef);
      _dir = inject(Directionality, { optional: true });
      /** Number of columns being rendered. */
      _cols;
      /** Used for determining the position of each tile in the grid. */
      _tileCoordinator;
      /**
       * Row height value passed in by user. This can be one of three types:
       * - Number value (ex: "100px"):  sets a fixed row height to that value
       * - Ratio value (ex: "4:3"): sets the row height based on width:height ratio
       * - "Fit" mode (ex: "fit"): sets the row height to total height divided by number of rows
       */
      _rowHeight;
      /** The amount of space between tiles. This will be something like '5px' or '2em'. */
      _gutter = "1px";
      /** Sets position and size styles for a tile */
      _tileStyler;
      /** Query list of tiles that are being rendered. */
      _tiles;
      constructor() {
      }
      /** Amount of columns in the grid list. */
      get cols() {
        return this._cols;
      }
      set cols(value) {
        this._cols = Math.max(1, Math.round(coerceNumberProperty(value)));
      }
      /** Size of the grid list's gutter in pixels. */
      get gutterSize() {
        return this._gutter;
      }
      set gutterSize(value) {
        this._gutter = `${value == null ? "" : value}`;
      }
      /** Set internal representation of row height from the user-provided value. */
      get rowHeight() {
        return this._rowHeight;
      }
      set rowHeight(value) {
        const newValue = `${value == null ? "" : value}`;
        if (newValue !== this._rowHeight) {
          this._rowHeight = newValue;
          this._setTileStyler(this._rowHeight);
        }
      }
      ngOnInit() {
        this._checkCols();
        this._checkRowHeight();
      }
      /**
       * The layout calculation is fairly cheap if nothing changes, so there's little cost
       * to run it frequently.
       */
      ngAfterContentChecked() {
        this._layoutTiles();
      }
      /** Throw a friendly error if cols property is missing */
      _checkCols() {
        if (!this.cols && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">`);
        }
      }
      /** Default to equal width:height if rowHeight property is missing */
      _checkRowHeight() {
        if (!this._rowHeight) {
          this._setTileStyler("1:1");
        }
      }
      /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
      _setTileStyler(rowHeight) {
        if (this._tileStyler) {
          this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
          this._tileStyler = new FitTileStyler();
        } else if (rowHeight && rowHeight.indexOf(":") > -1) {
          this._tileStyler = new RatioTileStyler(rowHeight);
        } else {
          this._tileStyler = new FixedTileStyler(rowHeight);
        }
      }
      /** Computes and applies the size and position for all children grid tiles. */
      _layoutTiles() {
        if (!this._tileCoordinator) {
          this._tileCoordinator = new TileCoordinator();
        }
        const tracker = this._tileCoordinator;
        const tiles = this._tiles.filter((tile) => !tile._gridList || tile._gridList === this);
        const direction = this._dir ? this._dir.value : "ltr";
        this._tileCoordinator.update(this.cols, tiles);
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        tiles.forEach((tile, index) => {
          const pos = tracker.positions[index];
          this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
      }
      /** Sets style on the main grid-list element, given the style name and value. */
      _setListStyle(style) {
        if (style) {
          this._element.nativeElement.style[style[0]] = style[1];
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatGridList, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatGridList, isStandalone: true, selector: "mat-grid-list", inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight" }, host: { properties: { "attr.cols": "cols" }, classAttribute: "mat-grid-list" }, providers: [
        {
          provide: MAT_GRID_LIST,
          useExisting: _MatGridList
        }
      ], queries: [{ propertyName: "_tiles", predicate: MatGridTile, descendants: true }], exportAs: ["matGridList"], ngImport: core_exports, template: "<div>\n  <ng-content></ng-content>\n</div>", styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatGridList, decorators: [{
      type: Component,
      args: [{ selector: "mat-grid-list", exportAs: "matGridList", host: {
        "class": "mat-grid-list",
        // Ensures that the "cols" input value is reflected in the DOM. This is
        // needed for the grid-list harness.
        "[attr.cols]": "cols"
      }, providers: [
        {
          provide: MAT_GRID_LIST,
          useExisting: MatGridList
        }
      ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div>\n  <ng-content></ng-content>\n</div>", styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { _tiles: [{
      type: ContentChildren,
      args: [MatGridTile, { descendants: true }]
    }], cols: [{
      type: Input
    }], gutterSize: [{
      type: Input
    }], rowHeight: [{
      type: Input
    }] } });
    MatGridListModule = class _MatGridListModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatGridListModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatGridListModule, imports: [
        MatLineModule,
        MatCommonModule,
        MatGridList,
        MatGridTile,
        MatGridTileText,
        MatGridTileHeaderCssMatStyler,
        MatGridTileFooterCssMatStyler,
        MatGridAvatarCssMatStyler
      ], exports: [
        MatGridList,
        MatGridTile,
        MatGridTileText,
        MatLineModule,
        MatCommonModule,
        MatGridTileHeaderCssMatStyler,
        MatGridTileFooterCssMatStyler,
        MatGridAvatarCssMatStyler
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatGridListModule, imports: [
        MatLineModule,
        MatCommonModule,
        MatLineModule,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatGridListModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatLineModule,
          MatCommonModule,
          MatGridList,
          MatGridTile,
          MatGridTileText,
          MatGridTileHeaderCssMatStyler,
          MatGridTileFooterCssMatStyler,
          MatGridAvatarCssMatStyler
        ],
        exports: [
          MatGridList,
          MatGridTile,
          MatGridTileText,
          MatLineModule,
          MatCommonModule,
          MatGridTileHeaderCssMatStyler,
          MatGridTileFooterCssMatStyler,
          MatGridAvatarCssMatStyler
        ]
      }]
    }] });
  }
});

// src/app/dashboard/dashboard.ts
var Dashboard;
var init_dashboard3 = __esm({
  "src/app/dashboard/dashboard.ts"() {
    "use strict";
    init_tslib_es6();
    init_dashboard();
    init_dashboard2();
    init_drag_drop();
    init_layout();
    init_common();
    init_core();
    init_card();
    init_grid_list();
    init_icon();
    Dashboard = class Dashboard2 {
      breakpointObserver;
      cols = 4;
      constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.breakpointObserver.observe(["(max-width: 768px)"]).subscribe((res) => {
          this.cols = res.matches ? 1 : 4;
        });
      }
      charts = [
        { title: "Sales Overview", body: "\u{1F4CA} Interactive Chart Placeholder" },
        { title: "User Growth", body: "\u{1F4C8} Interactive Chart Placeholder" }
      ];
      kpis = [
        { title: "Products", value: "128", trend: "\u25B2 12%", icon: "inventory_2", bg: "bg-primary", trendClass: "up" },
        { title: "Users", value: "54", trend: "\u25B2 8%", icon: "group", bg: "bg-accent", trendClass: "up" },
        { title: "Orders", value: "320", trend: "\u25BC 4%", icon: "shopping_cart", bg: "bg-warn", trendClass: "down" },
        { title: "Revenue", value: "\u20B94.5L", trend: "\u25B2 18%", icon: "trending_up", bg: "bg-success", trendClass: "up" }
      ];
      drop(event) {
        moveItemInArray(this.kpis, event.previousIndex, event.currentIndex);
      }
      dropChart(event) {
        moveItemInArray(this.charts, event.previousIndex, event.currentIndex);
      }
      static ctorParameters = () => [
        { type: BreakpointObserver }
      ];
    };
    Dashboard = __decorate([
      Component({
        selector: "app-dashboard",
        imports: [
          CommonModule,
          MatCardModule,
          MatGridListModule,
          CdkDropList,
          CdkDrag,
          MatIconModule
        ],
        template: dashboard_default,
        styles: [dashboard_default2]
      })
    ], Dashboard);
  }
});

// src/app/dashboard/dashboard.spec.ts
var require_dashboard_spec = __commonJS({
  "src/app/dashboard/dashboard.spec.ts"(exports) {
    init_testing();
    init_dashboard3();
    describe("Dashboard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Dashboard]
        }).compileComponents();
        fixture = TestBed.createComponent(Dashboard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_dashboard_spec();
//# sourceMappingURL=spec-dashboard.spec.js.map
