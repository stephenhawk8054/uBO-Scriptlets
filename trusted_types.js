'use strict';

/// set-trusted-types.js
/// dependency run-at.fn
function setTrustedTypes() {
  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    window.trustedTypes.createPolicy("default", {
      createScript: string => string
    });
  }
  runAt(() => {}, 'interactive');
}
