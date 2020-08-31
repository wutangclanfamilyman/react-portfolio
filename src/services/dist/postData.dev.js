"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PostData =
/*#__PURE__*/
function () {
  function PostData() {
    _classCallCheck(this, PostData);

    this._apiBase = 'https://vladyslav-koziatnyk.000webhostapp.com/wp-content/themes/vkportfoliotheme/test.php';
  }

  _createClass(PostData, [{
    key: "postContactForm",
    value: function postContactForm(data) {
      (0, _axios["default"])({
        method: 'post',
        url: this._apiBase,
        data: data,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    }
  }]);

  return PostData;
}();

exports["default"] = PostData;