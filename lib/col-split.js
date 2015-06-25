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

var _col = require('./col');

var _col2 = _interopRequireDefault(_col);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

// splits a column for nested grids
// gives better readability

var ColSplit = (function (_React$Component) {
  function ColSplit() {
    _classCallCheck(this, ColSplit);

    _get(Object.getPrototypeOf(ColSplit.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(ColSplit, _React$Component);

  _createClass(ColSplit, [{
    key: 'render',
    value: function render() {
      // we pass all probs except noGutter & children
      // the we add the default class no-gutter by default
      var _props = this.props;
      var noGutter = _props.noGutter;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['noGutter', 'children']);

      var gutterClass = (0, _classnames2['default'])(noGutter && 'no-gutter');

      return _react2['default'].createElement(
        _col2['default'],
        _extends({ className: 'col-split' }, props),
        _react2['default'].createElement(
          _row2['default'],
          { className: gutterClass },
          children
        )
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      noGutter: true
    },
    enumerable: true
  }]);

  return ColSplit;
})(_react2['default'].Component);

exports['default'] = ColSplit;
module.exports = exports['default'];