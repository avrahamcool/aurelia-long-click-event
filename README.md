# aurelia-long-click-event
aurelia plugin for long-click event.


## How to Use

install the plugin
```shell
yarn add aurelia-long-click-event
```

or

```shell
npm install aurelia-long-click-event
```
initialize the plugin in your `main.js` or `main.ts`,

```js
  import { PLATFORM } from "aurelia-pal";
  ...
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin(PLATFORM.moduleName("aurelia-long-click-event"));
```
you can pass optional configuration to control the name of the long-click event (defaults to "long-click"), and the click duration (defaults to 500 ms).

```js
  import { LongClickConfig } from "aurelia-long-click-event"; // (for type safety)
  ...
    .plugin(PLATFORM.moduleName("aurelia-long-click-event"), { longClickEventName: "long-click", clickDurationMS: 500 } as LongClickConfig);
```

now you can register callbacks to the event just like any regular event (using `trigger` or `delegate`)

```html
<button click.delegate="click()" long-click.delegate="longClick()">Click me</button>
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

### How to run unit tests

  * To run the unit test with _*Jest*_ run : _```npm run test:unit```_
    * Watch mode: _```npm run test:unit -- --watch```_
    * See the coverage: _```npm run test:unit -- --coverage```_

### How to run E2E tests

  * Simply run: _```npm run test:e2e```_
    * Make sure you've run the sample prior to the e2e test by running the _`npm watch`_ command.
