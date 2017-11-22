'use strict';

var _require = require('./passive-event-listeners'),
    addPassiveEventListener = _require.addPassiveEventListener,
    removePassiveEventListener = _require.removePassiveEventListener;

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

module.exports = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return addPassiveEventListener(document, event, cancelEvent);
    });
  }
};