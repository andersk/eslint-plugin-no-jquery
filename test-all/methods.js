/**
 * This file lists all known methods, for tracking #112
 *
 * Once a rule has been created for a method, it should be disabled
 * with a "next-line" directive, and moved to the bottom half of
 * the file.
 *
 * The rule prefix is renamed from no-jquery to rulesdir as the
 * rules are loaded directly via the rulesdir plugin.
 */
var $x;
$x.add();
$x.addBack();
$x.after();
$x.append();
$x.appendTo();
$x.before();
$x.children();
$x.clearQueue();
$x.constructor();
$x.contents();
$x.delay();
$x.dequeue();
$x.detach();
$x.empty();
$x.end();
$x.eq();
$x.extend();
$x.finish();
$x.first();
$x.get();
$x.height();
$x.index();
$x.init();
$x.innerHeight();
$x.innerWidth();
$x.insertAfter();
$x.insertBefore();
$x.last();
$x.next();
$x.nextAll();
$x.nextUntil();
$x.not();
$x.off();
$x.offset();
$x.offsetParent();
$x.on();
$x.one();
$x.outerHeight();
$x.outerWidth();
$x.parentsUntil();
$x.parse();
$x.position();
$x.prepend();
$x.prependTo();
$x.prev();
$x.prevAll();
$x.prevUntil();
$x.promise();
$x.pushStack();
$x.queue();
$x.remove();
$x.replaceAll();
$x.replaceWith();
$x.scrollLeft();
$x.scrollTop();
$x.siblings();
$x.slice();
$x.stop();
$x.toArray();
$x.triggerHandler();
$x.width();

// eslint-disable-next-line rulesdir/no-class
$x.addClass();
// eslint-disable-next-line rulesdir/no-event-shorthand, rulesdir/no-ajax-events
$x.ajaxComplete();
// eslint-disable-next-line rulesdir/no-event-shorthand, rulesdir/no-ajax-events
$x.ajaxError();
// eslint-disable-next-line rulesdir/no-event-shorthand, rulesdir/no-ajax-events
$x.ajaxSend();
// eslint-disable-next-line rulesdir/no-event-shorthand, rulesdir/no-ajax-events
$x.ajaxStart();
// eslint-disable-next-line rulesdir/no-event-shorthand, rulesdir/no-ajax-events
$x.ajaxStop();
// eslint-disable-next-line rulesdir/no-event-shorthand, rulesdir/no-ajax-events
$x.ajaxSuccess();
// eslint-disable-next-line rulesdir/no-animate
$x.animate();
// eslint-disable-next-line rulesdir/no-attr
$x.attr();
// eslint-disable-next-line rulesdir/no-bind
$x.bind();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.blur();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.change();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.click();
// eslint-disable-next-line rulesdir/no-clone
$x.clone();
// eslint-disable-next-line rulesdir/no-closest
$x.closest();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.contextmenu();
// eslint-disable-next-line rulesdir/no-css
$x.css();
// eslint-disable-next-line rulesdir/no-data
$x.data();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.dblclick();
// eslint-disable-next-line rulesdir/no-delegate
$x.delegate();
// eslint-disable-next-line rulesdir/no-each, rulesdir/no-each-collection
$x.each();
// eslint-disable-next-line rulesdir/no-fade
$x.fadeIn();
// eslint-disable-next-line rulesdir/no-fade
$x.fadeOut();
// eslint-disable-next-line rulesdir/no-fade
$x.fadeTo();
// eslint-disable-next-line rulesdir/no-fade
$x.fadeToggle();
// eslint-disable-next-line rulesdir/no-filter
$x.filter();
// eslint-disable-next-line rulesdir/no-find
$x.find();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.focus();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.focusin();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.focusout();
// eslint-disable-next-line rulesdir/no-has
$x.has();
// eslint-disable-next-line rulesdir/no-class, rulesdir/no-class-state
$x.hasClass();
// eslint-disable-next-line rulesdir/no-hide, rulesdir/no-visibility
$x.hide();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.hover();
// eslint-disable-next-line rulesdir/no-html
$x.html();
// eslint-disable-next-line rulesdir/no-is
$x.is();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.keydown();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.keypress();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.keyup();
// eslint-disable-next-line rulesdir/no-load, rulesdir/no-load-shorthand
$x.load();
// eslint-disable-next-line rulesdir/no-map, rulesdir/no-map-collection
$x.map();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.mousedown();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.mouseenter();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.mouseleave();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.mousemove();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.mouseout();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.mouseover();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.mouseup();
// eslint-disable-next-line rulesdir/no-parent
$x.parent();
// eslint-disable-next-line rulesdir/no-parents
$x.parents();
// eslint-disable-next-line rulesdir/no-prop
$x.prop();
// eslint-disable-next-line rulesdir/no-ready, rulesdir/no-ready-shorthand
$x.ready();
// eslint-disable-next-line rulesdir/no-attr
$x.removeAttr();
// eslint-disable-next-line rulesdir/no-class
$x.removeClass();
// eslint-disable-next-line rulesdir/no-data
$x.removeData();
// eslint-disable-next-line rulesdir/no-prop
$x.removeProp();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.resize();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.scroll();
// eslint-disable-next-line rulesdir/no-event-shorthand
$x.select();
// eslint-disable-next-line rulesdir/no-serialize
$x.serialize();
// eslint-disable-next-line rulesdir/no-serialize
$x.serializeArray();
// eslint-disable-next-line rulesdir/no-show, rulesdir/no-visibility
$x.show();
// eslint-disable-next-line rulesdir/no-slide
$x.slideDown();
// eslint-disable-next-line rulesdir/no-slide
$x.slideToggle();
// eslint-disable-next-line rulesdir/no-slide
$x.slideUp();
// eslint-disable-next-line rulesdir/no-event-shorthand, rulesdir/no-submit
$x.submit();
// eslint-disable-next-line rulesdir/no-text
$x.text();
// eslint-disable-next-line rulesdir/no-toggle, rulesdir/no-visibility
$x.toggle();
// eslint-disable-next-line rulesdir/no-class
$x.toggleClass();
// eslint-disable-next-line rulesdir/no-trigger
$x.trigger();
// eslint-disable-next-line rulesdir/no-unbind
$x.unbind();
// eslint-disable-next-line rulesdir/no-undelegate
$x.undelegate();
// eslint-disable-next-line rulesdir/no-wrap
$x.unwrap();
// eslint-disable-next-line rulesdir/no-val
$x.val();
// eslint-disable-next-line rulesdir/no-wrap
$x.wrap();
// eslint-disable-next-line rulesdir/no-wrap
$x.wrapAll();
// eslint-disable-next-line rulesdir/no-wrap
$x.wrapInner();
