'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Row = (function (_React$Component) {
  function Row() {
    _classCallCheck(this, Row);

    _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Row, _React$Component);

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['className']);

      var cls = (0, _classnames2['default'])(this.props.className, 'row');

      return _react2['default'].createElement('div', _extends({ className: cls }, props));
    }
  }]);

  return Row;
})(_react2['default'].Component);

exports['default'] = Row;
module.exports = exports['default'];