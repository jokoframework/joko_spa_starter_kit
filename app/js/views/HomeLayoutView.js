var Marionette     = require('marionette');
var Templates      = require('joko-templates');

var HomeLayoutView = Marionette.LayoutView.extend({
    template: Templates.homeLayoutView
});

module.exports = HomeLayoutView;
