var $ = require('jquery');

$.fn.loading = function(flag) {
    var el = $(this);
    var icon = el.parent().find(".joko-loading");
    if (icon.length === 0) {
        el.after("<img class='img-circle joko-loading" +
            " center-block' src='assets/loader.gif'>");
        icon.hide();
    }
    if (flag) {
        el.hide();
        icon.show();
    } else {
        el.show();
        icon.hide();
    }
    return this;
};
