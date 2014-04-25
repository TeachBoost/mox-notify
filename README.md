# Mox Notify

Notification module within the Mox system

There are no tests for this module since it relies on the
jQuery plugin "notifyjs". In order to test this, we need
to create a browserify build with the plugin shimmed and
the DOM library passed in to Notify as a dependency.