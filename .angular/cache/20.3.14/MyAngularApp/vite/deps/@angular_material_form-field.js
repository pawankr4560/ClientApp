import {
  MatFormFieldModule
} from "./chunk-S2LHJQ6T.js";
import {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError
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

// ../../../../node_modules/@angular/material/fesm2022/form-field.mjs
var matFormFieldAnimations = {
  // Represents:
  // trigger('transitionMessages', [
  //   // TODO(mmalerba): Use angular animations for label animation as well.
  //   state('enter', style({opacity: 1, transform: 'translateY(0%)'})),
  //   transition('void => enter', [
  //     style({opacity: 0, transform: 'translateY(-5px)'}),
  //     animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: {
    type: 7,
    name: "transitionMessages",
    definitions: [
      {
        type: 0,
        name: "enter",
        styles: {
          type: 6,
          styles: { opacity: 1, transform: "translateY(0%)" },
          offset: null
        }
      },
      {
        type: 1,
        expr: "void => enter",
        animation: [
          { type: 6, styles: { opacity: 0, transform: "translateY(-5px)" }, offset: null },
          { type: 4, styles: null, timings: "300ms cubic-bezier(0.55, 0, 0.55, 0.2)" }
        ],
        options: null
      }
    ],
    options: {}
  }
};
export {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError,
  matFormFieldAnimations
};
//# sourceMappingURL=@angular_material_form-field.js.map
