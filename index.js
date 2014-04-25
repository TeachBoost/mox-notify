/**
 * Notification wrapper library
 */

var $ = require( 'jquery' );
var _ = require( 'underscore' );
require( 'notifyjs' );

// create the API
var Notify = {
    // different type methods
    success: function ( message, options ) {
        return this._notify({
                text: message,
                icon: '<i class="fa fa-check" style="top:-2px;"></i>'
            }, _.extend({
                className: 'success'
            }, options ));
    },
    error: function ( message, options ) {
        return this._notify({
                text: message,
                icon: '<i class="fa fa-times-circle"></i>'
            }, _.extend({
                className: 'error'
            }, options ));
    },
    info: function ( message, options ) {
        return this._notify({
                text: message,
                icon: '<i class="fa fa-info-circle"></i>'
            }, _.extend({
                className: 'info'
            }, options ));
    },
    warning: function ( message, options ) {
        return this._notify({
                text: message,
                icon: '<i class="fa fa-warning"></i>'
            }, _.extend({
                className: 'warning'
            }, options ));
    },
    // wrapper for accessing methods by string type
    show: function ( type, message, options ) {
        return this[ type ]( message, options );
    },
    // private method; actually calls $.notify
    _notify: function ( data, options ) {
        $.notify( data, options );
    },
    // set up style
    _addStyle: function () {
        $.notify.addStyle( 'flat', {
            html:
                '<div>' +
                    '<div class="icon" data-notify-html="icon"/>' +
                    '<div class="text-wrapper sans-font">' +
                        '<div class="md-text text" data-notify-text="text"/>' +
                    '</div>' +
                '</div>',
            classes: {}
        });
    },
    // add the defaults
    _addDefaults: function () {
        $.notify.defaults({
            clickToHide: true,
            autoHide: true,
            autoHideDelay: 10000,
            arrowShow: false,
            arrowSize: 5,
            elementPosition: 'bottom left',
            globalPosition: 'top right',
            style: 'flat',
            className: 'error',
            showAnimation: 'fadeIn',
            showDuration: 400,
            hideAnimation: 'fadeOut',
            hideDuration: 200,
            gap: 2
        });
    }
};

Notify._addStyle();
Notify._addDefaults();

// return
module.exports = Notify;