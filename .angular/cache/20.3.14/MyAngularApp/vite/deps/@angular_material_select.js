import {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-YE7JDA63.js";
import "./chunk-OD5ZU6PI.js";
import "./chunk-4HUQYPGT.js";
import "./chunk-ONQKUWMB.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-VDQVDTUP.js";
import "./chunk-YPEYR3PU.js";
import "./chunk-CVF57UDL.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-YPV4AMRC.js";
import "./chunk-FIJWFGLH.js";
import "./chunk-V7VPHMKL.js";
import "./chunk-IUQCTWRV.js";
import "./chunk-ENOILR7I.js";
import "./chunk-YBL36BVE.js";
import "./chunk-GYCY4TZY.js";
import "./chunk-EMZHHQKL.js";
import "./chunk-UPSXSCVF.js";
import "./chunk-QSQ7FBEG.js";
import "./chunk-ZA6FQPXG.js";
import "./chunk-4F7AA6H2.js";
import "./chunk-SWE265JH.js";
import "./chunk-O6F2R5YM.js";
import "./chunk-XHHKFBCU.js";
import "./chunk-XIZBRTSO.js";
import "./chunk-PPTNAL2X.js";
import "./chunk-A3K42FXE.js";
import "./chunk-6QIQYGIN.js";
import "./chunk-7YF3GBEP.js";
import "./chunk-6WPYAX5A.js";
import "./chunk-ELTTJZ2S.js";
import "./chunk-3MK4APGC.js";
import "./chunk-73YJRTTC.js";
import "./chunk-AOXRLVXT.js";
import "./chunk-R4RCRJCF.js";
import "./chunk-P6FHSXGX.js";
import "./chunk-WDMUDEB6.js";

// ../../node_modules/@angular/material/fesm2022/select.mjs
var matSelectAnimations = {
  // Represents
  // trigger('transformPanel', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(1, 0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => showing',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1, 1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms linear', style({opacity: 0}))),
  // ])
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: {
    type: 7,
    name: "transformPanel",
    definitions: [
      {
        type: 0,
        name: "void",
        styles: {
          type: 6,
          styles: { opacity: 0, transform: "scale(1, 0.8)" },
          offset: null
        }
      },
      {
        type: 1,
        expr: "void => showing",
        animation: {
          type: 4,
          styles: {
            type: 6,
            styles: { opacity: 1, transform: "scale(1, 1)" },
            offset: null
          },
          timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
        },
        options: null
      },
      {
        type: 1,
        expr: "* => void",
        animation: {
          type: 4,
          styles: { type: 6, styles: { opacity: 0 }, offset: null },
          timings: "100ms linear"
        },
        options: null
      }
    ],
    options: {}
  }
};
export {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatOptgroup,
  MatOption,
  MatPrefix,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger,
  MatSuffix,
  matSelectAnimations
};
//# sourceMappingURL=@angular_material_select.js.map
