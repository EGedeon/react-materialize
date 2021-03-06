'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var classes = {
        centered: this.props.centered,
        highlight: this.props.hoverable,
        'responsive-table': this.props.responsive,
        stripped: this.props.stripped,
        bordered: this.props.bordered
      };

      var _props = this.props;
      var className = _props.className;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['className', 'children']);

      return _react2.default.createElement(
        'table',
        _extends({ className: (0, _classnames2.default)(classes, className) }, this.props),
        children
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.propTypes = {
  /**
  * Center align all the text in the table
  * @default false
  */
  centered: _react2.default.PropTypes.bool,
  /**
  * Highlight the row that's hovered
  * @default false
  */
  hoverable: _react2.default.PropTypes.bool,
  /**
  * Enable response to make the table horizontally scrollable on smaller screens
  * @default false
  */
  responsive: _react2.default.PropTypes.bool,
  /**
  * Stripped style
  * @default false
  */
  stripped: _react2.default.PropTypes.bool,
  /**
  * Add border to each row
  * @default false
  */
  bordered: _react2.default.PropTypes.bool
};

exports.default = Table;