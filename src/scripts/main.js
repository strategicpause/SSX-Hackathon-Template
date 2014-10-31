require("script!jquery/dist/jquery.js");
require("script!jquery-touchswipe/jquery.touchSwipe.js");

$('ul#items').swipe({
  swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
    var currentEl = $('.active');
    var nextEl = currentEl.next();
    if (nextEl.length > 0) {
      currentEl.attr('class', 'item');
      nextEl.attr('class', 'item active');
    }
  },
  swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
    var currentEl = $('.active');
    var previousEl = currentEl.prev();
    if (previousEl.length > 0) {
      currentEl.attr('class', 'item');
      previousEl.attr('class', 'item active');
    }
  },
  tap: function(event, target) {
    var altText = $(target).attr('alt');
    console.log("Tap Event");
  },
  threshold: 25
});
