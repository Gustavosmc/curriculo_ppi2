+function(e){"use strict";function t(t){return this.each(function(){var r=e(this),i=r.data("bs.tab");i||r.data("bs.tab",i=new n(this)),"string"==typeof t&&i[t]()})}var n=function(t){this.element=e(t)};n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.prototype.show=function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.data("target");if(r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var i=n.find(".active:last a"),o=e.Event("hide.bs.tab",{relatedTarget:t[0]}),s=e.Event("show.bs.tab",{relatedTarget:i[0]});if(i.trigger(o),t.trigger(s),!s.isDefaultPrevented()&&!o.isDefaultPrevented()){var a=e(r);this.activate(t.closest("li"),n),this.activate(a,a.parent(),function(){i.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:i[0]})})}}},n.prototype.activate=function(t,r,i){function o(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}var s=r.find("> .active"),a=i&&e.support.transition&&(s.length&&s.hasClass("fade")||!!r.find("> .fade").length);s.length&&a?s.one("bsTransitionEnd",o).emulateTransitionEnd(n.TRANSITION_DURATION):o(),s.removeClass("in")};var r=e.fn.tab;e.fn.tab=t,e.fn.tab.Constructor=n,e.fn.tab.noConflict=function(){return e.fn.tab=r,this};var i=function(n){n.preventDefault(),t.call(e(this),"show")};e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery);