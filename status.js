/* status.js — single source of truth for the status-bar ticker.
   Change STATUS_TEXT below and every page (index, about, credentials)
   updates at once. The live dot and the location text stay in the HTML
   so there is still a sensible bar if JavaScript is disabled. */
(function () {
  "use strict";

  // ── EDIT THIS LINE to change the ticker everywhere ──
  var STATUS_TEXT = 'Now playing — <em>Pay Attention</em> · out everywhere you stream, go give it a spin';

  function applyStatus() {
    var el = document.querySelector(".status-now");
    if (!el) return;
    el.innerHTML = '<span class="dot"></span> ' + STATUS_TEXT;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyStatus);
  } else {
    applyStatus();
  }
})();
