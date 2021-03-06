# aurelia-long-click-event
aurelia plugin for long-click event. 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Issues](https://img.shields.io/github/issues/avrahamcool/aurelia-long-click-event.svg?style=flat)](https://github.com/avrahamcool/aurelia-long-click-event/issues)

[![NPMVersion](https://img.shields.io/npm/v/aurelia-long-click-event.svg?style=flat)](https://www.npmjs.com/package/aurelia-long-click-event)
[![NPMDownloads](https://img.shields.io/npm/dt/aurelia-long-click-event.svg?style=flat)](https://www.npmjs.com/package/aurelia-long-click-event) 
[![NPMSize](https://img.shields.io/bundlephobia/min/aurelia-long-click-event.svg?style=flat)](https://www.npmjs.com/package/aurelia-long-click-event)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/avrahamcool/aurelia-long-click-event.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/avrahamcool/aurelia-long-click-event/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/avrahamcool/aurelia-long-click-event.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/avrahamcool/aurelia-long-click-event/context:javascript)
[![DeepScan grade](https://deepscan.io/api/teams/5394/projects/7171/branches/67735/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5394&pid=7171&bid=67735)

## How to Use

install the plugin using `yarn` or `npm`.
```shell
yarn add aurelia-long-click-event
npm install aurelia-long-click-event
```

initialize the plugin in your `main.js` or `main.ts`.

```diff
  import { PLATFORM } from "aurelia-pal";

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
+    .plugin(PLATFORM.moduleName("aurelia-long-click-event"));
```

you can pass optional configuration to control the name of the long-click event (defaults to "long-click"), and the click duration (defaults to 500 ms).

```js
  import { LongClickConfig } from "aurelia-long-click-event"; // (TS users can use this interface for strongly typed config)
    ...
    .plugin(PLATFORM.moduleName("aurelia-long-click-event"), { longClickEventName: "long-click", clickDurationMS: 500 });
```

now you can register callbacks to the event just like any regular event (using `trigger` or `delegate`)

```html
<button long-click.delegate="longClick()">long click me</button>
```


### plugin was build using:
* https://github.com/john-doherty/long-press-event
* https://github.com/aurelia-toolbelt/aurelia-plugin-skeleton-typescript


### How to build and run sample
  * ```npm run watch```
    * Launches sample and watches src folder
    * it does the type-checking and ts-lints on every save
    * open `http://localhost:4444` to see the plugin in action.

  * ```npm run build```
    * Produces amd/commonjs/system/es2015 builds
    * This will *NOT* emit/update files if you have any typescript or tslint errors

##
I Need help regarding how to test the plugin - PR welcome