import { FrameworkConfiguration } from "aurelia-framework";

/**
 * control the basic settings of the plugin
 *
 * @export
 * @interface LongClickConfig
 */
export interface LongClickConfig {
  /**
   * set the event name - defaults to "long-click"
   *
   * @type {string}
   * @memberof LongClickConfig
   */
  longClickEventName?: string;

  /**
   * set the duration of the click to be considered long (value in milliseconds) - defaults to 500
   *
   * @type {number}
   * @memberof LongClickConfig
   */
  clickDurationMS?: number;
}

const DEFAULT_CLICK_DURATION_MS: number = 500;
const DEFAULT_LONG_CLICK_EVENT_NAME: string = "long-click";

export function configure(_frameworkConfig: FrameworkConfiguration, pluginConfig?: LongClickConfig) {
  // use config if it exists, otherwise use defaults
  const clickDurationMS: number = (pluginConfig && pluginConfig.clickDurationMS > 0) ? pluginConfig.clickDurationMS : DEFAULT_CLICK_DURATION_MS;
  const longClickEventName: string = (pluginConfig && pluginConfig.longClickEventName) || DEFAULT_LONG_CLICK_EVENT_NAME;

  // patch CustomEvent to allow constructor creation (IE/Chrome)
  // @ts-ignore - CustomEvent is not recognized
  if (typeof window.CustomEvent !== "function") {
    // @ts-ignore - CustomEvent is not recognized
    window.CustomEvent = function (event: string, params: any) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };

      const evt: CustomEvent<any> = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    // @ts-ignore - CustomEvent & event are not recognized
    window.CustomEvent.prototype = window.Event.prototype;
  }

  let timer: number = null;

  const startingEvents: string[] = ["touchstart", "mousedown"];
  const endingEvents: string[] = ["touchcancel", "mouseout", "touchend", "mouseup", "mousewheel", "wheel", "scroll"]

  // listen to mousedown event on any child element of the body
  startingEvents.forEach(eventName => {
    document.addEventListener(eventName, (e: Event) => {
      const el: EventTarget = e.target;
  
      // start the timer
      timer = window.setTimeout(() => {
        // fire the long-press event
        el.dispatchEvent(new CustomEvent(longClickEventName, { bubbles: true, cancelable: true }));
        clearTimeout(timer);
      }, clickDurationMS);
    });
  });
  
  // clear the timeout if the user releases the mouse/touch/leaves the element/scroll
  endingEvents.forEach(eventName => {
    document.addEventListener(eventName, _ => {
      clearTimeout(timer);
    });
  });
}
