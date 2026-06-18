import {
  CommonModule,
  init_common
} from "./chunk-JK4X75GU.js";
import {
  Component,
  Input,
  NgZone,
  ViewChild,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-YVHSCJHQ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\dynamic-component\dynamic-component.html
var dynamic_component_default;
var init_dynamic_component = __esm({
  "angular:jit:template:src\\app\\dynamic-component\\dynamic-component.html"() {
    dynamic_component_default = '<div style="border:1px solid #ccc; padding:10px; margin-top:10px">\r\n      <h3>{{ title }}</h3>\r\n      <p>I am loaded dynamically from AppComponent</p>\r\n    </div>\r\n\r\n\r\n<h3>{{ title }}</h3>\r\n\r\n<input\r\n  #searchInput\r\n  type="text"\r\n  placeholder="Search a place"\r\n  class="input"\r\n/>\r\n\r\n<div *ngIf="place as p">\r\n  <hr />\r\n  <p><b>Name:</b> {{ p.name }}</p>\r\n  <p><b>Address:</b> {{ p.address }}</p>\r\n  <p><b>Latitude:</b> {{ p.lat }}</p>\r\n  <p><b>Longitude:</b> {{ p.lng }}</p>\r\n</div>';
  }
});

// angular:jit:style:src\app\dynamic-component\dynamic-component.css
var dynamic_component_default2;
var init_dynamic_component2 = __esm({
  "angular:jit:style:src\\app\\dynamic-component\\dynamic-component.css"() {
    dynamic_component_default2 = "/* src/app/dynamic-component/dynamic-component.css */\n/*# sourceMappingURL=dynamic-component.css.map */\n";
  }
});

// src/app/dynamic-component/dynamic-component.ts
var DynamicComponent;
var init_dynamic_component3 = __esm({
  "src/app/dynamic-component/dynamic-component.ts"() {
    "use strict";
    init_tslib_es6();
    init_dynamic_component();
    init_dynamic_component2();
    init_common();
    init_core();
    DynamicComponent = class DynamicComponent2 {
      ngZone;
      title = "Default Title";
      searchInput;
      place = null;
      constructor(ngZone) {
        this.ngZone = ngZone;
      }
      ngAfterViewInit() {
        const autocomplete = new google.maps.places.Autocomplete(this.searchInput.nativeElement, {
          types: ["geocode"],
          componentRestrictions: { country: "in" }
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            const place = autocomplete.getPlace();
            if (!place.geometry || !place.geometry.location) {
              console.warn("No geometry available for selected place");
              return;
            }
            const location = place.geometry.location;
            this.place = {
              name: place.name ?? "",
              address: place.formatted_address ?? "",
              lat: location.lat(),
              lng: location.lng()
            };
          });
        });
      }
      static ctorParameters = () => [
        { type: NgZone }
      ];
      static propDecorators = {
        title: [{ type: Input }],
        searchInput: [{ type: ViewChild, args: ["searchInput"] }]
      };
    };
    DynamicComponent = __decorate([
      Component({
        selector: "app-dynamic-component",
        imports: [CommonModule],
        template: dynamic_component_default,
        styles: [dynamic_component_default2]
      })
    ], DynamicComponent);
  }
});

export {
  DynamicComponent,
  init_dynamic_component3 as init_dynamic_component
};
//# sourceMappingURL=chunk-LLSYRBPU.js.map
