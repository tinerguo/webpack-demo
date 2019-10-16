"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

console.log([1, 2, 3].findIndex(function (x) {
  return x == 4;
}));
console.log('abc'.padStart(10));

var alertMe = function alertMe(msg) {
  console.log(msg);
};

var Robot =
/*#__PURE__*/
function () {
  function Robot(msg) {
    (0, _classCallCheck2.default)(this, Robot);
    this.message = msg;
  }

  (0, _createClass2.default)(Robot, [{
    key: "say",
    value: function say() {
      alertMe(this.message);
    }
  }]);
  return Robot;
}();

var marvin = new Robot('hello babel');
marvin.say();

