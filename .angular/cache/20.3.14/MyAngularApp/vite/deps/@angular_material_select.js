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
} from "./chunk-6HVUFOSF.js";
import "./chunk-GJC53AQ6.js";
import "./chunk-XDYRAUPE.js";
import "./chunk-BB2SGRUO.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-2M7IZKDP.js";
import "./chunk-QDHIQRAG.js";
import "./chunk-B4GG7PR3.js";
import "./chunk-DCIGOQLF.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-GPSDWDAQ.js";
import "./chunk-HAXBB6F5.js";
import "./chunk-3HNEX4KU.js";
import "./chunk-TOYU7UYN.js";
import "./chunk-TRGE34PX.js";
import "./chunk-VENV3F3G.js";
import "./chunk-UVZNZZLF.js";
import "./chunk-UOVTMCLE.js";
import "./chunk-XLEJHNJS.js";
import "./chunk-46HAYV32.js";
import "./chunk-T6K7EXJI.js";
import "./chunk-EK4FPKCV.js";
import "./chunk-XNUFO635.js";
import "./chunk-BBM6Q5MB.js";
import "./chunk-2ZKSKDON.js";
import "./chunk-IDFLYQ7D.js";
import "./chunk-2C5KEONG.js";
import "./chunk-5EG33CFQ.js";
import "./chunk-FQNLEOQW.js";
import "./chunk-BJR5XMDR.js";
import "./chunk-KR2HT4SR.js";
import "./chunk-DJL5CDD2.js";
import "./chunk-M7AXRCET.js";
import "./chunk-R6U7IGMG.js";
import "./chunk-LD5KEVEV.js";
import "./chunk-RSS3ODKE.js";
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
