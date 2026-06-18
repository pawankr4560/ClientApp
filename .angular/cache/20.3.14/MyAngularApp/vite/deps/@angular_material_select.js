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
} from "./chunk-KK2RL2PZ.js";
import "./chunk-3ZCID3YQ.js";
import "./chunk-6PMPZODS.js";
import "./chunk-S2LHJQ6T.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-6QREEI5T.js";
import "./chunk-6NM2DYWA.js";
import "./chunk-WVMVEDO2.js";
import "./chunk-IRGHTAX6.js";
import "./chunk-XBRS5WG3.js";
import "./chunk-IFDUTI5R.js";
import "./chunk-FW4GU23L.js";
import "./chunk-6X7MTNKI.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-EIRRSTHJ.js";
import "./chunk-GQ6AJGU2.js";
import "./chunk-AQ4IJY6M.js";
import "./chunk-FHPXITIK.js";
import "./chunk-6WSW5BEN.js";
import "./chunk-TL4W4EWX.js";
import "./chunk-QLG3GFQM.js";
import "./chunk-ZIORUGVH.js";
import "./chunk-6TQ3SL2D.js";
import "./chunk-JGV2BJPR.js";
import "./chunk-R5KY7SNB.js";
import "./chunk-7RV3XM5L.js";
import "./chunk-RYBKFHTG.js";
import "./chunk-22SMITMC.js";
import "./chunk-N7P6UN2F.js";
import "./chunk-IU62YYU5.js";
import "./chunk-HBHUIXYF.js";
import "./chunk-CQ5IFSNJ.js";
import "./chunk-J2VUBLPW.js";
import "./chunk-QSVQGQJO.js";
import "./chunk-W27QOQ7U.js";
import "./chunk-Z47DVUQS.js";
import "./chunk-WDMUDEB6.js";

// ../../../../node_modules/@angular/material/fesm2022/select.mjs
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
