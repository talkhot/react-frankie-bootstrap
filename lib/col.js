'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Col = (function (_React$Component) {
  function Col() {
    _classCallCheck(this, Col);

    _get(Object.getPrototypeOf(Col.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Col, _React$Component);

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['className']);

      var sizes = {
        'large': 'lg',
        'medium': 'md',
        'small': 'sm',
        'xsmall': 'xs'
      };

      var classes = {};
      _Object$keys(sizes).forEach(function (key) {
        var size = sizes[key];
        var prop = size;
        var classPart = size + '-';

        if (props[prop]) {
          classes['col-' + classPart + props[prop]] = true;
        }

        prop = size + 'Offset';
        classPart = size + '-offset-';
        if (props[prop] >= 0) {
          classes['col-' + classPart + props[prop]] = true;
        }

        prop = size + 'Push';
        classPart = size + '-push-';
        if (props[prop] >= 0) {
          classes['col-' + classPart + props[prop]] = true;
        }

        prop = size + 'Pull';
        classPart = size + '-pull-';
        if (props[prop] >= 0) {
          classes['col-' + classPart + props[prop]] = true;
        }
      }, this);

      var cls = (0, _classnames2['default'])(this.props.className, classes);

      return _react2['default'].createElement('div', _extends({ className: cls }, props));
    }
  }]);

  return Col;
})(_react2['default'].Component);

exports['default'] = Col;
module.exports = exports['default'];