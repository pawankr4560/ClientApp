import {
  FactoryTarget,
  Injectable,
  NgZone,
  Observable,
  RendererFactory2,
  Subject,
  core_exports,
  filter,
  init_core,
  init_esm,
  init_operators,
  inject,
  shareReplay,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable
} from "./chunk-YVHSCJHQ.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// node_modules/@angular/cdk/fesm2022/observers/private.mjs
var loopLimitExceededErrorHandler, SingleBoxSharedResizeObserver, SharedResizeObserver;
var init_private = __esm({
  "node_modules/@angular/cdk/fesm2022/observers/private.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    loopLimitExceededErrorHandler = (e) => {
      if (e instanceof ErrorEvent && e.message === "ResizeObserver loop limit exceeded") {
        console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
      }
    };
    SingleBoxSharedResizeObserver = class {
      _box;
      /** Stream that emits when the shared observer is destroyed. */
      _destroyed = new Subject();
      /** Stream of all events from the ResizeObserver. */
      _resizeSubject = new Subject();
      /** ResizeObserver used to observe element resize events. */
      _resizeObserver;
      /** A map of elements to streams of their resize events. */
      _elementObservables = /* @__PURE__ */ new Map();
      constructor(_box) {
        this._box = _box;
        if (typeof ResizeObserver !== "undefined") {
          this._resizeObserver = new ResizeObserver((entries) => this._resizeSubject.next(entries));
        }
      }
      /**
       * Gets a stream of resize events for the given element.
       * @param target The element to observe.
       * @return The stream of resize events for the element.
       */
      observe(target) {
        if (!this._elementObservables.has(target)) {
          this._elementObservables.set(target, new Observable((observer) => {
            const subscription = this._resizeSubject.subscribe(observer);
            this._resizeObserver?.observe(target, { box: this._box });
            return () => {
              this._resizeObserver?.unobserve(target);
              subscription.unsubscribe();
              this._elementObservables.delete(target);
            };
          }).pipe(
            filter((entries) => entries.some((entry) => entry.target === target)),
            // Share a replay of the last event so that subsequent calls to observe the same element
            // receive initial sizing info like the first one. Also enable ref counting so the
            // element will be automatically unobserved when there are no more subscriptions.
            shareReplay({ bufferSize: 1, refCount: true }),
            takeUntil(this._destroyed)
          ));
        }
        return this._elementObservables.get(target);
      }
      /** Destroys this instance. */
      destroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this._resizeSubject.complete();
        this._elementObservables.clear();
      }
    };
    SharedResizeObserver = class _SharedResizeObserver {
      _cleanupErrorListener;
      /** Map of box type to shared resize observer. */
      _observers = /* @__PURE__ */ new Map();
      /** The Angular zone. */
      _ngZone = inject(NgZone);
      constructor() {
        if (typeof ResizeObserver !== "undefined" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          this._ngZone.runOutsideAngular(() => {
            const renderer = inject(RendererFactory2).createRenderer(null, null);
            this._cleanupErrorListener = renderer.listen("window", "error", loopLimitExceededErrorHandler);
          });
        }
      }
      ngOnDestroy() {
        for (const [, observer] of this._observers) {
          observer.destroy();
        }
        this._observers.clear();
        this._cleanupErrorListener?.();
      }
      /**
       * Gets a stream of resize events for the given target element and box type.
       * @param target The element to observe for resizes.
       * @param options Options to pass to the `ResizeObserver`
       * @return The stream of resize events for the element.
       */
      observe(target, options) {
        const box = options?.box || "content-box";
        if (!this._observers.has(box)) {
          this._observers.set(box, new SingleBoxSharedResizeObserver(box));
        }
        return this._observers.get(box).observe(target);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _SharedResizeObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _SharedResizeObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: SharedResizeObserver, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [] });
  }
});

export {
  SharedResizeObserver,
  init_private
};
//# sourceMappingURL=chunk-BLFB6EIC.js.map
