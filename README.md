# karma-console-test
debugging a logging issue in karma https://github.com/karma-runner/karma/issues/3131

```
git clone https://github.com/pascalpp/karma-console-test
cd karma-console-test
npm install
karma start
```

Note that logs outside of test blocks are not sent to terminal.

then
```
edit ./node_modules/karma/lib/browser.js
```

and modify the onKarmaError method to be:
```
onKarmaError (error) {
    if (this.isNotConnected()) {
        this.lastResult.error = true
    }
    this.emitter.emit('browser_error', this, error)
    this.refreshNoActivityTimeout()
}
```

and rerun `karma start`. Those console logs still don't appear.
