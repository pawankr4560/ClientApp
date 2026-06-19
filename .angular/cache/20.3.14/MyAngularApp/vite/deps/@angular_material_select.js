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
} from "./chunk-HXJN2RNK.js";
import "./chunk-7SI7HJGF.js";
import "./chunk-MY6KZZR5.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-UJSYPXY2.js";
import "./chunk-TT5HGEQD.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-MEL54IUW.js";
import "./chunk-7Q4JNLID.js";
import "./chunk-KC7I2G2S.js";
import "./chunk-N2YRMB3V.js";
import "./chunk-FCHVUHGC.js";
import "./chunk-XKSEGMI3.js";
import "./chunk-4SY33N45.js";
import "./chunk-FMZCO3AJ.js";
import "./chunk-OTKFBDYH.js";
import "./chunk-OVHENQJQ.js";
import "./chunk-VENV3F3G.js";
import "./chunk-46HAYV32.js";
import "./chunk-BHNZFBWD.js";
import "./chunk-WN3V2LL5.js";
import "./chunk-DPJIQJLH.js";
import "./chunk-UND65JBC.js";
import "./chunk-ICAGQF6C.js";
import "./chunk-2ZKSKDON.js";
import "./chunk-UEGJ46PV.js";
import "./chunk-7M32CYZQ.js";
import "./chunk-5EG33CFQ.js";
import "./chunk-DBEVRXET.js";
import "./chunk-ZGZEH6LA.js";
import "./chunk-OCXXZYUU.js";
import "./chunk-GLE5XI5R.js";
import "./chunk-MBFYZAIJ.js";
import "./chunk-R6U7IGMG.js";
import "./chunk-BVGE5PYQ.js";
import "./chunk-WYF26C5D.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/material/fesm2022/select.mjs
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
