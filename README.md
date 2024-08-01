# uBO-Scriptlets
Custom scriptlets for uBlock Origin (uBO)

## `set-trusted-types`
Set website's `default` script policy to allow modifying script node text content.

1. Click on uBO icon > ⚙ [Dashboard button](https://github.com/gorhill/uBlock/wiki/Quick-guide:-popup-user-interface#the-tools) > Go to ["Settings" pane](https://github.com/gorhill/uBlock/wiki/Dashboard:-Settings)
4. Scroll down and turn on `I am an advanced user` > Click on ⚙ icon at the end
5. Find `userResourcesLocation` line
6. Replace `unset` to https://cdn.jsdelivr.net/gh/stephenhawk8054/uBO-Scriptlets@latest/trusted_types.js
7. Click on `Apply changes` button and go back to "Settings" pane at step 1
8. Add the filter(s) in ["My filters" pane](https://github.com/gorhill/uBlock/wiki/Dashboard:-My-filters) > Click `✓ Apply changes`. For example:

```adb
www.youtube.com##+js(set-trusted-types)
```

10. Open new tab and test again.
