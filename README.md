# uBO-Scriptlets
Custom scriptlets for uBlock Origin (uBO)

## `set-trusted-types`
Set website's `default` script policy to allow modifying script node text content.

1. Click on uBO icon > ⚙ [Dashboard button](https://github.com/gorhill/uBlock/wiki/Quick-guide:-popup-user-interface#the-tools) > Go to ["Settings" pane](https://github.com/gorhill/uBlock/wiki/Dashboard:-Settings)
2. Scroll down and turn on `I am an advanced user` > Click on ⚙ icon at the end
3. Find `userResourcesLocation` line
4. Replace `unset` to https://cdn.jsdelivr.net/gh/stephenhawk8054/uBO-Scriptlets@latest/trusted_types.js
5. Click on `Apply changes` button and go back to "Settings" pane at step 1
6. Add the filter(s) in ["My filters" pane](https://github.com/gorhill/uBlock/wiki/Dashboard:-My-filters). For example:

```adb
www.youtube.com##+js(set-trusted-types)
```

7. Click `✓ Apply changes` > Open new tab and test again.
