var App = (function() {
    var App = {
        init: function() {
            var el = document.getElementById('cookies_notice');

            if (this.getCookie('_CK')) {
                el.style.display = 'none';
            } else {
                document.getElementById('cookies_notice_close').onclick = function() {
                    el.style.display = 'none';
                    App.setCookie('_CK', '1');
                    return false;
                };
            }
        },
        setCookie: function(k, v) {
           var expire = new Date();
           expire = new Date(expire.getTime() + 7776000000);
           document.cookie = k + "=" + v + ";expires=" + expire + ";path=/;SameSite=strict";
        },
        getCookie: function(k) {
            var parts, part;
            parts = document.cookie.split(";");
            for (var i = parts.length - 1; i >= 0; i--) {
                part = parts[i].replace(/^\s+/g, '').replace(/\s+$/, '');
                if (part.indexOf(k) == 0) {
                    parts = part.split("=");
                    return parts[1];
                }
            }

            return null;
        }
    };

    App.init();

    return App;
})();
