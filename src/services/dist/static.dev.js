"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifVisibleAll = void 0;

var ifVisibleAll = function ifVisibleAll(selectors, animation) {
  selectors.forEach(function (item) {
    var bounding = item.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      if (!item.classList.contains(animation)) {
        item.classList.add(animation);
      }
    }
  });
};

exports.ifVisibleAll = ifVisibleAll;