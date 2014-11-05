var $ = require('jquery');
$ = require('jquery-touchswipe')($);

$.fn.swipe.defaults.excludedElements = "input, select, textarea, a, .noSwipe";

$('ul#items').swipe({
  swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {
    next();
  },
  swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {
    previous();
  },
  threshold: 25
});

$('button#next').swipe({
  tap: function(event, target) {
    next();
    event.preventDefault();
  }
});

$('button#previous').swipe({
  tap: function(event, target) {
    previous();
    event.preventDefault();
  }
});

var previous = function() {
  var currentEl = $('.active');
  var previousEl = currentEl.prev();
  if (previousEl.length > 0) {
    currentEl.attr('class', 'item');
    previousEl.attr('class', 'item active');
  }
};

var next = function() {
  var currentEl = $('.active');
  var nextEl = currentEl.next();
  if (nextEl.length > 0) {
    currentEl.attr('class', 'item');
    nextEl.attr('class', 'item active');
  }
};
