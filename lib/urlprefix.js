/**
 * Module dependencies.
 */

var	stylus = require('stylus'),
  	nodes  = stylus.nodes;


module.exports = function(options) {
    const prefix = options.prefix || false

    if (!prefix) {
        return false
    }

    return function(style) {
        style.define('url', function (url) {
            if (url.string !== undefined) {
                var ret = prefix + url.string;

                return new nodes.Literal("url('" + ret + "')");
            }
        })
    }
}
